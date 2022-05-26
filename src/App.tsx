import { useState } from 'react'
import { GlobalStyle } from 'ui'
import { CreateTask } from 'ui/components/CreateTask'
import { Logo } from 'ui/components/Logo'
import { TaskList } from 'ui/components/TaskList'

import * as S from './App.styled'

export type Task = {
  id: number
  title: string
  isComplete: boolean
}

function App() {
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

  function handleChangeTask(id: number) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task,
      ),
    )
  }

  function handleDeleteTask(id: number) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id))
  }

  return (
    <S.Container>
      <header>
        <Logo />
      </header>
      <main>
        <CreateTask
          newTaskTitle={newTaskTitle}
          onCreateNewTask={handleCreateNewTask}
          onChangeNewTaskTitle={setNewTaskTitle}
        />
        <TaskList
          tasks={tasks}
          onDelete={handleDeleteTask}
          onChangeTask={handleChangeTask}
        />
      </main>
      <footer>Made with 💜 by Giovanna</footer>
      <GlobalStyle />
    </S.Container>
  )
}

export default App
