import styled from "styled-components"
import { ProgressBar } from "./components/ProgressBar"
import { ProgressGroup } from "./components/ProgressGroup"
import { Title } from "./components/Typography"
import { useProgress } from "./hooks/useProgress"

const Wrapper = styled.div`
  max-width: 820px;
  padding: var(--spacing-md);
  border: 1px solid var(--color-grey-300);
  background: var(--color-white);
  border-radius: var(--radius-sm);

  margin: var(--spacing-md);
`

const Header = styled.header`
  padding: var(--spacing-sm);

  /* TODO: add screen breakpoints */
  /* padding: var(--spacing-lg) var(--spacing-md); */
`

function App() {
  const { progressGroups, onTaskToggle, progress } = useProgress()

  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default App
