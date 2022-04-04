import React from 'react';
import s from './Projects.module.scss'
import sc from './../common/styles/Container.module.scss'
import {Project} from './project/Project';
import {Title} from '../common/components/Title';
import counter from '../assets/images/counter.jpg'
import cards from '../assets/images/cards.jpg'
import todolist from '../assets/images/todolist.jpg'
import socialNetwork from '../assets/images/socialNetwork.jpg'

type projectType = {
    bgImage: string
    title: string
    link: string
}

export const Projects = () => {
    const myProjects: Array<projectType> = [
        {bgImage: cards, title:'Cards', link:'https://freiii21.github.io/react-counter/'},
        {bgImage: todolist, title:'Todolist', link:'https://freiii21.github.io/react-counter/'},
        {bgImage: counter, title:'Counter', link:'https://freiii21.github.io/react-counter/'},
        {bgImage: socialNetwork, title:'Social network', link:'https://freiii21.github.io/react-social-network/'},
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