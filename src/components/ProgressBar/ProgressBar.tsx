import { Wrapper, Indicator, Text } from "./ProgressBar.styled"

interface ProgressBarProps {
  progress: number
}

function ProgressBar({ progress }: ProgressBarProps) {
  const percentage = Math.round(progress * 100)
  return (
    <Wrapper
      $progress={progress}
      role="progressbar"
      aria-valuenow={percentage}
      aria-label="Lodgify tasks progress"
    >
      <Indicator $progress={progress}>
        <Text>{percentage}%</Text>
      </Indicator>
    </Wrapper>
  )
}

export default ProgressBar
