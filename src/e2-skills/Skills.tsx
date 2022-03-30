import React from 'react';
import s from './Skills.module.scss'
import sc from './../common/styles/Container.module.scss'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/Title';

type skillType = {
    title: string
    description: string
}

export const Skills = () => {
    const mySkills: Array<skillType> = [
        {title:'JS', description:'Some description...'},
        {title:'TypeScript', description:'Some description...'},
        {title:'React', description:'Some description...'},
        {title:'Redux', description:'Some description...'},
        {title:'REST API', description:'Some description...'},
        {title:'CSS', description:'Some description with a loooooong string...'},
        {title:'SASS', description:'Some description with a loooooong string...'},
    ];

    const mySkillsMap = mySkills.map(skill => <Skill title={skill.title} description={skill.description}/>);

    return (
        <div className={s.skills}>
            <div className={`${sc.container} ${s.skillsContainer}`}>
                <Title value={"Skills"}/>
                <div className={s.skillsSet}>
                    {mySkillsMap}
                </div>
            </div>
        </div>
    );
}