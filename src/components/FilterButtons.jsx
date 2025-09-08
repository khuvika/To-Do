import React from 'react'

export const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="filter-buttons">
      {['all', 'active', 'completed'].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={filter === f ? 'active' : ''}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  )
}
