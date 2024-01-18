import React from "react"
import { Body } from "../Typography"
import { FakeCheckboxWrapper, Input, Label } from "./Checkbox.styled"

import checkIcon from "../../assets/check.svg"

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
    {checked ? <img src={checkIcon} alt="Checkbox" /> : null}
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
