const validate = (email, password) => {
    const emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordValidate = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if (!emailValidate) return "Please enter a valid Email-ID";
    if (!passwordValidate) {
        return "Password must contain: 8+ characters, uppercase, lowercase, number, and special character (#?!@$%^&*-)";
    }

    return null;
}

export default validate;