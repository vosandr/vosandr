import { projectsData as baseProjectsData } from 'helpers/projectsData'
import { useSnapshot } from 'valtio'
import Project from 'models/Project'

const projects: Project[] = [
  {
    title: 'bCounter',
    link: 'https://www.rustore.ru/catalog/app/com.counters.bcounter',
    description: () => {
      return [
        'bCounter - приложение для подсчета кликов, оформленное в черной цветовой теме',
      ]
    },
  },
  {
    title: 'wCounter',
    link: 'https://www.rustore.ru/catalog/app/com.counters.wcounter',
    description: () => {
      return [
        'wCounter - приложение для подсчета кликов, оформленное в белой цветовой теме',
      ]
    },
  },
  {
    title: 'bStopWatch',
    link: 'https://www.rustore.ru/catalog/app/com.stopwatches.bstopwatch',
    description: () => {
      return [
        'bStopWatch - приложение для подсчета прошедшего времени, оформленное в черной цветовой теме',
      ]
    },
  },
  {
    title: 'bStopWatchμs',
    link: 'https://www.rustore.ru/catalog/app/com.stopwatches.bstopwatchms',
    description: () => {
      return [
        'bStopWatchμs - приложение для подсчета прошедшего времени, также показывающее микросекунды и оформленное в черной цветовой теме',
      ]
    },
  },
]

export default projects
