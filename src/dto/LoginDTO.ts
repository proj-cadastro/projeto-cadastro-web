export default class LoginDTO {
    email: String
    senha: String

    constructor (email: String, senha: String) {
        this.email = email;
        this.senha = senha;
    }

}