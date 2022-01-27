import React from 'react';
import s from './Contact.module.css'
import sc from './../common/styles/Container.module.css'

export const Contact = () => {
    return (
        <div className={s.contact}>
            <div className={`${sc.container} ${s.contactContainer}`}>
                <h2 className={s.title}>Contact</h2>
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