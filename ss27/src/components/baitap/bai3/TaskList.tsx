import React from "react";
import { Link } from "react-router-dom";
import { tasks } from "./tasks";

function TaskList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách công việc</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "10px" }}>
            <b>{task.title}</b>
            <br />
            <Link to={`/task/${task.id}`}>Xem chi tiết</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
