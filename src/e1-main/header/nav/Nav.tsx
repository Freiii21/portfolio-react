import React from 'react';
import s from './Nav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth } from '@fortawesome/free-solid-svg-icons'
import {scrollFunctionsType, underlineMenuType} from '../../../App';

type NavPropsType = {
    scrollFunctions: scrollFunctionsType
    underlineMenu: underlineMenuType
    headerHidden: boolean
}

export const Nav = (props: NavPropsType) => {
    const navClass = !props.headerHidden ? s.nav : `${s.nav} ${s.scrolled}`;
    const underlineHomeMenu = props.underlineMenu.home ? s.onScreen : "";
    const underlineSkillsMenu = props.underlineMenu.skills ? s.onScreen : "";
    const underlineProjectsMenu = props.underlineMenu.project ? s.onScreen : "";
    const underlineContactMenu = props.underlineMenu.contact ? s.onScreen : "";

    return (
        <div className={navClass}>
            <div onClick={props.scrollFunctions.main} className={underlineHomeMenu}>Home</div>
            <div onClick={props.scrollFunctions.skills} className={underlineSkillsMenu}>Skills</div>
            <div onClick={props.scrollFunctions.projects} className={underlineProjectsMenu}>Projects</div>
            <div onClick={props.scrollFunctions.contact} className={underlineContactMenu}>Contact</div>
            <FontAwesomeIcon icon={faEarth} className={s.icon} onClick={()=>alert("aaa")}/>
        </div>
    );
}