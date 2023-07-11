import { styled } from 'styled-components'

interface IContainerProps {
  color: string
}

export const Container = styled.span<IContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ theme, color }) => theme[color]};
  }
`
