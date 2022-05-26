import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.form`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  background: ${theme.colors.gray[700]};
  border: 1px solid ${theme.colors.gray[900]};
  border-radius: 5px 0 0 5px;
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
`

export const Button = styled.button`
  color: ${theme.colors.white};
  background: ${theme.colors.purple[600]};
  height: 49px;
  width: 54px;
  border: none;
  border-radius: 0 5px 5px 0;

  &[disabled] {
    cursor: not-allowed;
    opacity: 65%;
  }

  :hover {
    opacity: 85%;
  }
`
