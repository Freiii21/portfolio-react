import React, {ChangeEvent, MutableRefObject, useState} from 'react';
import s from './Contact.module.scss'
import sc from './../common/styles/Container.module.scss'
import {Title} from '../common/components/Title/Title';
import axios from 'axios';
import preloader from './../assets/images/preloader.svg';

type ContactPropsType = {
    contactRef: MutableRefObject<null | HTMLDivElement>
}

export const Contact = (props: ContactPropsType) => {
    const [isSending, setIsSending] = useState<boolean>(false);
    const [isSendingStatus, setIsSendingStatus] = useState<"idle" | "success" | "failed" >("idle");

    const successMessageClass = isSendingStatus !== "success" ? s.messageSuccessHidden : s.messageSuccess;
    const failedMessageClass = isSendingStatus !== "failed" ? s.messageFailedHidden : s.messageFailed;

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [nameError, setNameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [messageError, setMessageError] = useState<string>("");

    const nameClass = nameError ? s.errorInput : "";
    const emailClass = emailError ? s.errorInput : "";
    const messageClass = messageError ? s.errorArea : "";

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNameError("");
        setName(e.currentTarget.value);
    };
    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailError("");
        setEmail(e.currentTarget.value);
    };
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageError("");
        setMessage(e.currentTarget.value);
    };
    const emailRegExp = /^[\w][\w-.]*@[\w-]+\.[a-z]{2,7}$/i;
    const emailValidator = (email: string): boolean => emailRegExp.test(email);

    const sendMessage = () => {
        let errorCounter = 0;
        if (!name) {
            setNameError("Name cannot be empty");
            errorCounter += 1;
        }
        if (!emailValidator(email)) {
            setEmailError("Email format is invalid");
            errorCounter += 1;
        }
        if (!message) {
            setMessageError("Message cannot be empty");
            errorCounter += 1;
        }
        if (errorCounter > 0) {
            return;
        }
        setIsSending(true);

        axios.post('https://mailru-nodejs-heroku.herokuapp.com/sendMessage', {
            name: name,
            email: email,
            message: message
        }, {timeout: 60000})
            .then((res) => {
                setIsSendingStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((err) => {
                console.log(err.message);
                setIsSendingStatus('failed');
            })
            .finally(() => {
                    setIsSending(false);
                    setTimeout(() => {
                        setIsSendingStatus('idle');
                    }, 10000);
                }
            )
    }

    return (
        <div>
            <div style={{marginTop: '-5.9vh', height: '5.9vh'}} ref={props.contactRef}/>
            <div className={s.contact}>
                <div className={`${sc.container} ${s.contactContainer}`}>
                    <div style={{zIndex:2}}>
                        <Title value={'Contact'}/>
                    </div>
                    <form className={s.formContainer}>
                        <div className={s.inputFields}>
                            <div className={s.inputBox}>
                                <input placeholder="Name"
                                       value={name}
                                       onChange={onNameChange}
                                       className={nameClass}/>
                                {nameError && <div className={s.error}>{nameError}</div>}
                            </div>
                            <div className={s.inputBox}>
                                <input placeholder="Email"
                                       value={email}
                                       onChange={onEmailChange}
                                       className={emailClass}/>
                                {emailError && <div className={s.error}>{emailError}</div>}
                            </div>
                        </div>
                        <div className={s.textAreaBox}>
                            <textarea placeholder="Your message"
                                      value={message}
                                      onChange={onMessageChange}
                                      className={messageClass}/>
                            {messageError && <div className={s.errorTextArea}>{messageError}</div>}
                        </div>
                    </form>
                    <button onClick={sendMessage}>Send message</button>
                    {isSending && <div className={s.backgroundFontOnSendingMessage}/>}
                </div>
                {isSending && <div className={s.preloader}>
                    <img src={preloader} alt=""/>
                </div>}
                <div className={failedMessageClass}>
                    Server did not respond in time.<br/>Please, use other contacts.
                </div>
                <div className={successMessageClass}>
                    Message sent successfully!<br/>I will contact you soon.
                </div>
            </div>
        </div>
    );
}