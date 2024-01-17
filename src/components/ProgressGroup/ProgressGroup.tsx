import { useCallback, useState } from "react"
import { Task } from "../Task"
import { Body } from "../Typography"

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
        <Body>{name}</Body>
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
