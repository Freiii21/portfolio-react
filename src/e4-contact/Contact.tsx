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
    const [isSendingSuccess, setIsSendingSuccess] = useState<"idle" | "failed" | "success">("failed");

    const successMessageClass = isSendingSuccess !== "success" ? s.messageSuccessHidden : s.messageSuccess;
    const failedMessageClass = isSendingSuccess !== "failed" ? s.messageFailedHidden : s.messageFailed;

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<boolean>(false);

    const nameClass = nameError ? s.errorInput : "";
    const emailClass = emailError ? s.errorInput : "";
    const messageClass = messageError ? s.errorArea : "";

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNameError(false);
        setName(e.currentTarget.value);
    };
    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailError(false);
        setEmail(e.currentTarget.value);
    };
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageError(false);
        setMessage(e.currentTarget.value);
    };
    const emailRegExp = /^[\w][\w-.]*@[\w-]+\.[a-z]{2,7}$/i;
    const emailValidator = (email: string): boolean => emailRegExp.test(email);

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
        if (!emailValidator(email)) {
            setEmailError(true);
            errorCounter += 1;
        }
        if (!message) {
            setMessageError(true);
            errorCounter += 1;
        }
        if (errorCounter > 0) {
            return;
        }
        setIsSending(true);
        setTimeout(()=>{
            console.log(`name: ${name}\nemail: ${email}\nmessage: ${message}`);
            setIsSending(false);
        },5000);
        setTimeout(()=>{
            setIsSendingSuccess("idle");
        },10000);
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
                                <input placeholder="Name"
                                       value={name}
                                       onChange={onNameChange}
                                       disabled={isSending}
                                       className={nameClass}/>
                                {nameError && <div className={s.error}>Name cannot be empty</div>}
                            </div>
                            <div className={s.inputBox}>
                                <input placeholder="Email"
                                       value={email}
                                       onChange={onEmailChange}
                                       disabled={isSending}
                                       className={emailClass}/>
                                {emailError && <div className={s.error}>Email format is invalid</div>}
                            </div>
                        </div>
                        <div className={s.textAreaBox}>
                            <textarea placeholder="Your message"
                                      value={message}
                                      onChange={onMessageChange}
                                      disabled={isSending}
                                      className={messageClass}/>
                            {messageError && <div className={s.errorTextArea}>Message cannot be empty</div>}
                        </div>
                    </form>
                    <button onClick={sendMessage} disabled={isSending}>Send message</button>
                </div>
                {isSending && <div className={s.preloader}>
                    <img src={preloader} alt=""/>
                </div>}
                <div className={failedMessageClass}>
                    Something went wrong.<br/>Please, use other contacts.
                </div>
                <div className={successMessageClass}>
                    Message sent successfully!<br/>I will contact you soon.
                </div>
            </div>
        </div>
    );
}