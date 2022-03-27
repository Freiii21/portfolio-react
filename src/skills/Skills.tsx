import React from 'react';
import s from './Skills.module.css'
import sc from './../common/styles/Container.module.css'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/Title';

export const Skills = () => {
    return (
        <div className={s.skills}>
            <div className={`${sc.container} ${s.skillsContainer}`}>
                <Title value={"Skills"}/>
                <div className={s.skillsSet}>
                    <Skill title='JS' description='Some description...'/>
                    <Skill title='TypeScript' description='Some description...'/>
                    <Skill title='React' description='Some description...'/>
                    <Skill title='Redux' description='Some description...'/>
                    <Skill title='REST API' description='Some description...'/>
                    <Skill title='CSS' description='Some description with a loooooong string...'/>
                    <Skill title='SASS' description='Some description with a loooooong string...'/>
                </div>
            </div>
        </div>
    );
}