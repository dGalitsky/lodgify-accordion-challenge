import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"

export const Wrapper = styled.div`
  padding: var(--spacing-md);
`

export const Content = styled.div`
  max-width: 820px;
  padding: var(--spacing-md);
  border: 1px solid var(--color-grey-300);
  background: var(--color-white);
  border-radius: var(--radius-sm);

  margin: var(--spacing-sm) auto;

  @media (min-width: ${breakpoints.desktop}) {
    margin: 70px auto;
  }
`

export const Header = styled.header`
  padding: var(--spacing-sm);

  @media (min-width: ${breakpoints.tablet}) {
    padding: var(--spacing-lg) var(--spacing-md);
  }
`

export const ProgressGroupListItem = styled.li`
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
