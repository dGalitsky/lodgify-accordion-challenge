import { useCallback, useEffect, useMemo, useState } from "react"
import { getProgress } from "../api"

function calculateProgress(progressGroups: ProgressGroup[]) {
  let progressTotal = 0
  let total = 0

  for (const { tasks } of progressGroups) {
    for (const { checked, value } of tasks) {
      total += value
      if (checked) {
        progressTotal += value
      }
    }
  }

  return Math.round((progressTotal / total) * 100)
}

export const useProgress = () => {
  const [progressGroups, setProgressGroups] = useState<ProgressGroup[]>([])

  useEffect(() => {
    getProgress().then(setProgressGroups)
  }, [])

  const onTaskToggle = useCallback(
    (groupIndex: number, taskIndex: number) => {
      const newProgressGroups = [...progressGroups]
      const task = newProgressGroups[groupIndex].tasks[taskIndex]
      task.checked = !task.checked
      setProgressGroups(newProgressGroups)
    },
    [progressGroups]
  )

  const progress = useMemo(
    () => calculateProgress(progressGroups),
    [progressGroups]
  )

  return {
    progressGroups,
    onTaskToggle,
    progress,
  }
}
