import React from 'react';
import s from './Nav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth } from '@fortawesome/free-solid-svg-icons'
import {scrollFunctionsType} from '../../../App';

type NavPropsType = {
    scrollFunctions: scrollFunctionsType
    headerHidden: boolean
}

export const Nav = (props: NavPropsType) => {
    const navClass = !props.headerHidden ? s.nav : `${s.nav} ${s.scrolled}`;

    return (
        <div className={navClass}>
            <div onClick={props.scrollFunctions.main}>Home</div>
            <div onClick={props.scrollFunctions.skills}>Skills</div>
            <div onClick={props.scrollFunctions.projects}>Projects</div>
            <div onClick={props.scrollFunctions.contact}>Contact</div>
            <FontAwesomeIcon icon={faEarth} className={s.icon} onClick={()=>alert("aaa")}/>
        </div>
    );
}