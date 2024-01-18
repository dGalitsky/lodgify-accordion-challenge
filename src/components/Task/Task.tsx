import { useCallback } from "react"
import { StyledCheckbox } from "./Task.styled"

interface TaskProps extends Omit<ProgressTask, "value"> {
  index: number
  onChange: (index: number) => void
}

function Task({ description, checked, index, onChange }: TaskProps) {
  const _onChange = useCallback(() => {
    onChange(index)
  }, [index, onChange])

  return (
    <StyledCheckbox checked={checked} onChange={_onChange}>
      {description}
    </StyledCheckbox>
  )
}

export default Task
