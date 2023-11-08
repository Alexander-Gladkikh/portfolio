import socialNetworkIcon from '../../images/works-images/social-network.jpg'
import todoListIcon from '../../images/works-images/todo-list.jpg'
import reactTasksIcon from '../../images/works-images/react-tasks.jpg'
import counterIcon from '../../images/works-images/counter.jpg'
import futureIcon from '../../images/works-images/future.jpg'
import infoPortalIcon from '../../images/works-images/sosyal.png'

export const myPortfolioData: WorkType[] = [
    {
         title: 'INFORMATION PORTAL',
         description: 'React, Redux Toolkit, RTK Query, Typescript, Webpack, Storybook, Loki, Jest, i18next,Github actions, Husky',
         images: infoPortalIcon
    },
    {
        title: 'THE SOCIAL NETWORK',
        description: 'React, TS, Redux, Rest API, Thunk, ANT Design, Unit Tests',
        images: socialNetworkIcon
    },
    {
        title: 'TODOLIST',
        description: 'React, TS, Redux, Rest API, Thunk, Material UI, Unit Tests',
        images: todoListIcon
    },
    {
        title: 'REACT CARDS',
        description: 'React, TS, Redux, Rest API, Thunk, Unit Tests',
        images: reactTasksIcon
    },
    {
        title: 'COUNTER',
        description: 'My first project with React, TS, Redux',
        images: counterIcon
    },
    {
        title: 'FEATURE PROJECT',
        description: 'In progress...',
        images: futureIcon
    }
]

export type WorkType = {
    title: string
    description: string
    images: string
}
