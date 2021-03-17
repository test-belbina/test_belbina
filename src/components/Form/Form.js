import React, { useState } from 'react';

import classes from './form.module.css';
import mark from '../../assets/Form/mark.svg';
import ApiForm from './apiForm';

const Form = (props) => {

    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');

    const [ phoneError, setPhoneError ] = useState('');
    const [ emailError, setEmailError ] = useState('');

    const [ validForm, isValidForm ] = useState(false);

    const apiForm = new ApiForm();

    const onFocusPhone = () => {
        // if (phone) {
        //     setPhone("+7")
        // }
    }
    const checkValidForm = () => {
        isValidForm(name.length > 0 && phone.length > 0 && phoneError.length == 0 && email.length > 0 && emailError.length == 0);
        console.info('check', `${name} | ${phoneError} | ${emailError}`, name.length > 0, phoneError.length > 0, emailError.length > 0);
    }
    const onChangePhone = (value) => {
        setPhone(value);
        if (/^\+\d\s?\(?\d{3}\)?\s?\d{3}\-?\d{2}\-?\d{2}$/.test(value) || value == '') {
            setPhoneError('');
        } else {
            setPhoneError(`"${value}" некорректный номер телефона`);
        }
        checkValidForm();
    }
    const onChangeEmail = (value) => {
        setEmail(value);

        if ((value.split('@').length == 2 && /^\w[\w\-\d\.]*[\w\d]@[\w\d][\w\-\d\.]*[\w\d]$/.test(value)) || value == '') {
            setEmailError('');
        } else {
            setEmailError(`"${value}" некорректный адрес email`);
        }

        checkValidForm();
    }

    const submitHandler = (e) => {
        console.info('submitHandler', e, name, phone, email);
        apiForm.sendMail(name, email);

        apiForm.sendData(name, phone, email)
            .then(() => {
                setName('');
                setPhone('');
                setEmail('');
            })

        // axios.post('https://sheet.best/api/sheets/675bec1d-fd6a-49ec-a7d0-22d7220cebaa', {name, phone, email})
        //     .then(() => {
        //
        //     });
    }

    return (
        <div className={classes.main}>
            <div className={classes.body}>
                <h3>
                    Анкета героя Белбина
                </h3>
                <div className={classes.inputs}>
                    <div className={classes.component}>
                        <label>Имя</label>
                        <input 
                            value={name}
                            placeholder="Введите Ваше имя"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={classes.component}>
                        <label>Телефон</label>
                        <input 
                            value={phone}
                            type="tel"
                            placeholder="+7 (999) 123-45-67"
                            maxLength="18"
                            onFocus={onFocusPhone}
                            onChange={(e) => onChangePhone(e.target.value)}
                        />
                        <span style={{color: '#c20303', paddingLeft: '8px'}}>{phoneError}</span>
                    </div>
                    <div className={classes.component}>
                        <label>Почта</label>
                        <input
                            type="email"
                            value={email}
                            placeholder="Введите Ваш Email"
                            onChange={(e) => onChangeEmail(e.target.value)}
                        />
                        <span style={{color: '#c20303', paddingLeft: '8px'}}>{emailError}</span>
                    </div>
                </div>
                <button onClick={submitHandler} disabled={!validForm}>
                    Получить чек-лист
                </button>
            </div>
            <img  
                src={mark}
                alt=""
                className={classes.mark}
            />
        </div>
    );
};

export default Form;