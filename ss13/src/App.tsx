import { Component } from 'react'
import Todo from './components/Todo';

interface TodoType {
  id: number;
  content: string;
  isDone: boolean
}
interface TodosState {
  todos: TodoType[]
}
export default class App extends Component<{}, TodosState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [{
        id: 1,
        content: "Đây là công việc 1",
        isDone: true
      }]
    }
  }
  render() {
    let { todos } = this.state
    const handeleInput =(event: React.ChangeEvent<HTMLAllColl)
    return (
      <>
        <div className="container">
          {/* Header */}
          <div className="header">
            <h1>📝 TodoList</h1>
            <p>Quản lý công việc hiệu quả</p>
          </div>
          {/* Input Section */}
          <div className="input-section">
            <div className="input-group">
              <input
                type="text"
                className="task-input"
                placeholder="Nhập công việc cần làm..."
                maxLength={100}
              />
              <button className="add-btn">➕ Thêm</button>
            </div>
            <div className="error-message">{/* Thông báo lỗi sẽ hiển thị ở đây */}</div>
          </div>
          {/* Empty State */}
          {todos.length === 0 ? <div className="empty-state">
            <div className="empty-state-icon">📋</div>
            <div className="empty-state-text">Chưa có công việc nào</div>
            <div className="empty-state-subtext">
              Hãy thêm công việc đầu tiên của bạn!
            </div>
          </div> : <div className="todo-list">
            {/* Todo List */}

            <Todo content={todos[0].content} isDone={todos[0].isDone}></Todo>
          </div>}
          {/* Footer */}
          <div className="footer">
            <div className="task-counter">
              Đã hoàn thành: <span className="counter-number">2</span> /
              <span className="counter-number">6</span> công việc
            </div>
          </div>
        </div>

      </>
    )
  }
}