import styled from "styled-components"

export const Label = styled.label`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: var(--spacing-md);
  color: var(--color-black);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const Input = styled.input`
  appearance: none;
  margin: 0;
`

export const FakeCheckboxWrapper = styled.span<{ checked?: boolean }>`
  margin-right: var(--spacing-md);
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: var(--radius-xs);
  border: ${props =>
    !props.checked ? `1px solid var(--color-grey-500)` : "none"};

  ${Label}:has(:focus-visible) & {
    outline: 2px solid var(--color-success-dark);
    outline-offset: var(--spacing-xs);
    border-radius: 2px;
  }
`
