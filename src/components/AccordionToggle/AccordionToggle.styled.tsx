import styled from "styled-components"
import { Body as BodyText } from "../Typography"
import _ArrowIcon from "../../../assets/arrow-line-down.svg?react"

export const ToggleWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  background: none;
  border: none;

  &:focus-visible {
    outline: 2px solid var(--color-success-dark);
    outline-offset: var(--spacing-xs);
    border-radius: 2px;
  }
`

export const ArrowIcon = styled(_ArrowIcon)<{ $expanded?: boolean }>`
  transform: ${props =>
    props.$expanded ? "rotateX(180deg)" : "rotateX(0deg)"};
  transition: transform 0.3s ease;
`

export const Body = styled(BodyText)`
  color: var(--color-grey-500);
  margin-right: var(--spacing-sm);
`
