import { render, screen } from "@testing-library/react"
import { Task } from "."

const mockTask: ProgressTask = {
  description: "Jump three times with one leg",
  value: 32,
  checked: true,
}

test("Task should render a checkbox with the provided description", () => {
  render(
    <Task
      description={mockTask.description}
      checked={mockTask.checked}
      index={0}
      onChange={() => {}}
    />
  )
  expect(screen.getByText(mockTask.description)).toBeTruthy()
  expect(screen.getByRole("checkbox")).toHaveProperty("checked", true)
})

test("Task should call the onChange prop when the checkbox is clicked", async () => {
  const onChangeSpy = jest.fn()
  render(
    <Task
      description={mockTask.description}
      checked={mockTask.checked}
      index={0}
      onChange={onChangeSpy}
    />
  )
  const checkbox = await screen.findByRole("checkbox")
  await checkbox.click()
  expect(onChangeSpy).toHaveBeenCalledWith(0)
})
