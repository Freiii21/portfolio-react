import React, {MutableRefObject} from 'react';
import s from './Skills.module.scss'
import sc from './../common/styles/Container.module.scss'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/Title';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

import jsIcon from './../assets/icons/js.svg'
import jsIconColor from './../assets/icons/jsColor.png'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import reactColor from './../assets/icons/reactColor.png'
import tsIcon from './../assets/icons/ts.svg'
import tsIconColor from './../assets/icons/tsColor.png'
import reduxIcon from './../assets/icons/redux.png'
import reduxIconColor from './../assets/icons/reduxColor.png'
import apiIcon from './../assets/icons/api.png'
import apiIconColor from './../assets/icons/apiColor.png'
import html_css from './../assets/icons/html_css.png'
import html_css_Color from './../assets/icons/html_css_Color.png'

type SkillPropsType = {
    skillsRef: MutableRefObject<null | HTMLDivElement>
}

type skillType = {
    icon: IconDefinition | string
    iconColor: IconDefinition | string
    title: string
    description: string
}

export const Skills = (props: SkillPropsType) => {
    const mySkills: Array<skillType> = [
        {icon: jsIcon, iconColor: jsIconColor, title: 'JavaScript', description: 'Some description...'},
        {icon: faReact, iconColor: reactColor, title: 'React', description: 'Some description...'},
        {icon: tsIcon, iconColor: tsIconColor, title: 'TypeScript', description: 'Some description...'},
        {icon: reduxIcon, iconColor: reduxIconColor, title: 'Redux', description: 'Some description...'},
        {icon: apiIcon, iconColor: apiIconColor, title: 'REST API', description: 'Some description...'},
        {icon: html_css, iconColor: html_css_Color, title:'HTML + CSS', description:'Some description with a loooooong string...'},
    ];

    const mySkillsMap = mySkills.map(skill => <Skill icon={skill.icon}
                                                     iconColor={skill.iconColor}
                                                     title={skill.title}
                                                     description={skill.description}
                                                     key={skill.title}/>);

    return (
        <div>
            <div style={{marginTop:"-55px",height:"55px"}} ref={props.skillsRef}/>
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