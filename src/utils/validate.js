export const checkValidData = (email, password)=>{
    const isEmailValid = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid && !isPasswordValid) return "Email and Password both are not valid";

    if(!isEmailValid) return "Email is not valid";

    if(!isPasswordValid) return "Password is not valid";

    return null;
}