import React from 'react';
import s from './Main.module.css'
import sc from './../common/styles/Container.module.css'
import myPhoto from './../assets/images/myPhoto.jpg'
import background from './../assets/images/background.jpg'
import {Header} from '../header/Header';

export const Main = () => {
    const photoStyle = {
        backgroundImage: `url(${myPhoto})`
    };
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
    };

    return (
        <div className={s.main} style={backgroundStyle}>
            <div className={sc.container}>
                <div className={s.greetingField}>
                    <div className={s.greeting}>Hi There</div>
                    <div className={s.name}>I'm Igor Titov.</div>
                    <div className={s.occupation}>Frontend Developer.</div>
                </div>
                <div className={s.photo} style={photoStyle}></div>
            </div>
        </div>
    );
}