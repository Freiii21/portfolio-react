import React from 'react';
import s from './Footer.module.scss'
import {faVk} from '@fortawesome/free-brands-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.name}>Igor Titov</div>
            <div className={s.footerContainer}>
                <a href={'https://www.linkedin.com/in/titov-igor/'} target={'blank'}>
                    <FontAwesomeIcon icon={faLinkedin} className={s.icon}/>
                </a>
                <a href={'https://github.com/Freiii21'} target={'blank'}>
                    <FontAwesomeIcon icon={faGithub} className={s.icon}/>
                </a>
                <a href={'https://t.me/FrankensteinAssistant'} target={'blank'}>
                    <FontAwesomeIcon icon={faTelegram} className={s.icon}/>
                </a>
                <a href={'https://vk.com/id39907055'} target={'blank'}>
                    <FontAwesomeIcon icon={faVk} className={s.icon}/>
                </a>
            </div>
            <div className={s.copyrights}>
                <div>Igor © 2022. All Rights Reserved.</div>
                <div>Made using React.</div>
            </div>
        </div>
    );
}