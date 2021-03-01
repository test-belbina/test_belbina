import React, { useState, useEffect } from 'react';

import classes from './form.module.css';
import mark from '../../assets/Form/mark.svg';

const Form = (props) => {

    const [ name, setName ] = useState('');
    const [ surname, setSurname ] = useState('');
    const [ email, setEmail ] = useState('');

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
                        <label>Фамилия</label>
                        <input 
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
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
                <button>
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