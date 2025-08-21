import { Component } from 'react'

interface TodoProps {
    content: string;
    isDone: boolean;
    handleDelete: (id:number) => void 
}

export default class Todo extends Component<TodoProps> {
    render() {
        let {content, isDone, handleDelete} = this.props
        return (
            <div className="todo-item">
                <input type="checkbox" className="todo-checkbox" />
                {this.props.isDone ?
                    <span className="todo-text completed">{this.props.content}</span>
                    : <span className="todo-text">{content}</span>}
                <div className="todo-actions">
                    <button className="delete-btn" onClick={handleDelete(1)}> Xóa</button>
                </div>
            </div>
        )

        
    }
}