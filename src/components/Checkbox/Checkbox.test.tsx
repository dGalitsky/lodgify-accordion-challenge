import { render, screen } from "@testing-library/react"
import { Checkbox } from "."

test("Checkbox should render a checked checkbox when checked prop is true", () => {
  render(
    <Checkbox checked onChange={() => {}}>
      Check me!
    </Checkbox>
  )

  const checkbox = screen.getByLabelText("Check me!")
  expect(checkbox).toHaveProperty("checked", true)
})

test("Checkbox should render an unchecked checkbox when checked prop is false", () => {
  render(<Checkbox onChange={() => {}}>Check me!</Checkbox>)
  const checkbox = screen.getByLabelText("Check me!")
  expect(checkbox).toHaveProperty("checked", false)
})

test("Checkbox should call the onChange prop when the checkbox is clicked", async () => {
  const onChangeSpy = jest.fn()
  render(<Checkbox onChange={onChangeSpy}>Check me!</Checkbox>)
  const checkbox = await screen.findByLabelText("Check me!")
  await checkbox.click()
  expect(onChangeSpy).toHaveBeenCalledTimes(1)
})
