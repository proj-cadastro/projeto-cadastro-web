export default class CourseRequestDTO {
     nome: string;
     codigo: string;
     sigla: string;
     modelo: string;
     coordenadorId: number;

    constructor(
        nome: string,
        codigo: string,
        sigla: string,
        modelo: string,
        coordenadorId: number,
    ) {
        this.nome = nome;
        this.codigo = codigo;
        this.sigla = sigla;
        this.modelo = this.translateSelectValue(modelo);
        this.coordenadorId = coordenadorId;
    }

    private translateSelectValue = (word: string): string => {
        const selects = [
            { key: "in-person", value: "PRESENCIAL" },
            { key: "home-school", value: "EAD" },
            { key: "blended", value: "HIBRIDO" },
        ];

        const match = selects.find((s) => s.key === word);
        return match ? match.value : word;
    };

    // -------- Getters --------
    public getNome(): string {
        return this.nome;
    }

    public getCodigo(): string {
        return this.codigo;
    }

    public getSigla(): string {
        return this.sigla;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getCoordenadorId(): number {
        return this.coordenadorId;
    }
}
