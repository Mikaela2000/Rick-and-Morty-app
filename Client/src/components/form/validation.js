const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass = /\d/;

const validate = (inputs) => {
    let errors = {}

    if(!regexEmail.test(inputs.email)){
        errors.email = "Invalid email."
    }

    if(!inputs.email){
        errors.email = "Please, enter your email."
    }

    if(inputs.email.length > 35){
        errors.email = "Invalid email, it's too long."
    }

    if(inputs.password.length < 6 || inputs.password.length > 10){
        errors.password = "Password length must be between 6 and 10 characters."
    }

    if(!regexPass.test(inputs.password)){
        errors.password = "Password must contain one number at least."
    }

    return errors
}
export default validate