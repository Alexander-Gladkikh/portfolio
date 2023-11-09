import socialNetworkIcon from '../../images/works-images/social-network.jpg'
import todoListIcon from '../../images/works-images/todo-list.jpg'
import reactTasksIcon from '../../images/works-images/react-tasks.jpg'
import futureIcon from '../../images/works-images/future.jpg'
import infoPortalIcon from '../../images/works-images/sosyal.png'
import cardIcon from '../../images/works-images/card.jpg'

export const myPortfolioData: WorkType[] = [
    {
         title: 'INFORMATION PORTAL',
         description: 'React, Redux Toolkit, RTK Query, Typescript, Webpack, Storybook, Loki, Jest, i18next,Github actions, Husky',
         images: infoPortalIcon,
         links: 'https://github.com/Alexander-Gladkikh/information-portal',
    },
    {
        title: 'THE SOCIAL NETWORK',
        description: 'React, TS, Redux, Rest API, Thunk, ANT Design, Unit Tests',
        images: socialNetworkIcon,
        links: 'https://github.com/Alexander-Gladkikh/sociall_network',
    },
    {
        title: 'TODOLIST',
        description: 'React, TS, Redux, Rest API, Thunk, Material UI, Unit Tests',
        images: todoListIcon,
        links: 'https://github.com/Alexander-Gladkikh/TodoList',
    },
    {
        title: 'REACT CARDS',
        description: 'React, TS, Redux, Rest API, Thunk, Unit Tests',
        images: cardIcon,
        links: 'https://github.com/Alexander-Gladkikh/cards',
    },
    {
        title: 'TASKS',
        description: 'React, TS, Redux',
        images: reactTasksIcon,
        links: 'https://github.com/Alexander-Gladkikh/information-portal',
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
    links?: string
}
