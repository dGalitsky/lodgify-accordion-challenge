import { act, render, screen } from "@testing-library/react"
import { ProgressGroup } from "."

const mockProgressGroup: ProgressGroup = {
  name: "Accomiplishments",
  tasks: [
    {
      description: "Wrote a small poem about the birthday",
      value: 23,
      checked: false,
    },
    {
      description: "Jump three times with one leg",
      value: 32,
      checked: true,
    },
    {
      description: "Avoid the annoying neighbor",
      value: 2,
      checked: false,
    },
    {
      description: "Say hello to a random person",
      value: 21,
      checked: false,
    },
    {
      description: "Fill the description in at least 3 places",
      value: 12,
      checked: true,
    },
  ],
}

test("ProgressGroup should render a group title with the provided name", () => {
  render(
    <ProgressGroup
      name={mockProgressGroup.name}
      tasks={mockProgressGroup.tasks}
      index={0}
      onChange={jest.fn()}
    />
  )
  const groupTitle = screen.getByRole("heading")
  expect(groupTitle.textContent).toBe(mockProgressGroup.name)
})

test("ProgressGroup should render an unordered list containing tasks", async () => {
  render(
    <ProgressGroup
      name={mockProgressGroup.name}
      tasks={mockProgressGroup.tasks}
      index={0}
      onChange={jest.fn()}
    />
  )

  const expandButton = screen.getAllByRole("button")[0]
  await act(async () => {
    await expandButton.click()
  })
  const list = screen.getByRole("list")
  const listItems = screen.getAllByRole("listitem")
  expect(list).toBeTruthy()
  expect(listItems).toHaveLength(mockProgressGroup.tasks.length + 1)
})

test("ProgressGroup should call the onChange prop when a task checkbox is clicked and expand the task list", async () => {
  const onChangeSpy = jest.fn()
  render(
    <ProgressGroup
      name={mockProgressGroup.name}
      tasks={mockProgressGroup.tasks}
      index={0}
      onChange={onChangeSpy}
    />
  )
  const expandButton = screen.getAllByRole("button")[0]
  await act(async () => {
    await expandButton.click()
  })
  const taskCheckbox = await screen.findByRole("checkbox", {
    name: "Jump three times with one leg",
  })
  await act(async () => {
    await taskCheckbox.click()
  })
  expect(onChangeSpy).toHaveBeenCalledWith(0, 1)
})
