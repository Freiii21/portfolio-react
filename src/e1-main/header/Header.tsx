import React from 'react';
import {Nav} from './nav/Nav';
import s from './Header.module.scss'
import {scrollFunctionsType, underlineMenuType} from '../../App';

type HeaderPropsType = {
    scrollFunctions: scrollFunctionsType
    underlineMenu: underlineMenuType
    headerHidden: boolean
}

export const Header = (props: HeaderPropsType) => {
    const headerClass = !props.headerHidden ? s.header : `${s.header} ${s.scrolled}`;

    return (
        <div className={headerClass}>
            <div className={s.headerContent}>
                <div className={s.headerContainer}>
                    <div className={s.name} onClick={props.scrollFunctions.main}>IGOR</div>
                    <Nav scrollFunctions={props.scrollFunctions}
                         underlineMenu={props.underlineMenu}
                         headerHidden={props.headerHidden}/>
                </div>
            </div>
        </div>
    );
}