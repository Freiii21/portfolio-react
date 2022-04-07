import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Main} from './e1-main/Main';
import {Skills} from './e2-skills/Skills';
import {Projects} from './e3-projects/Projects';
import {Contact} from './e4-contact/Contact';
import {Footer} from './e5-footer/Footer';

export type scrollFunctionsType = {
    main: () => void
    skills: () => void
    projects: () => void
    contact: () => void
}
export type underlineMenuType = {
    home: boolean
    skills: boolean
    project: boolean
    contact: boolean
}

function App() {
    const [collapsedMobileMenu, setCollapsedMobileMenu] = useState(true);
    const expandMobileMenu = () => {
        setCollapsedMobileMenu(!collapsedMobileMenu);
    }

    const mainRef = useRef<null | HTMLDivElement>(null);
    const skillsRef = useRef<null | HTMLDivElement>(null);
    const projectsRef = useRef<null | HTMLDivElement>(null);
    const contactRef = useRef<null | HTMLDivElement>(null);
    const nameRef = useRef<null | HTMLDivElement>(null);

    const mainRefScroll = () => {
        setCollapsedMobileMenu(true);
        mainRef.current && mainRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const skillsRefScroll = () => {
        setCollapsedMobileMenu(true);
        skillsRef.current && skillsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const projectsRefScroll = () => {
        setCollapsedMobileMenu(true);
        projectsRef.current && projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const contactRefScroll = () => {
        setCollapsedMobileMenu(true);
        contactRef.current && contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const scrollFunctions:scrollFunctionsType = {
        main: mainRefScroll,
        skills: skillsRefScroll,
        projects: projectsRefScroll,
        contact: contactRefScroll,
    }

    const [headerHidden, setHeaderHidden] = useState(false);
    const [underlineMenu, setUnderlineMenu] = useState<underlineMenuType>({
        home: true,
        skills: false,
        project: false,
        contact: false,
    })

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    const scrollHandler = () => {
        if(nameRef.current && window.scrollY >= nameRef.current.offsetTop){
            setHeaderHidden(true);
        } else {
            setHeaderHidden(false);
        }

        let temp = underlineMenu;
        if(mainRef.current && skillsRef.current && window.scrollY >= mainRef.current.offsetTop
            && window.scrollY < skillsRef.current.offsetTop){
            temp = {home: true, skills: false, project: false, contact: false}
        }
        if(skillsRef.current && projectsRef.current && window.scrollY >= skillsRef.current.offsetTop
            && window.scrollY < projectsRef.current.offsetTop){
            temp = {...temp, home: false, skills: true, project: false, contact: false}
        }
        if(projectsRef.current && contactRef.current && window.scrollY >= projectsRef.current.offsetTop
            && window.scrollY < contactRef.current.offsetTop){
            temp = {...temp, home: false, skills: false, project: true, contact: false}
        }
        if(contactRef.current && window.scrollY >= contactRef.current.offsetTop){
            temp = {...temp, home: false, skills: false, project: false, contact: true}
        }
        setUnderlineMenu(temp);
    }

    return (
        <div className="App">
            <Main mainRef={mainRef}
                  nameRef={nameRef}
                  headerHidden={headerHidden}
                  underlineMenu={underlineMenu}
                  collapsedMobileMenu={collapsedMobileMenu}
                  expandMobileMenu={expandMobileMenu}
                  scrollFunctions={scrollFunctions} />
            <Skills skillsRef={skillsRef}/>
            <Projects projectsRef={projectsRef}/>
            <Contact contactRef={contactRef}/>
            <Footer />
        </div>
    );
}

export default App;
