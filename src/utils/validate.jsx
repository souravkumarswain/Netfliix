export const validateData = (email,password) => {
    let validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    let validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    if(!validateEmail){return 'Email id is not in valid format.'}
    if(!validatePassword){return 'Enter valid password.'}
    return null
}