import { useCallback, useState } from "react"
import { Task } from "../Task"

interface ProgressGroupProps extends ProgressGroup {
  index: number
  onChange: (groupIndex: number, taskIndex: number) => void
}

function ProgressGroup({ name, tasks, index, onChange }: ProgressGroupProps) {
  const [expanded, setExpanded] = useState(false)

  const _onChange = useCallback(
    (taskIndex: number) => {
      onChange(index, taskIndex)
    },
    [index, onChange]
  )

  const onExpandToggle = useCallback(() => {
    setExpanded(!expanded)
  }, [expanded])

  return (
    <>
      <div>
        <h4>{name}</h4>
        <button type="button" onClick={onExpandToggle}>
          {expanded ? "Hide" : "Show"}
        </button>
      </div>
      {expanded && (
        <ul>
          {tasks.map(({ description, checked }, taskIndex) => (
            <li>
              <Task
                key={description}
                description={description}
                checked={checked}
                index={taskIndex}
                onChange={_onChange}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default ProgressGroup
