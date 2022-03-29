import React, {CSSProperties} from 'react';
import s from './Project.module.scss'

type ProjectPropsType = {
    style: CSSProperties | undefined
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.icon} style={props.style}>
                <a href="">Open project</a>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}