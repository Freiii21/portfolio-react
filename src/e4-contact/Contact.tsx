import React from 'react';
import s from './Contact.module.css'
import sc from './../common/styles/Container.module.scss'
import {Title} from '../common/components/Title';

export const Contact = () => {
    return (
        <div className={s.contact}>
            <div className={`${sc.container} ${s.contactContainer}`}>
                <Title value={"Contact"}/>
                <form className={s.formContainer}>
                    <input placeholder="Name"/>
                    <input placeholder="Email"/>
                    <textarea placeholder="Your message"/>
                </form>
                <a href="">Send message</a>
                {/*<button>Send message</button>*/}
            </div>
        </div>
    );
}