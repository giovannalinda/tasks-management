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

  function handleOnChange(id: number) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task,
      ),
    )
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

      <S.TaskContainer>
        <ul>
          {tasks.map((task) => (
            <S.TaskItem key={task.id} checked={task.isComplete}>
              <input
                type='checkbox'
                checked={task.isComplete}
                onChange={() => handleOnChange(task.id)}
              />
              <span>{task.title}</span>
              <button type='button' onClick={() => handleDeleteTask(task.id)}>
                <FiTrash />
              </button>
            </S.TaskItem>
          ))}
        </ul>
      </S.TaskContainer>
    </S.Container>
  )
}
