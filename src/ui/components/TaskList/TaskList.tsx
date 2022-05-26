import { FiPlus } from 'react-icons/fi'

import * as S from './TaskList.styled'

export function TaskList() {
  return (
    <S.Container>
      <S.Header>
        <h1>
          Tasks management
          <strong>.</strong>
        </h1>

        <input type='text' placeholder='Add new task' />
        <button type='submit'>
          <FiPlus size={14} />
        </button>
      </S.Header>
    </S.Container>
  )
}
