import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.name}>Igor Titov</div>
            <div className={s.footerContainer}>
                <div className={s.icon}></div>
                <div className={s.icon}></div>
                <div className={s.icon}></div>
                <div className={s.icon}></div>
            </div>
            <div className={s.coperights}>© 2022 All rights reserved</div>
        </div>
    );
}