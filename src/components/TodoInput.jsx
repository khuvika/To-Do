import React, { useState } from 'react'

export const TodoInput = ({ onAdd }) => {
  const [input, setInput] = useState('')

  const handleAdd = () => {
    onAdd(input)
    setInput('')
  }

  return (
    <div className="input-section">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleAdd()
        }}
        style={{ width: '230px' }}
      />
      <button
        onClick={handleAdd}
        style={{
          border: 'none',
          borderRadius: '8px',
          backgroundColor: 'rgba(60, 130, 246, 1)',
          color: 'white',
          width: '50px',
        }}
      >
        Add
      </button>
    </div>
  )
}
