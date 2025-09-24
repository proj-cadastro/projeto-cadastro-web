export default class UserDTO {
    nome: String
    email: String
    senha: String

    constructor(nome: String, email: String, senha: String) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}