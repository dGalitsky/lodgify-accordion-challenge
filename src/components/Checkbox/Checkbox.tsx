import React from "react"
import { Body } from "../Typography"

interface CheckBoxProps {
  children: React.ReactNode
  checked?: boolean
  onChange: () => void
}

function Checkbox({ children, checked, onChange }: CheckBoxProps) {
  return (
    <label>
      <input type={"checkbox"} checked={checked} onChange={onChange} />
      <Body>{children}</Body>
    </label>
  )
}

export default Checkbox
