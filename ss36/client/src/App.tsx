import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, addTask, deleteTask, toggleTask } from "./store/taskSlice";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import FilterControls from "./components/FilterControls";
import type { RootState, AppDispatch } from "./store/store";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, loading, error } = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAdd = (title: string, priority: "low" | "medium" | "high") => {
    if (!title.trim()) {
      alert("Tên công việc không được để trống!");
      return;
    }
    if (tasks.some((t) => t.taskName.toLowerCase() === title.toLowerCase())) {
      alert("Tên công việc đã tồn tại!");
      return;
    }
    dispatch(addTask({ taskName: title, completed: false, priority }));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (taskId: number) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      dispatch(toggleTask(task));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>
      <TaskForm onAdd={handleAdd} />
      <FilterControls
        status="all"
        priority="all"
        search=""
        onStatusChange={() => {}}
        onPriorityChange={() => {}}
        onSearchChange={() => {}}
      />
      {loading && <p>⏳ Đang tải...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id.toString()}
            title={task.taskName}
            completed={task.completed}
            priority={task.priority}
            onToggle={() => handleToggle(task.id)}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
