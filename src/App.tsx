import { useEffect, useState } from 'react'
import './App.css'
import { getProgress } from './api'

function App() {
  const [progressGroups, setProgressGroups] = useState<ProgressGroup[]>([])

  useEffect(() => {
    getProgress().then(setProgressGroups)
  }, [])

  return progressGroups.length ? (
    <ul>
      {progressGroups.map(({ name, tasks }) => (
        <li key={name}>
          <h4>{name}</h4>
          <ul>
            {tasks.map(({ description, checked }) => (
              <li key={description}>
                <label>
                  <input type={"checkbox"} checked={checked} />
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
