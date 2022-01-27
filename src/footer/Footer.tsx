import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div>
                <h3>Igor</h3>
            </div>
            <div className={s.footerContainer}>
                <div className={s.icon}></div>
                <div className={s.icon}></div>
                <div className={s.icon}></div>
                <div className={s.icon}></div>
            </div>
            <div>
                <span>© 2022 All rights reserved</span>
            </div>
        </div>
    );
}