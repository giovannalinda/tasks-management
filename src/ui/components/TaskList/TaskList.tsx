import { FiTrash } from 'react-icons/fi'
import { Task } from 'App'

import * as S from './TaskList.styled'

type Props = {
  tasks: Task[]
  onDelete: (id: number) => void
  onChangeTask: (id: number) => void
}

export function TaskList({ tasks, onDelete, onChangeTask }: Props) {
  return (
    <S.Container>
      {tasks.map((task) => (
        <S.TaskItem key={task.id} checked={task.isComplete}>
          <input
            type='checkbox'
            checked={task.isComplete}
            onChange={() => onChangeTask(task.id)}
          />
          <span>{task.title}</span>
          <button
            type='button'
            onClick={() => onDelete(task.id)}
            title='Remove task?'
          >
            <FiTrash size={18} />
          </button>
        </S.TaskItem>
      ))}
    </S.Container>
  )
}
