import type { ChartData } from 'react-frappe-charts'
import type { ProjectCount } from 'helpers/projectsData'

export default interface Project {
  title: string
  code?: keyof ProjectCount
  link: string
  publications?: {
    name: string
    link: string
  }[]
  description: () => (string | false)[]
  charts?: () => {
    title: string
    data: ChartData
  }[]
}
