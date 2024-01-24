import { useProgress } from "../../hooks/useProgress"
import { ProgressBar } from "../ProgressBar"
import { ProgressGroup } from "../ProgressGroup"
import { Title } from "../Typography"
import {
  Content,
  Header,
  ProgressGroupListItem,
  Wrapper,
} from "./UserProgress.styled"

function UserProgress() {
  const { progressGroups, onTaskToggle, progress } = useProgress()

  return (
    <Wrapper>
      <Content>
        <Header>
          <Title>Lodgify Grouped Tasks</Title>
          <ProgressBar progress={progress} />
        </Header>
        {progressGroups.length ? (
          <ul>
            {progressGroups.map(({ name, tasks }, groupIndex) => (
              <ProgressGroupListItem key={name}>
                <ProgressGroup
                  name={name}
                  tasks={tasks}
                  index={groupIndex}
                  onChange={onTaskToggle}
                />
              </ProgressGroupListItem>
            ))}
          </ul>
        ) : (
          <p>Nothing to show here yet.</p>
        )}
      </Content>
    </Wrapper>
  )
}

export default UserProgress
