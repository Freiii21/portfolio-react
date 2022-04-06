import React, {MutableRefObject} from 'react';
import s from './Projects.module.scss'
import sc from './../common/styles/Container.module.scss'
import {Project} from './project/Project';
import {Title} from '../common/components/Title';
import counter from '../assets/images/counter.jpg'
import cards from '../assets/images/cards.jpg'
import todolist from '../assets/images/todolist.jpg'
import socialNetwork from '../assets/images/socialNetwork.jpg'

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
        {bgImage: cards, title: 'Cards', link: 'https://freiii21.github.io/react-counter/'},
        {bgImage: todolist, title: 'Todolist', link: 'https://freiii21.github.io/react-counter/'},
        {bgImage: counter, title: 'Counter', link: 'https://freiii21.github.io/react-counter/'},
        {bgImage: socialNetwork, title: 'Social network', link: 'https://freiii21.github.io/react-social-network/'},
    ];
    const myProjectsMap = myProjects.map(project => <Project bgImage={project.bgImage}
                                                             title={project.title}
                                                             link={project.link}
                                                             key={project.title}/>);

    return (
        <div>
            <div style={{marginTop: '-55px', height: '55px'}} ref={props.projectsRef}/>
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