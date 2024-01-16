interface ProgressBarProps {
  progress: number
}

function ProgressBar({ progress }: ProgressBarProps) {
  return <div>Progress: {progress}%</div>
}

export default ProgressBar
