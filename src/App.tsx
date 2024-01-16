import { useEffect, useState } from "react"
import "./App.css"
import { getProgress } from "./api"

function App() {
  const [progressGroups, setProgressGroups] = useState<ProgressGroup[]>([])

  useEffect(() => {
    getProgress().then(setProgressGroups)
  }, [])

  const onTaskToggle = (groupIndex: number, taskIndex: number) => {
    const newProgressGroups = [...progressGroups]
    const task = newProgressGroups[groupIndex].tasks[taskIndex]
    task.checked = !task.checked
    setProgressGroups(newProgressGroups)
  }

  return progressGroups.length ? (
    <ul>
      {progressGroups.map(({ name, tasks }, groupIndex) => (
        <li key={name}>
          <h4>{name}</h4>
          <ul>
            {tasks.map(({ description, checked }, taskIndex) => (
              <li key={description}>
                <label>
                  <input
                    type={"checkbox"}
                    checked={checked}
                    onChange={() => onTaskToggle(groupIndex, taskIndex)}
                  />
                  {description}
                </label>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  ) : (
    <p>Nothing to show here yet.</p>
  )
}

export default App
