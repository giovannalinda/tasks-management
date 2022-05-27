import { Task } from 'App'
import { ReactNode } from 'react'

import { FiThumbsDown, FiThumbsUp, FiX } from 'react-icons/fi'

import * as S from './Modal.styled'

type Props = {
  task: Task
  children?: ReactNode
  onClose: () => void
  onDelete: (id: number) => void
}

export function Modal({ task, onClose, children, onDelete }: Props) {
  return (
    <S.Modal>
      {children}
      <S.Container>
        <S.CloseButton onClick={onClose}>
          <FiX size={17} />
        </S.CloseButton>
        <h1>Want to delete your task?</h1>
        <p>This action cannot be undone!</p>

        <S.ContainerButton>
          <S.CancelDeleteButton onClick={onClose} title='Cancel?'>
            <S.ContentButton>
              <FiThumbsDown size={24} />
              Nooo!
            </S.ContentButton>
          </S.CancelDeleteButton>
          <S.DeleteButton
            title='Remove task?'
            onClick={() => onDelete(task.id)}
          >
            <S.ContentButton>
              <FiThumbsUp size={24} />
              Delete
            </S.ContentButton>
          </S.DeleteButton>
        </S.ContainerButton>
      </S.Container>
    </S.Modal>
  )
}
