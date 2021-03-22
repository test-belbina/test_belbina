import React, { useState } from 'react';

import 'react-phone-number-input/style.css'
import Input from 'react-phone-number-input/input'
import { isValidPhoneNumber, isPossiblePhoneNumber } from 'react-phone-number-input'

import classes from './form.module.css';

import checkMark from '../../assets/Form/checkMark.svg'
import mark from '../../assets/Form/mark.svg';
import ApiForm from './apiForm';

const Form = (props) => {

    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');

    const [ nameError, setNameError ] = useState('');
    const [ phoneError, setPhoneError ] = useState('');
    const [ emailError, setEmailError ] = useState('');
    const [ formError, setFormError ] = useState(false);

    const [ isSubmit, setIsSubmit ] = useState(false);

    const apiForm = new ApiForm();

    const isValidEmail = (value) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (re.test(value)) {
            return true
        } else {
            return false
        }
    }


    const checkValidForm = () => {
        setFormError(false)

        let valid = true;

        if (name === '') {
            setNameError('Заполните имя');
            setFormError(true)
            valid = false
        }

        if (phone === '') {
            setPhoneError('Заполните номер телефона');
            setFormError(true)
            valid = false
        } else if (/[^\+\d\-\s]/.test(phone)){
            setPhoneError('Введен некорректный номер телефона');
            setFormError(true)
            valid = false
        }

        if (email === '') {
            setEmailError('Заполните Email')
            setFormError(true)
            valid = false
        }

        // if (phone && isPossiblePhoneNumber(phone) === false) {
        //     setPhoneError(`Некорректный номер телефона`)
        //     setFormError(true)
        //     valid = false
        // }

        if (isValidEmail(email) === false) {
            setEmailError(`Некорректный адрес email`)
            setFormError(true)
            valid = false
        }

        return valid

    }

    const onChangeName = (value) => {
        setNameError('');
        setName(value);
    }

    const onChangePhone = (value) => {
        console.info('onChangePhone', value);
        setPhoneError('');
        setPhone(value);
    }
    const onPhonePress = (event) => {
        if (!/[\d\s\-\+]/.test(event.key)) { event.preventDefault(); }
    }

    const onChangeEmail = (value) => {
        setEmailError('');
        setEmail(value);
    }

// TODO: Обработка ошибок fetch

    const submitHandler = (e) => {
        checkValidForm()

        if (checkValidForm()) {
            
            apiForm.sendMail(name, email);
            console.info('submitHandler', name, phone, email);
            apiForm.sendData(name, phone, email)
                .then(() => {
                    setName('');
                    setPhone('');
                    setEmail('');
                    setFormError(false);
                })

            setIsSubmit(true);
            
        }
    }

    return (
        <div className={classes.main}>
            { !isSubmit && <div className={classes.body}>
                <h3>
                    Анкета героя Белбина
                </h3>
                <div className={classes.inputs}>
                    <div className={classes.component}>
                        <label>Имя</label>
                        <input 
                            value={name}
                            placeholder="Введите имя"
                            onChange={ (e) => onChangeName(e.target.value) }
                        />
                        {formError && <span style={{color: '#c20303', paddingLeft: '8px'}}>{nameError}</span> }
                    </div>
                    <div className={classes.component}>
                        <label>Телефон</label>

                        <input
                            type="tel"
                            placeholder="8 999 123 45 67"
							maxLength="16"
                            value={phone}
                            onKeyPress={ onPhonePress }
                            onChange={ (e) => onChangePhone(e.target.value) }
                        />

                        {formError && <span style={{color: '#c20303', paddingLeft: '8px'}}>{phoneError}</span> }

                    </div>
                    <div className={classes.component}>
                        <label>Почта</label>
                        <input
                            type="email"
                            value={email}
                            placeholder="Введите Email"
                            onChange={(e) => onChangeEmail(e.target.value)}
                        />
                        {formError && <span style={{color: '#c20303', paddingLeft: '8px'}}>{emailError}</span> }
                    </div>
                </div>
                <button onClick={submitHandler}>
                    Получить чек-лист
                </button>
            </div> }

            { isSubmit && <div className={classes.body} style={{ paddingTop: '30px' }}>
                 <h3>
                    Чек-лист отправлен!
                </h3>
                <div className={classes.component} style={{ alignItems: 'center', marginTop: 0 }}>
                    <img src={ checkMark } style={{ width: '30%' }}/>
                </div> 

            </div> }

            <img  
                src={mark}
                alt=""
                className={classes.mark}
            />
        </div>
    );
};

export default Form;