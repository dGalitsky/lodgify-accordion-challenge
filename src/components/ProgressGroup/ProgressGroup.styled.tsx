import styled from "styled-components"
import { Body } from "../Typography"
import { ToggleWrapper } from "../AccordionToggle/AccordionToggle.styled"

export const ListItem = styled.li`
  border: 1px solid var(--color-grey-300);
  list-style: none;

  &:not(:first-of-type) {
    border-top-width: 0;
  }

  &:first-of-type {
    border-top-left-radius: var(--radius-sm);
    border-top-right-radius: var(--radius-sm);
  }

  &:last-of-type {
    border-bottom-left-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-lg);
  cursor: pointer;

  &:hover {
    ${ToggleWrapper} ${Body} {
      text-decoration: underline;
    }
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled(Body)<{ $completed?: boolean }>`
  ${({ $completed: completed }) =>
    completed &&
    `
    color: var(--color-success-dark);
  `}
`

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: var(--spacing-md);
`

export const TaskList = styled.ul`
  padding: var(--spacing-md);
  list-style: none;
`
