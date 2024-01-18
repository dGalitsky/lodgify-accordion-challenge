import { useProgress } from "../../hooks/useProgress"
import { ProgressBar } from "../ProgressBar"
import { ProgressGroup } from "../ProgressGroup"
import { Title } from "../Typography"
import { Content, Header, Wrapper } from "./UserProgress.styled"

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
              <li>
                <ProgressGroup
                  key={name}
                  name={name}
                  tasks={tasks}
                  index={groupIndex}
                  onChange={onTaskToggle}
                />
              </li>
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
