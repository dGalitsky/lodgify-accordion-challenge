import { render, screen } from "@testing-library/react"
import { ProgressBar } from "."

const progressValues = [0, 15, 57, 93, 100]

test("Task should render a checkbox with the provided description", () => {
  progressValues.forEach(progress => {
    render(<ProgressBar progress={progress} />)
    expect(screen.getByText(`Progress: ${progress}%`)).toBeTruthy()
  })
})
