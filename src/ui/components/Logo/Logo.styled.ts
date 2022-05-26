import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.h1`
  margin-bottom: 32px;
  text-align: left;
  font-weight: ${theme.font.weigths.bold};

  span {
    color: ${theme.colors.purple[600]};
    margin-left: 4px;
  }
`
