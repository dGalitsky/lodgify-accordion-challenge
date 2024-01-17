import "./App.css"
import { ProgressBar } from "./components/ProgressBar"
import { ProgressGroup } from "./components/ProgressGroup"
import { useProgress } from "./hooks/useProgress"

function App() {
  const { progressGroups, onTaskToggle, progress } = useProgress()

  return (
    <div>
      <h1>Lodgify Grouped Tasks</h1>
      <ProgressBar progress={progress} />
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
    </div>
  )
}

export default App
