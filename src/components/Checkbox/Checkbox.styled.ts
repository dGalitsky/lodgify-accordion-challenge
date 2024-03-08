import styled from "styled-components"

export const Label = styled.label`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: var(--spacing-md);

  color: var(--color-black);

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
  width: 16px;
  height: 16px;
  position: relative;

  border: ${props =>
    !props.checked ? `1px solid var(--color-grey-500)` : "none"};

  border-radius: var(--radius-xs);

  ${Label}:focus-within & {
    outline: 2px solid var(--color-success-dark);
    outline-offset: var(--spacing-xs);
    border-radius: 2px;
  }
`
