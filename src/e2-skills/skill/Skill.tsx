import React from 'react';
import s from './Skill.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

type SkillPropsType = {
    icon: IconDefinition | string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.iconField}>
                {typeof props.icon !== 'string'
                    ? <FontAwesomeIcon icon={props.icon} className={s.icon}/>
                    : <img src={props.icon} alt="icon" className={s.icon}/>
                }
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}