import { useState } from 'react'

import './Data.css'
function Data() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');


    const emailHandler = (e) => {
        setEmail(e.target.value)
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(String(e.target.value).toLowerCase())
    }


    const onChangeHandler = (fieldName, value) => {
        if (fieldName === "name") {
            setName(value);
        }
        else if (fieldName === "lastName") {
            setLastName(value);
        }
    }


    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (name.trim() === "" || email.trim() === "" || lastName.trim() === "") {
            alert("ОШИБКА! Форма не заполнена!")
        }        
        else {
            alert('Регистрация прошла успешна!' + '\n' +
            '\n' +
            'Имя: ' + name + '\n' +
            'Фамилия: ' + lastName + '\n' +
            'email: ' + email)
            setName("")
            setEmail("")
            setLastName("")
        }
    }



    return (
        <div className="block">
            <form className="form" onSubmit={(e) => { onSubmitHandler(e) }} >
                <input placeholder="Имя..." name='name ' value={name} onChange={(e) => onChangeHandler("name",e.target.value)} />
                <label>Имя </label>
                <input placeholder="Фамилия..." name='lastName ' value={lastName} onChange={(e) => onChangeHandler("lastName",e.target.value)} />
                <label>Фамилия </label>
                <input type="email" name='email' placeholder="Email" value={email} onChange={(e) => emailHandler(e)} />
                <label>email</label>
                <button type="submit">Регистрация</button>
            </form>

        </div>
    );
}


export default Data