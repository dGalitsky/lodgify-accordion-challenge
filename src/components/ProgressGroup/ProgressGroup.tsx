import { useCallback, useState } from "react"
import BookingFeaturesIcon from "../../../assets/booking-features.svg?react"
import BookingOkIcon from "../../../assets/booking-ok.svg?react"
import { AccordionToggle } from "../AccordionToggle"
import { TaskListItem } from "../TaskListItem"
import {
  Icon,
  ListItem,
  TaskList,
  Title,
  TitleWrapper,
  Wrapper,
} from "./ProgressGroup.styled"

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

  const completed = tasks.every(({ checked }) => checked)

  return (
    <ListItem>
      <Wrapper role="button" onClick={onExpandToggle}>
        <TitleWrapper>
          <Icon>{completed ? <BookingOkIcon /> : <BookingFeaturesIcon />}</Icon>
          <Title $completed={completed} as="h5">{name}</Title>
        </TitleWrapper>
        <AccordionToggle expanded={expanded} groupName={name} />
      </Wrapper>
      {expanded && (
        <TaskList>
          {tasks.map(({ description, checked }, taskIndex) => (
            <TaskListItem
              key={description}
              description={description}
              checked={checked}
              index={taskIndex}
              onChange={_onChange}
            />
          ))}
        </TaskList>
      )}
    </ListItem>
  )
}

export default ProgressGroup
