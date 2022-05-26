import styled, { css } from 'styled-components'
import { theme } from 'config'

type TaskItemProps = {
  checked: boolean
}

export const Header = styled.header`
  strong {
    color: ${theme.colors.purple[600]};
    margin: 0 0 0 2px;
  }
`

export const Container = styled.ul`
  max-height: 350px;
  list-style: none;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 400px) {
    width: 320px;
  }
`

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

  span {
    font-size: 14px;
  }

  button {
    background: none;
    border: none;
    color: ${theme.colors.purple[600]};
  }
`

export const Footer = styled.footer`
  margin: 15px 0 10px 0;
  font-size: 14px;
`
