import { render, screen } from "@testing-library/react"
import { ProgressBar } from "."

const progressValues = [0, 0.15, 0.57, 0.93, 1]

test("Task should render a checkbox with the provided description", () => {
  progressValues.forEach(progress => {
    render(<ProgressBar progress={progress} />)
    expect(screen.getByText(`${Math.round(progress * 100)}%`)).toBeTruthy()
  })
})
