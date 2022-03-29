import React from 'react';
import s from './Nav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth } from '@fortawesome/free-solid-svg-icons'


export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
            <FontAwesomeIcon icon={faEarth} className={s.icon} onClick={()=>alert("aaa")}/>
        </div>
    );
}