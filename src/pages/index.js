import { TodoInput } from '@/components/TodoInput'
import { FilterButtons } from '@/components/FilterButtons'
import { TodoList } from '@/components/TodoList'
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  const addTask = (text) => {
    const trimmed = text.trim()
    if (!trimmed) {
      alert('Та task-ийн нэрийг оруулна уу!')
      return
    }
    const newTask = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  const toggleTask = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
    setTasks(updated)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className="app">
      <h2 style={{ display: 'flex', justifyContent: 'center' }}> To-Do App</h2>
      <TodoInput onAdd={addTask} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      {tasks.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Not tasks yeat.Add one </p>
      ) : (
        <TodoList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          setTasks={setTasks}
        />
      )}
      <div id="poweredby">
        <p style={{ color: ' rgba(107, 114, 128, 1)' }}>Powered by </p>
        <p style={{ color: 'rgba(59, 115, 237, 1)' }}> Pinecone academy</p>
      </div>
    </div>
  )
}

export default App
