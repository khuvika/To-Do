import React from 'react'
import Footer from './Footer'

export const TodoList = ({ tasks, onToggle, onDelete, setTasks }) => {
  return (
    <div>
      <ul className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
              />
              <span
                style={{
                  fontSize: '14px',
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {task.text}
              </span>
            </div>
            <div>
              <button
                onClick={() => onDelete(task.id)}
                style={{
                  border: 'none',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(254, 242, 242, 1)',
                  color: 'rgba(239, 68, 68, 1)',
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>
      <div>
        <Footer tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  )
}
