import htmlIcon from '../../images/skills-icon/html-icon.svg'
import gitIcon from '../../images/skills-icon/git-icon.svg'
import reactIcon from '../../images/skills-icon/react-icon.svg'
import reduxIcon from '../../images/skills-icon/redux-icon.svg'
import sassIcon from '../../images/skills-icon/sass-icon.svg'
import storybookIcon from '../../images/skills-icon/storybook-icon.svg'
import testIcon from '../../images/skills-icon/test-icon.svg'
import typescriptIcon from '../../images/skills-icon/typescript-icon.svg'

export {htmlIcon, gitIcon, reactIcon, reduxIcon, sassIcon, storybookIcon, testIcon, typescriptIcon}

export const skillsData: SkillType[] = [
    {
        title: 'HTML5',
        description: 'Responsive design, flex, links, headers, images and etc',
        images: htmlIcon
    },
    {
        title: 'SASS/SCSS',
        description: 'Common CSS, variables, mixins, functions, pseudo-classes, pseudo-elements, media queries',
        images: sassIcon
    },
    {
        title: 'JS/TS',
        description: 'Native JS: classes, functions, working with arrays and objects, Promises, REST Api; TS: as type, generics, infer',
        images: typescriptIcon
    },
    {
        title: 'REACT',
        description: 'Class and functional components, components life-cycle methods, props, hooks, HOC',
        images: reactIcon
    },
    {
        title: 'REDUX',
        description: 'FLUX-concepted data flow, reducer, dispatch, redux-thunk, redux-toolkit',
        images: reduxIcon
    },
    {
        title: 'STORYBOOK',
        description: 'Testing components and modules, decorators',
        images: storybookIcon
    },
    {
        title: 'UNIT-TEST',
        description: 'Testing choosen modules and the whole application\'s workability',
        images: testIcon
    },
    {
        title: 'GIT',
        description: 'Creating new repositories, push- and pull-requets, merge, repos cloning',
        images: gitIcon
    },
]

export type SkillType = {
    title: string
    description: string
    images: string
}
