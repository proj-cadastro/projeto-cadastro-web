// {
//   "nome": "string",
//   "email": "string",
//   "titulacao": "DOUTOR",
//   "idUnidade": "string",
//   "referencia": "string",
//   "lattes": "string",
//   "statusAtividade": "ATIVO",
//   "observacoes": "string"
// }

export default class ProfessorDTO {
    private nome: string;
    private email: string;
    private titulacao: string;
    private idUnidade: string;
    private referencia: string;
    private lattes: string;
    private statusAtividade: string;
    private observacoes: string;

    constructor(
        nome: string,
        email: string,
        titulacao: string,
        idUnidade: string,
        referencia: string,
        lattes: string,
        statusAtividade: string,
        observacoes: string
    ) {
        this.nome = nome;
        this.email = email;
        this.titulacao = this.translateSelectValue(titulacao);
        this.idUnidade = idUnidade;
        this.referencia = referencia;
        this.lattes = lattes;
        this.statusAtividade = this.translateSelectValue(statusAtividade);
        this.observacoes = observacoes;
    }

    private translateSelectValue = (word: string): string => {
        const selects = [
            // status atividade
            { key: "active", value: "ATIVO" },
            { key: "inactive", value: "NAO_ATIVO" },
            { key: "away", value: "AFASTADO" },
            { key: "license", value: "LICENCA" },

            // titulacao
            { key: "specialist", value: "ESPECIALISTA" },
            { key: "master", value: "MESTRE" },
            { key: "doctor", value: "DOUTOR" },
        ];

        const match = selects.find((s) => s.key === word);
        return match ? match.value : word;
    };

    // GETTERS
    public getNome(): string {
        return this.nome;
    }

    public getEmail(): string {
        return this.email;
    }

    public getTitulacao(): string {
        return this.titulacao;
    }

    public getIdUnidade(): string {
        return this.idUnidade;
    }

    public getReferencia(): string {
        return this.referencia;
    }

    public getLattes(): string {
        return this.lattes;
    }

    public getStatusAtividade(): string {
        return this.statusAtividade;
    }

    public getObservacoes(): string {
        return this.observacoes;
    }
}
