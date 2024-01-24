import styled from "styled-components"
import { Body } from "../Typography"

interface ProgressBarProps {
  progress: number
}

const Wrapper = styled.div`
  display: flex;
  height: 24px;
  margin-top: var(--spacing-md);
  border-radius: var(--radius-lg);
  background: var(--color-success-light);
`

const Indicator = styled.div<{ $progress?: number }>`
  /* Using flex instead of width to mitigate min-width problems when percentage is low */
  flex: ${props => props.$progress};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding: 0 var(--spacing-md);
  border-radius: var(--radius-lg);
  background: var(--color-success-dark);
`

const Text = styled(Body)`
  color: var(--color-white);
`

function ProgressBar({ progress }: ProgressBarProps) {
  const percentage = Math.round(progress * 100) + "%"
  return (
    <Wrapper>
      <Indicator $progress={progress}>
        <Text>{percentage}</Text>
      </Indicator>
    </Wrapper>
  )
}

export default ProgressBar
