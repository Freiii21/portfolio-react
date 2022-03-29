import React from 'react';
import './App.css';
import {Main} from './e1-main/Main';
import {Skills} from './e2-skills/Skills';
import {Projects} from './e3-projects/Projects';
import {Contact} from './e4-contact/Contact';
import {Footer} from './e5-footer/Footer';

function App() {
    return (
        <div className="App">
            <Main />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
