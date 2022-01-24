import React from 'react';
import s from './Main.module.css'

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <h1>I am Igor</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
}