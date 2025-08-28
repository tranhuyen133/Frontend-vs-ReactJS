import { type Todo } from "../types/todoType"

export default function Footer({ todos }: { todos: Todo[] }) {
    let doneTodoNumber = 0
    todos.forEach((todo) => {
        if (todo.isDone) {
            doneTodoNumber += 1
        }
    })
    return (
        <>
            {/* Hiển thị khi chưa có công việc hoàn thành */}
            {
                doneTodoNumber === 0 && todos.length !== 0 && <div className="text-center text-danger fw-medium">
                    Chưa có công việc nào hoàn thành
                </div>}
            {/* Hiển thị khi có công việc hoàn thành */}
            {
                doneTodoNumber !== 0 && <div className="text-center text-success fw-medium">
                    1 / 2 công việc đã hoàn thành
                </div>
            }

            {/* Hiển thị khi chưa có công việc */}
            {todos.length === 0 && <div className="text-center text-warning fw-medium">
                Chưa có công việc nào
            </div>}

        </>
    )
}