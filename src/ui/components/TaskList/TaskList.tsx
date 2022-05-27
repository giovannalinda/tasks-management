import { Task } from 'App'
import { TaskItem } from '../TaskItem'

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
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onChangeTask={onChangeTask}
        />
      ))}
    </S.Container>
  )
}
