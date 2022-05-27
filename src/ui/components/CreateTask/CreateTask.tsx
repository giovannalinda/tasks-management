import { FormEvent } from 'react'
import { FiPlus } from 'react-icons/fi'

import * as S from './CreateTask.styled'

type Props = {
  newTaskTitle: string
  onCreateNewTask: () => void
  onChangeNewTaskTitle: (title: string) => void
}

export function CreateTask({
  newTaskTitle,
  onChangeNewTaskTitle,
  onCreateNewTask,
}: Props) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onCreateNewTask()
  }

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Input
        type='text'
        placeholder='Add new task'
        onChange={(e) => onChangeNewTaskTitle(e.target.value)}
        value={newTaskTitle}
        maxLength={40}
      />
      <S.Button
        type='submit'
        title='Add task to do'
        disabled={newTaskTitle.length === 0}
      >
        <FiPlus size={14} />
      </S.Button>
    </S.Container>
  )
}
