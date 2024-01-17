import { useCallback } from "react"
import { Checkbox } from "../Checkbox"

interface TaskProps extends Omit<ProgressTask, "value"> {
  index: number
  onChange: (index: number) => void
}

function Task({ description, checked, index, onChange }: TaskProps) {
  const _onChange = useCallback(() => {
    onChange(index)
  }, [index, onChange])

  return (
    <div>
      <Checkbox checked={checked} onChange={_onChange}>
        {description}
      </Checkbox>
    </div>
  )
}

export default Task
