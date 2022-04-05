import React, {useRef} from 'react';
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

function App() {
    const mainRef = useRef<null | HTMLDivElement>(null);
    const skillsRef = useRef<null | HTMLDivElement>(null);
    const projectsRef = useRef<null | HTMLDivElement>(null);
    const contactRef = useRef<null | HTMLDivElement>(null);

    const mainRefScroll = () => mainRef.current && mainRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const skillsRefScroll = () => skillsRef.current && skillsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const projectsRefScroll = () => projectsRef.current && projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const contactRefScroll = () => contactRef.current && contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const scrollFunctions:scrollFunctionsType = {
        main: mainRefScroll,
        skills: skillsRefScroll,
        projects: projectsRefScroll,
        contact: contactRefScroll,
    }

    return (
        <div className="App">
            <Main mainRef={mainRef} scrollFunctions={scrollFunctions} />
            <Skills skillsRef={skillsRef}/>
            <Projects projectsRef={projectsRef}/>
            <Contact contactRef={contactRef}/>
            <Footer />
        </div>
    );
}

export default App;
