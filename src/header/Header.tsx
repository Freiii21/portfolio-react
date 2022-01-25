import React from 'react';
import {Nav} from '../nav/Nav';
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <Nav/>
            </div>
        </div>
    );
}