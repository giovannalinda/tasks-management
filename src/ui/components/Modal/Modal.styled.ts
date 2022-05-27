import { theme } from 'config'
import styled from 'styled-components'

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  background: ${theme.colors.gray[700]};
  width: 382px;
  height: 44%;
  border-radius: ${theme.radius};

  @media (max-width: 400px) {
    width: 300px;
  }

  h1 {
    font-size: 18px;
    text-align: center;
    padding: 20px 0;
  }

  p {
    text-align: center;
    font-size: 14px;
  }
`

export const CloseButton = styled.button`
  color: ${theme.colors.white};
  position: relative;
  margin: 14px 0 0 14px;
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    margin-bottom: 8px;
  }
`

export const CancelDeleteButton = styled.button`
  color: ${theme.colors.white};
  width: 114px;
  height: 124px;
  background: ${theme.colors.purple[600]};
  border-radius: ${theme.radius};
  margin-top: 20px;
  margin-left: 10px;

  :hover {
    opacity: 85%;
  }
`

export const DeleteButton = styled.button`
  color: ${theme.colors.white};
  width: 114px;
  height: 124px;
  background: ${theme.colors.gray[900]};
  border-radius: ${theme.radius};
  margin-top: 20px;
  margin-left: 10px;

  :hover {
    opacity: 85%;
  }
`
