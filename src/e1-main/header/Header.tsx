import React from 'react';
import {Nav} from './nav/Nav';
import s from './Header.module.scss'
import {scrollFunctionsType, underlineMenuType} from '../../App';

type HeaderPropsType = {
    scrollFunctions: scrollFunctionsType
    underlineMenu: underlineMenuType
    collapsedMobileMenu: boolean
    expandMobileMenu: () => void
    headerHidden: boolean
}

export const Header = (props: HeaderPropsType) => {
    const basicHeaderClass = !props.headerHidden ? s.header : `${s.header} ${s.scrolled}`;
    const headerClass = props.collapsedMobileMenu ? basicHeaderClass : `${basicHeaderClass} ${s.mobileMenu}`;

    return (
        <div className={headerClass}>
            <div className={s.headerContent}>
                <div className={s.headerContainer}>
                    <div className={s.name} onClick={props.scrollFunctions.main}>IGOR</div>
                    <Nav scrollFunctions={props.scrollFunctions}
                         underlineMenu={props.underlineMenu}
                         collapsedMobileMenu={props.collapsedMobileMenu}
                         expandMobileMenu={props.expandMobileMenu}
                         headerHidden={props.headerHidden}/>
                </div>
            </div>
        </div>
    );
}