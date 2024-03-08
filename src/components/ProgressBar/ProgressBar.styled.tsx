import styled from "styled-components"
import { Body } from "../Typography"

export const Wrapper = styled.div<{ $progress?: number }>`
  display: flex;
  height: 24px;
  margin-top: var(--spacing-md);
  border-radius: var(--radius-lg);
  background: var(--color-success-light);

  transition: ${props =>
    props.$progress === 1
      ? " box-shadow 1s cubic-bezier(0.32, 0.04, 0.35, 2.5)"
      : "none"};
  transition-delay: 0.3s;
  box-shadow: ${props =>
    props.$progress === 1
      ? "0 0 2px 1px #fff, 0 0 8px 2px var(--color-success-dark)"
      : "0 0 2px 1px #fff, 0 0 0 0 var(--color-success-dark)"};
`

export const Indicator = styled.div<{ $progress?: number }>`
  /* Using flex instead of width to mitigate min-width problems when percentage is low */
  flex: ${props => props.$progress};
  transition: flex 0.4s ease-in-out;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding: 0 var(--spacing-md);
  border-radius: var(--radius-lg);
  background: var(--color-success-dark);
`

export const Text = styled(Body)`
  color: var(--color-white);
`
