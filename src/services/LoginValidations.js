import Validations from "./validations";
export default class LoginValidations {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    checkValidations() {
        let  errors = [];
        // email validations
        if (!Validations.checkEmail(this.email)) {
            errors['email'] = 'Invalid email';
        }

        // password validation
        if (!Validations.minLength(this.password, 6)) {
            errors['password'] = 'Password should be 6 characters';
        }
        return errors;
    }
}