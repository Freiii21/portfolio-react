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
                    <Skill title='JS' description='Qwerty Qwerty Qwerty'/>
                    <Skill title='CSS' description='Styles Styles Styles Styles Styles Styles Styles Styles Styles'/>
                    <Skill title='REACT' description='Text Text Text'/>
                </div>
            </div>
        </div>
    );
}