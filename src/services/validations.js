export default class Validations {
    static checkEmail (email) {
        if (
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(
                email,
                )
            ) {
    return (true)
  }
    return (false)
    }

    static minLength (password, minLength) {
        if (password.length < minLength) {
            return false;
        }
        return true;
    }
}