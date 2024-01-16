import { useCallback } from "react"
import { Task } from "../Task"

interface ProgressGroupProps extends ProgressGroup {
  index: number
  onChange: (groupIndex: number, taskIndex: number) => void
}

function ProgressGroup({ name, tasks, index, onChange }: ProgressGroupProps) {
  const _onChange = useCallback(
    (taskIndex: number) => {
      onChange(index, taskIndex)
    },
    [index, onChange]
  )

  return (
    <li>
      <h4>{name}</h4>
      <ul>
        {tasks.map(({ description, checked }, taskIndex) => (
          <Task
            key={description}
            description={description}
            checked={checked}
            index={taskIndex}
            groupIndex={index}
            onChange={_onChange}
          />
        ))}
      </ul>
    </li>
  )
}

export default ProgressGroup
