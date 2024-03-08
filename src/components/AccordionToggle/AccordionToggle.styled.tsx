import styled from "styled-components"
import { Body as BodyText } from "../Typography"

export const ToggleWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  background: none;
  border: none;

  &:focus {
    outline: 2px solid var(--color-success-dark);
    outline-offset: var(--spacing-xs);
    border-radius: 2px;
  }
`

export const ArrowIcon = styled.img<{ $expanded?: boolean }>`
  transform: ${props => (props.$expanded ? "rotate(180deg)" : "rotate(0deg)")};
`

export const Body = styled(BodyText)`
  color: var(--color-grey-500);
  margin-right: var(--spacing-sm);
`
