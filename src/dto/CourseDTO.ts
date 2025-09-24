

export default class CourseDTO {
    private nome: string
    private codigo: string
    private sigla: string
    private modelo: string
    private coordenadorId: number



    constructor (nome: string, codigo: string, sigla: string, modelo: string, coordenadorId: number) {
        this.nome = nome
        this.codigo = codigo
        this.sigla = sigla
        this.modelo = modelo
        this.coordenadorId = coordenadorId
    }
}