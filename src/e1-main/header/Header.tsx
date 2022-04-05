import React from 'react';
import {Nav} from './nav/Nav';
import s from './Header.module.scss'
import {scrollFunctionsType} from '../../App';

type HeaderPropsType = {
    scrollFunctions: scrollFunctionsType
}

export const Header = (props:HeaderPropsType) => {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <div className={s.name}>IGOR</div>
                <Nav scrollFunctions={props.scrollFunctions}/>
            </div>
        </div>
    );
}