import React from 'react'

const Footer = ({ tasks, setTasks }) => {
  const completedCount = tasks.filter((task) => task.completed).length

  const clearCompletedTasks = () => {
    const filtered = tasks.filter((task) => !task.completed)
    setTasks(filtered)
  }
  return (
    <div className="footer">
      <p style={{}}>
        {completedCount} of {tasks.length} tasks completed
      </p>

      <button
        onClick={clearCompletedTasks}
        className="clear-btn"
        disabled={completedCount === 0}
        style={{
          color: 'red',
          background: 'none',
          border: 'none',
          cursor: 'disabled' ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
          opacity: 'disabled' ? 0.5 : 1,
        }}
      >
        Clear Completed
      </button>
    </div>
  )
}

export default Footer
