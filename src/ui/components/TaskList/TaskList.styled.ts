import styled, { css } from 'styled-components'
import { theme } from 'config'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 180px 0 0 0;
`

export const Header = styled.header`
  h1 {
    text-align: center;
    margin: 0 0 32px 0;
    max-width: 10px;
    font-weight: ${theme.font.weigths.bold};
  }

  strong {
    color: ${theme.colors.purple[600]};
    margin: 0 0 0 2px;
  }

  input {
    width: 382px;
    height: 50px;
    background: ${theme.colors.gray[700]};
    border: 1px solid ${theme.colors.gray[900]};
    border-radius: ${theme.radius};
    padding: 0 32px;
    color: ${theme.colors.white};
    transition: border-color 0.2s ease-in;

    @media (max-width: 400px) {
      width: 300px;
    }

    :focus {
      border-color: ${theme.colors.purple[600]};
    }

    ::placeholder {
      color: ${theme.colors.white};
      opacity: 61%;
    }
  }

  button {
    color: ${theme.colors.white};
    background: ${theme.colors.purple[600]};
    height: 50px;
    width: 54px;
    border: none;
    border-radius: 0 5px 5px 0;
    margin: 0 0 0 -54px;

    :hover {
      opacity: 85%;
    }
  }
`

export const TaskContainer = styled.main`
  ul {
    list-style: none;
  }
`

type TaskItemProps = {
  checked: boolean
}

export const TaskItem = styled.li<TaskItemProps>`
  display: flex;
  align-items: center;

  ${({ checked }) =>
    checked &&
    css`
      span {
        text-decoration: line-through;
      }
    `}
`
