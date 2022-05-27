import { Task } from 'App'
import { useState } from 'react'
import { FiTrash } from 'react-icons/fi'
import { Modal } from '../Modal'

import * as S from './TaskItem.styled'

type Props = {
  task: Task
  onDelete: (id: number) => void
  onChangeTask: (id: number) => void
}

export function TaskItem({ task, onDelete, onChangeTask }: Props) {
  const [isConfirmDeleteTask, setIsConfirmDeleteTask] = useState(false)

  return (
    <S.TaskItem key={task.id} checked={task.isComplete}>
      <input
        type='checkbox'
        checked={task.isComplete}
        onChange={() => onChangeTask(task.id)}
      />
      <span>{task.title}</span>
      <S.ButtonTrash
        type='button'
        onClick={() => setIsConfirmDeleteTask(true)}
        title='Remove task?'
      >
        <FiTrash size={18} />
      </S.ButtonTrash>

      {isConfirmDeleteTask && (
        <Modal
          onClose={() => setIsConfirmDeleteTask(false)}
          onDelete={onDelete}
          task={task}
        ></Modal>
      )}
    </S.TaskItem>
  )
}
