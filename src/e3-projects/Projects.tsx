import React, {MutableRefObject} from 'react';
import s from './Projects.module.scss'
import sc from './../common/styles/Container.module.scss'
import {Project} from './project/Project';
import {Title} from '../common/components/Title/Title';
import counter from '../assets/images/counter.jpg'
import cards from '../assets/images/cards.jpg'
import todolist from '../assets/images/todolist.jpg'
import socialNetwork from '../assets/images/socialNetwork.jpg'
import portfolio from '../assets/images/portfolio.png'

type ProjectsPropsType = {
    projectsRef: MutableRefObject<null | HTMLDivElement>
}

type projectType = {
    bgImage: string
    title: string
    link: string
}

export const Projects = (props: ProjectsPropsType) => {
    const myProjects: Array<projectType> = [
        {bgImage: todolist, title: 'Todolist', link: 'https://freiii21.github.io/react-todolist/'},
        {bgImage: counter, title: 'Counter', link: 'https://freiii21.github.io/react-counter/'},
        {bgImage: socialNetwork, title: 'Social network', link: 'https://freiii21.github.io/react-social-network/'},
        {bgImage: portfolio, title: 'Portfolio', link: ''},
        // {bgImage: portfolio, title: 'Portfolio', link: 'https://freiii21.github.io/portfolio-react/'},
        // {bgImage: cards, title: 'Cards', link: 'https://freiii21.github.io/react-cards/'},
    ];
    const myProjectsMap = myProjects.map(project => <Project bgImage={project.bgImage}
                                                             title={project.title}
                                                             link={project.link}
                                                             key={project.title}/>);

    return (
        <div>
            <div style={{marginTop: '-5.9vh', height: '5.9vh'}} ref={props.projectsRef}/>
            {/*<div style={{marginTop: '-55px', height: '55px'}} ref={props.projectsRef}/>*/}
            <div className={s.projects} >
                <div className={`${sc.container} ${s.projectsContainer}`}>
                    <Title value={'Projects'}/>
                    <div className={s.projectsSet}>
                        {myProjectsMap}
                    </div>
                </div>
            </div>
        </div>
    );
}