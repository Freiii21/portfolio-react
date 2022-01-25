import React from 'react';
import s from './Skills.module.css'
import sc from './../common/styles/Container.module.css'
import {Skill} from './skill/Skill';

export const Skills = () => {
    return (
        <div className={s.skills}>
            <div className={`${sc.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skillsSet}>
                    <Skill title='JS' description='Some description...'/>
                    <Skill title='CSS' description='Some description with a loooooong string...'/>
                    <Skill title='REACT' description='Some description...'/>
                </div>
            </div>
        </div>
    );
}