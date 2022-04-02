import React from 'react';
import s from './Project.module.scss'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type ProjectPropsType = {
    bgImage: string
    title: string
    link: string
}

export const Project = (props: ProjectPropsType) => {
    const backgroundImage = {
        backgroundImage: `url(${props.bgImage})`
    };

    return (
        <div className={s.project} style={backgroundImage}>
            <div className={s.content}>
                <div>{props.title}</div>
                <a href={props.link} target="_blank">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={s.icon}/>
                </a>
            </div>
        </div>
    );
}