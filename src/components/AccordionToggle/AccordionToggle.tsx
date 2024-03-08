import { ArrowIcon, Body, ToggleWrapper } from "./AccordionToggle.styled"

interface AccordionToggleProps {
  expanded?: boolean
  groupName?: string
}

function AccordionToggle({ expanded, groupName }: AccordionToggleProps) {
  const ariaLabel = groupName ? `Toggle ${groupName} tasks` : "Toggle tasks"
  return (
    <ToggleWrapper aria-expanded={expanded} aria-label={ariaLabel}>
      <Body>{expanded ? "Hide" : "Show"}</Body>
      <ArrowIcon $expanded={expanded} />
    </ToggleWrapper>
  )
}

export default AccordionToggle
