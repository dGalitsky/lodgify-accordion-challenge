import React from "react"
import { Body } from "../Typography"
import { FakeCheckboxWrapper, Input, Label } from "./Checkbox.styled"
import Check from "../../../assets/check.svg?react"

interface CheckBoxProps {
  children: React.ReactNode
  checked?: boolean
  onChange: () => void
}

interface FaceCheckboxProps {
  checked?: boolean
}

const Icon = ({ checked }: FaceCheckboxProps) => (
  <FakeCheckboxWrapper checked={checked}>
    {!!checked && <Check />}
  </FakeCheckboxWrapper>
)

function Checkbox({ children, checked, onChange }: CheckBoxProps) {
  return (
    <Label>
      <Input type={"checkbox"} checked={checked} onChange={onChange} />
      <Icon checked={checked} />
      <Body>{children}</Body>
    </Label>
  )
}

export default Checkbox
