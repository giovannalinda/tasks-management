import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 382px;
  height: 100vh;
  padding: 140px 0 20px;

  > footer {
    text-align: center;
    margin-top: auto;
  }

  > main {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }
`
