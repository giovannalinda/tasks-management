import { useState } from 'react'
import { FiPlus, FiTrash } from 'react-icons/fi'

import * as S from './TaskList.styled'

type Task = {
  id: number
  title: string
  isComplete: boolean
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  function handleCreateNewTask() {
    const newTask: Task = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    }
    setTasks([...tasks, newTask])
    setNewTaskTitle('')
  }

  function handleDeleteTask(id: number) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id))
  }

  return (
    <S.Container>
      <S.Header>
        <h1>
          Tasks management
          <strong>.</strong>
        </h1>

        <input
          type='text'
          placeholder='Add new task'
          onChange={(e) => setNewTaskTitle(e.target.value)}
          value={newTaskTitle}
        />
        <button type='submit' onClick={handleCreateNewTask}>
          <FiPlus size={14} />
        </button>
      </S.Header>

      <main>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div>
                <input type='checkbox' name='' id='' />
                <p>{task.title}</p>
                <button type='button' onClick={() => handleDeleteTask(task.id)}>
                  <FiTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </S.Container>
  )
}
