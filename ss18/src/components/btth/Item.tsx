interface propsType {
    content: string;
    isDone: boolean;
    id: number;
    toggleTodo: (id: number) => void
    deleteTodo: (id: number) => void
}

export default function Item({ content, isDone, id, toggleTodo, deleteTodo }: propsType) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {isDone ? <div className="form-check">
                <input className="form-check-input me-2" type="checkbox" onChange={() => { toggleTodo(id) }} />
                <s className="task-name">{content}</s>
            </div> : <div className="form-check">
                <input className="form-check-input me-2" type="checkbox" onChange={() => { toggleTodo(id) }} />
                <span className="task-name">{content}</span>
            </div>}

            <div>
                <i className="fas fa-edit text-primary me-3" role="button" />
                <i className="fas fa-trash text-danger" role="button" onClick={() => { deleteTodo(id) }} />
            </div>
        </li>
    )
}