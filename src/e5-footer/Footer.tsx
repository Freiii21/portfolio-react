import React from 'react';
import s from './Footer.module.scss'
import { faVk } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.name}>Igor Titov</div>
            <div className={s.footerContainer}>
                <FontAwesomeIcon icon={faLinkedin} className={s.icon}/>
                <FontAwesomeIcon icon={faTelegram} className={s.icon}/>
                <FontAwesomeIcon icon={faVk} className={s.icon}/>
            </div>
            <div className={s.copyrights}>Igor © 2022. All Rights Reserved.</div>
        </div>
    );
}