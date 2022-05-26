import styled, { css } from 'styled-components'
import { theme } from 'config'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 140px 0 0 0;
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
    padding: 0 72px 0 32px;
    color: ${theme.colors.white};
    transition: border-color 0.2s ease-in;
    margin: 0 0 10px 0;

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

    &[disabled] {
      cursor: not-allowed;
      opacity: 65%;
    }

    :hover {
      opacity: 85%;
    }
  }
`

export const TaskContainer = styled.main`
  ul {
    max-height: 350px;
    list-style: none;
    overflow-y: scroll;
    margin: 0 0 0 15px;

    &::-webkit-scrollbar {
      height: 0;
    }

    @media (max-width: 400px) {
      width: 320px;
    }
  }
`

type TaskItemProps = {
  checked: boolean
}

export const TaskItem = styled.li<TaskItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.gray[700]};
  width: 382px;
  height: 77px;
  margin: 10px 0 0 0;
  border-radius: ${theme.radius};
  padding: 20px;
  border: 1px solid ${theme.colors.gray[900]};
  transition: border-color 0.2s ease-in;

  & + li {
    margin: 6px 0 0 0;
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
