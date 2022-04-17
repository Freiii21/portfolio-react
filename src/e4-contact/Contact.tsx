import React, {MutableRefObject} from 'react';
import s from './Contact.module.scss'
import sc from './../common/styles/Container.module.scss'
import {Title} from '../common/components/Title';

type ContactPropsType = {
    contactRef: MutableRefObject<null | HTMLDivElement>
}

export const Contact = (props: ContactPropsType) => {
    return (
        <div>
            <div style={{marginTop: '-6vh', height: '6vh'}} ref={props.contactRef}/>
            <div className={s.contact}>
                <div className={`${sc.container} ${s.contactContainer}`}>
                    <Title value={'Contact'}/>
                    <form className={s.formContainer}>
                        <div className={s.inputFields}>
                            <input placeholder="Name"/>
                            <input placeholder="Email"/>
                        </div>
                        <textarea placeholder="Your message"/>
                    </form>
                    <button onClick={() => alert('send message')}>Send message</button>
                </div>
            </div>
        </div>
    );
}