import React from 'react';
import s from './Contact.module.css'
import sc from './../common/styles/Container.module.css'

export const Contact = () => {
    return (
        <div className={s.contact}>
            <div className={`${sc.container} ${s.contactContainer}`}>
                <h2 className={s.title}>Contact</h2>
                <form className={s.formContainer}>
                    <div >
                        <input placeholder="Name" className={s.field}/>
                    </div>
                    <div>
                        <input placeholder="Email" className={s.field}/>
                    </div>
                    <div>
                        <textarea placeholder="Your message" className={s.field}/>
                    </div>
                </form>
                <button>Send message</button>
            </div>
        </div>
    );
}