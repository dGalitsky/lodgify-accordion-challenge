import styled from "styled-components"

export const Label = styled.label`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: var(--spacing-md);

  /* All other text is #333 except checkboxes - was it intended? */
  color: var(--color-black);
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
`
