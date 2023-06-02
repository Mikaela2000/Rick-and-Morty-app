import { useState } from 'react';
import validate from './validation.js';
import style from './form.module.css';

const Form = ({login}) => {

    const [useData, setUseData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUseData({
            ...useData,
            [event.target.name]: event.target.value
        })

        setErrors(
            validate({
                ...useData,
                [event.target.name]: event.target.value
            })
        )
    }


const submitHandler= (event)=>{
    event.preventDefault();
    login(useData);
    
}


    return (
        <form onSubmit={submitHandler}>
            <div className={style.contenedor}>
                <img className={style.imagenForm} src="https://i.pinimg.com/originals/9e/fd/8d/9efd8d7d411a744b0c62ac5008566a4a.jpg" alt="" />
                <label className={style.inicioSesion}>Iniciar Sesión</label>
            <div className={style.separador1}>
                <label htmlFor='email' >Email</label>
                <input type='text' name='email' value={useData.email} onChange={handleChange} />
                <p className={style.errorEmail}>{errors.email}</p>
            </div>
            <div className={style.separador2}>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' value={useData.password} onChange={handleChange} placeholder="6+ caracteres"/>
                <p>{errors.password}</p>
            </div>
                <button  className={style.button}>Submit</button>
            </div>
        </form>
    )
};

export default Form;

