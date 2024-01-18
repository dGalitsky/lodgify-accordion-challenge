import styled from "styled-components"
import { Body } from "../Typography"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-lg);
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled(Body)<{ completed?: boolean }>`
  ${({ completed }) =>
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
