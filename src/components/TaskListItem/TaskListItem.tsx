import { useCallback } from "react"
import { StyledCheckbox } from "./TaskListItem.styled"

interface TaskProps extends Omit<ProgressTask, "value"> {
  index: number
  onChange: (index: number) => void
}

function TaskListItem({ description, checked, index, onChange }: TaskProps) {
  const _onChange = useCallback(() => {
    onChange(index)
  }, [index, onChange])

  return (
    <li>
      <StyledCheckbox checked={checked} onChange={_onChange}>
        {description}
      </StyledCheckbox>
    </li>
  )
}

export default TaskListItem
