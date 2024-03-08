/// <reference types="vite-plugin-svgr/client" />
interface ProgressTask {
  description: string
  value: number
  checked: boolean
}

interface ProgressGroup {
  name: string
  tasks: ProgressTask[]
}
