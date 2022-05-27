import { theme } from 'config'
import styled, { css } from 'styled-components'

type TaskItemProps = {
  checked: boolean
}

export const TaskItem = styled.li<TaskItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.gray[700]};
  width: 100%;
  height: 77px;
  border-radius: ${theme.radius};
  padding: 20px;
  border: 1px solid ${theme.colors.gray[900]};
  transition: border-color 0.2s ease-in;

  @media (max-width: 400px) {
    width: 94%;
    margin-left: 10px;
  }

  & + li {
    margin-top: 6px;
  }

  :hover {
    border-color: ${theme.colors.purple[600]};
  }

  ${({ checked }) =>
    checked &&
    css`
      span {
        text-decoration: line-through;
        opacity: 67%;
      }
    `}

  input[type="checkbox"] {
    width: 15px;
    height: 15px;
  }

  span {
    font-size: 14px;
  }
`

export const ButtonTrash = styled.button`
  color: ${theme.colors.purple[600]};
`
