import React, { useState } from 'react';

import classes from './form.module.css';
import mark from '../../assets/Form/mark.svg';
import axios from "axios";

const Form = (props) => {

    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');

    const submitHandler = (e) => {
        console.info('submitHandler', e, name, phone, email);
        axios.post('https://sheet.best/api/sheets/675bec1d-fd6a-49ec-a7d0-22d7220cebaa', {name, phone, email})
            .then(() => {
                setName('');
                setPhone('');
                setEmail('');
            });
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
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={classes.component}>
                        <label>Телефон</label>
                        <input 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className={classes.component}>
                        <label>Почта</label>
                        <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <button onClick={submitHandler}>
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