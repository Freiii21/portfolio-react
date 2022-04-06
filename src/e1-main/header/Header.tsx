import React from 'react';
import {Nav} from './nav/Nav';
import s from './Header.module.scss'
import {scrollFunctionsType} from '../../App';

type HeaderPropsType = {
    scrollFunctions: scrollFunctionsType
    headerHidden: boolean
}

export const Header = (props: HeaderPropsType) => {
    const headerClass = !props.headerHidden ? s.header : `${s.header} ${s.scrolled}`;

    return (
        <div className={headerClass}>
            <div className={s.headerContent}>
                <div className={s.headerContainer}>
                    <div className={s.name} onClick={props.scrollFunctions.main}>IGOR</div>
                    <Nav scrollFunctions={props.scrollFunctions} headerHidden={props.headerHidden}/>
                </div>
            </div>
        </div>
    );
}