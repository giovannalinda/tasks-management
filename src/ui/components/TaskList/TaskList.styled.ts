import styled from 'styled-components'
import { theme } from 'config'

export const Header = styled.header`
  strong {
    color: ${theme.colors.purple[600]};
    margin: 0 0 0 2px;
  }
`

export const Container = styled.ul`
  max-height: 320px;
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
