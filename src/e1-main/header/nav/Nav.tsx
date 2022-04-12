import React from 'react';
import s from './Nav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {scrollFunctionsType, underlineMenuType} from '../../../App';

type NavPropsType = {
    scrollFunctions: scrollFunctionsType
    underlineMenu: underlineMenuType
    collapsedMobileMenu: boolean
    expandMobileMenu: () => void
    headerHidden: boolean
}

export const Nav = (props: NavPropsType) => {

    const navHiddenClass = !props.headerHidden ? s.nav : `${s.nav} ${s.scrolled}`;
    const navCommonClass = props.collapsedMobileMenu ? navHiddenClass : `${navHiddenClass} ${s.mobileClass}`;

    const barsMenuClass = !props.headerHidden ? s.barsMenu : `${s.barsMenu} ${s.scrolled}`;

    const primaryBackground = props.collapsedMobileMenu ? s.hiddenPrimaryBackground
        : `${s.hiddenPrimaryBackground} ${s.primaryBackground}`;
    const menuBackground = !props.headerHidden ? primaryBackground : `${primaryBackground} ${s.secondBackground}`;

    const underlineHomeMenu = props.underlineMenu.home ? s.onScreen : "";
    const underlineSkillsMenu = props.underlineMenu.skills ? s.onScreen : "";
    const underlineProjectsMenu = props.underlineMenu.project ? s.onScreen : "";
    const underlineContactMenu = props.underlineMenu.contact ? s.onScreen : "";

    return (
        <div>
            <div className={navCommonClass}>
                <div onClick={props.scrollFunctions.main} className={underlineHomeMenu}>Home</div>
                <div onClick={props.scrollFunctions.skills} className={underlineSkillsMenu}>Skills</div>
                <div onClick={props.scrollFunctions.projects} className={underlineProjectsMenu}>Projects</div>
                <div onClick={props.scrollFunctions.contact} className={underlineContactMenu}>Contact</div>
                {/*<FontAwesomeIcon icon={faEarth} className={s.icon} onClick={() => alert('aaa')}/>*/}
            </div>
            <FontAwesomeIcon icon={faBars}
                             onClick={() => props.expandMobileMenu()}
                             className={barsMenuClass}/>
            <div className={menuBackground}/>
        </div>
    );
}