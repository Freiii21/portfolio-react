import React, {ChangeEvent, MutableRefObject, useState} from 'react';
import s from './Contact.module.scss'
import sc from './../common/styles/Container.module.scss'
import {Title} from '../common/components/Title/Title';
import axios from 'axios';

type ContactPropsType = {
    contactRef: MutableRefObject<null | HTMLDivElement>
}

export const Contact = (props: ContactPropsType) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<boolean>(false);

    const nameClass = nameError ? s.nameError : "";
    const emailClass = emailError ? s.emailError : "";
    const messageClass = messageError ? s.messageError : "";

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNameError(false);
        setName(e.currentTarget.value);
    };
    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    };
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value);
    };
    const sendMessage = () => {
        // axios.post("http://localhost:3010/sendMessage", {
        //     value: "aaa",
        //     value2: "bbb"
        // })
        //     .then(() => {
        //         alert("Message sent")
        //     })
        let errorCounter = 0;
        if (!name) {
            setNameError(true);
            errorCounter += 1;
        }
        if (errorCounter > 0) {
            return;
        }
        alert('aa');
    }

    return (
        <div>
            <div style={{marginTop: '-5.9vh', height: '5.9vh'}} ref={props.contactRef}/>
            <div className={s.contact}>
                <div className={`${sc.container} ${s.contactContainer}`}>
                    <Title value={'Contact'}/>
                    <form className={s.formContainer}>
                        <div className={s.inputFields}>
                            <div className={s.inputBox}>
                                <input placeholder="Name" value={name} onChange={onNameChange} className={nameClass}/>
                                {nameError && <div className={s.error}>Name cannot be empty</div>}
                            </div>
                            <div className={s.inputBox}>
                                <input placeholder="Email" value={email} onChange={onEmailChange} className={emailClass}/>
                                {emailError && <div className={s.error}>Email format is invalid</div>}
                            </div>
                        </div>
                        <div className={s.textAreaBox}>
                            <textarea placeholder="Your message" value={message} onChange={onMessageChange}/>
                            {messageError && <div className={s.errorTextArea}>Message cannot be empty</div>}
                        </div>
                    </form>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}