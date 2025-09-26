export default class CourseResponseDTO {
    id: number;
    nome: string;
    codigo: string;
    sigla: string;
    modelo: string;
    coordenadorId: number;

    constructor(
        id: number,
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
        this.id = id;
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
    public getId(): Partial<number | undefined> {
        return this.id;
    }

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
