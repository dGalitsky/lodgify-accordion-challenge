import styled from "styled-components"
import { Body as BodyText } from "../Typography"

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ArrowIcon = styled.img<{ expanded?: boolean }>`
  transform: ${props => (props.expanded ? "rotate(180deg)" : "rotate(0deg)")};
`

export const Body = styled(BodyText)`
  color: var(--color-grey-500);
  margin-right: var(--spacing-sm);
`
