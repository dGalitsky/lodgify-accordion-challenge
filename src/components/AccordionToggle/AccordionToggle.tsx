import arrowLineDown from "../../assets/arrow-line-down.svg"
import { ArrowIcon, Body, ToggleWrapper } from "./AccordionToggle.styled"

interface AccordionToggleProps {
  expanded?: boolean
}

function AccordionToggle({ expanded }: AccordionToggleProps) {
  return (
    <ToggleWrapper>
      <Body>{expanded ? "Hide" : "Show"}</Body>
      <ArrowIcon expanded={expanded} src={arrowLineDown} />
    </ToggleWrapper>
  )
}

export default AccordionToggle
