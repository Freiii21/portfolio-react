import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import s from './Main.module.scss'
import sc from './../common/styles/Container.module.scss'
import myPhoto from './../assets/images/myPhoto.jpg'
import background from './../assets/images/background.jpg'
import {Header} from './header/Header';
import {scrollFunctionsType, underlineMenuType} from '../App';

type MainPropsType = {
    mainRef: MutableRefObject<null | HTMLDivElement>
    nameRef: MutableRefObject<null | HTMLDivElement>
    headerHidden: boolean
    underlineMenu: underlineMenuType
    collapsedMobileMenu: boolean
    expandMobileMenu: (status: boolean) => void
    scrollFunctions: scrollFunctionsType
}

export const Main = (props: MainPropsType) => {
    const photoStyle = {backgroundImage: `url(${myPhoto})`};
    const backgroundStyle = {backgroundImage: `url(${background})`};

    const greetingFieldClass = !props.headerHidden ? s.greetingField : `${s.greetingField} ${s.greetingFieldScrolled}`;
    const photoClass = !props.headerHidden ? s.photo : `${s.photo} ${s.photoScrolled}`;
    const mainFieldHeightStyle = !props.headerHidden ? "88vh" : "100vh";


    return (
        <div className={s.main} style={backgroundStyle} ref={props.mainRef}>
            <Header scrollFunctions={props.scrollFunctions}
                    underlineMenu={props.underlineMenu}
                    collapsedMobileMenu={props.collapsedMobileMenu}
                    expandMobileMenu={props.expandMobileMenu}
                    headerHidden={props.headerHidden}/>
            <div className={sc.container} style={{height: `${mainFieldHeightStyle}`}}>
                <div className={greetingFieldClass}>
                    <div className={s.greeting}>Hi There</div>
                    <div className={s.name} ref={props.nameRef}>I'm Igor Titov.</div>
                    <div className={s.occupation}>Frontend Developer.</div>
                </div>
                <div className={photoClass} style={photoStyle}/>
            </div>
        </div>
    );
}
