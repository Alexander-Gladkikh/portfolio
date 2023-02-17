import socialNetworkIcon from '../../images/works-images/social-network.jpg'
import todoListIcon from '../../images/works-images/todo-list.jpg'
import reactTasksIcon from '../../images/works-images/react-tasks.jpg'
import counterIcon from '../../images/works-images/counter.jpg'
import futureIcon from '../../images/works-images/future.jpg'

export const myPortfolioData: WorkType[] = [
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
        title: 'REACT TASKS',
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
    },
    {
        title: 'FEATURE PROJECT',
        description: 'In progress...',
        images: futureIcon
    },
]

export type WorkType = {
    title: string
    description: string
    images: string
}