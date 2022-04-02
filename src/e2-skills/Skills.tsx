import React from 'react';
import s from './Skills.module.scss'
import sc from './../common/styles/Container.module.scss'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/Title';
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faSass } from '@fortawesome/free-brands-svg-icons'
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import reduxIcon from './../assets/icons/redux.png'
import tsIcon from './../assets/icons/ts.svg'
import jsIcon from './../assets/icons/js.svg'
import apiIcon from './../assets/icons/api.png'
import cssIcon from './../assets/icons/css.png'

type skillType = {
    icon: IconDefinition | string
    title: string
    description: string
}

export const Skills = () => {
    const mySkills: Array<skillType> = [
        {icon: jsIcon, title:'JavaScript', description:'Some description...'},
        {icon: faReact, title:'React', description:'Some description...'},
        {icon: tsIcon, title:'TypeScript', description:'Some description...'},
        {icon: reduxIcon, title:'Redux', description:'Some description...'},
        {icon: apiIcon, title:'REST API', description:'Some description...'},
        // {icon: cssIcon, title:'CSS', description:'Some description with a loooooong string...'},
        {icon: faSass, title:'SASS', description:'Some description with a loooooong string...'},
    ];

    const mySkillsMap = mySkills.map(skill => <Skill icon={skill.icon} title={skill.title} description={skill.description}/>);

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