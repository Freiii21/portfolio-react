import React from 'react';
import s from './Contact.module.scss'
import sc from './../common/styles/Container.module.scss'
import {Title} from '../common/components/Title';

export const Contact = () => {
    return (
        <div className={s.contact}>
            <div className={`${sc.container} ${s.contactContainer}`}>
                <Title value={"Contact"}/>
                <form className={s.formContainer}>
                    <div className={s.inputFields}>
                        <input placeholder="Name"/>
                        <input placeholder="Email"/>
                    </div>
                    <textarea placeholder="Your message"/>
                </form>
                <button>Send message</button>
            </div>
        </div>
    );
}