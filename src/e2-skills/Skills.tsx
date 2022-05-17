import React, {MutableRefObject} from 'react';
import s from './Skills.module.scss'
import sc from './../common/styles/Container.module.scss'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/Title/Title';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

import jsIcon from './../assets/icons/js.svg'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import tsIcon from './../assets/icons/ts.svg'
import reduxIcon from './../assets/icons/redux.png'
import apiIcon from './../assets/icons/api.png'
import html_css from './../assets/icons/html_css.png'

type SkillPropsType = {
    skillsRef: MutableRefObject<null | HTMLDivElement>
}

type skillType = {
    icon: IconDefinition | string
    title: string
    description: string
}

export const Skills = (props: SkillPropsType) => {
    const mySkills: Array<skillType> = [
        {icon: jsIcon, title: 'JavaScript',
            description: 'Using JavaScript as a standard programming language for making web pages interactive.'},
        {icon: faReact, title: 'React',
            description: 'Building SPA with React, one of the most popular JavaScript libraries for developing user interfaces.'},
        {icon: tsIcon, title: 'TypeScript',
            description: 'Applying TypeScript to improve readability and reliability of code by adding static typing.'},
        {icon: reduxIcon, title: 'Redux',
            description: 'Centralization of application state and logic thanks to Redux in conjunction with React.'},
        {icon: apiIcon, title: 'REST API',
            description: 'Ensuring the interaction of the web applications with the servers through the REST API.'},
        {icon: html_css, title: 'HTML + CSS',
            description: 'Creation of modern and user-friendly web pages based on classic HTML and CSS technologies.'
        },
    ];

    const mySkillsMap = mySkills.map(skill => <Skill icon={skill.icon}
                                                     title={skill.title}
                                                     description={skill.description}
                                                     key={skill.title}/>);

    return (
        <div>
            <div style={{marginTop: '-5.9vh', height: '5.9vh'}} ref={props.skillsRef}/>
            <div className={s.skills}>
                <div className={`${sc.container} ${s.skillsContainer}`}>
                    <Title value={'Skills'}/>
                        <div className={s.skillsSet}>
                            {mySkillsMap}
                        </div>
                </div>
            </div>
        </div>
    );
}