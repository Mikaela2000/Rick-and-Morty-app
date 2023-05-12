const validate = (useData, errors, setErrors) => {

const regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
    //email
    
    if(!useData.email){
        setErrors({...errors, email: 'Por favor completa este campo'})
        console.log(errors)
    }else if(useData.email.length>35){
        setErrors({...errors, email: 'No puede superar los 35 caracteres'})
    }else if(!regex.test(useData.email)){
        setErrors({...errors, email: 'Email invalido'})
        console.log(errors)
    }else{
        setErrors({...errors, email: ''})
    }
    

    //password

    if(!/.*\d+.*/.test(useData.password)){
        setErrors({...errors, password: 'La contraseña debe tener al menos un digito'});
        console.log(errors)
    }else if(useData.password.length>10){
        setErrors({...errors, password: 'No puede superar los 10 caracteres'});
    }else if(useData.password.length<6){
    setErrors({...errors, password: 'No puede ser menor que los 6 caracteres'})
    }else{
        setErrors({...errors, password: ''})
    }
    

};

export default validate;
    