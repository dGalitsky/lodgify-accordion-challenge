import React from "react"

interface CheckBoxProps {
  children: React.ReactNode
  checked: boolean
  onChange: () => void
}

function Checkbox({ children, checked, onChange }: CheckBoxProps) {
  return (
    <label>
      <input type={"checkbox"} checked={checked} onChange={onChange} />
      {children}
    </label>
  )
}

export default Checkbox
