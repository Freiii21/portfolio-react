import React from 'react';
import s from './Projects.module.scss'
import sc from './../common/styles/Container.module.scss'
import {Project} from './project/Project';
import {Title} from '../common/components/Title';
import counter from '../assets/images/counter.jpg'

type projectType = {
    bgImage: string
    title: string
    link: string
}

export const Projects = () => {
    const myProjects: Array<projectType> = [
        {bgImage: counter, title:'Cards', link:'https://freiii21.github.io/react-counter/'},
        {bgImage: counter, title:'Todolist', link:'https://freiii21.github.io/react-counter/'},
        {bgImage: counter, title:'Counter', link:'https://freiii21.github.io/react-counter/'},
        {bgImage: counter, title:'Social network', link:'https://freiii21.github.io/react-counter/'},
    ];
    const myProjectsMap = myProjects.map(project => <Project bgImage={project.bgImage}
                                                             title={project.title}
                                                             link={project.link}
    />);

    return (
        <div className={s.projects}>
            <div className={`${sc.container} ${s.projectsContainer}`}>
                <Title value={"Projects"}/>
                <div className={s.projectsSet}>
                    {myProjectsMap}
                </div>
            </div>
        </div>
    );
}