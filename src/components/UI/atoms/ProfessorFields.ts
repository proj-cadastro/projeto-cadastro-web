//variável utilizada para mapear os inputs e seus tipos no formulário

import { FieldConfig } from "../organisms/DynamicForm";

export const professorFields: FieldConfig[] = [
    {
        id: "name",
        label: "Nome",
        type: "text",
        placeholder: "Nome Completo",
        required: true,
    },
    {
        id: "email",
        label: "E-mail",
        type: "text",
        placeholder: "Email",
        required: true,
    },
    {
        id: "titulacao",
        label: "Titulação",
        type: "select",
        options: [
            { value: "Especialista", label: "Especialista" },
            { value: "Mestre", label: "Mestre" },
            { value: "Doutor", label: "Doutor" },
        ],
        required: true,
    },
    {
        id: "registerNumber",
        label: "Número de Matrícula",
        type: "number",
        placeholder: "N° da Matrícula",
        required: true,
    },
    {
        id: "unidadeID",
        label: "Código UE",
        type: "select",
        options: [
            { value: "301 - Votorantim", label: "301 - Votorantim" },
            { value: "123 - Sorocaba", label: "123 - Sorocaba" },
            { value: "900 - Tatuí", label: "900 - Tatuí" },
        ],
        required: true,
    },

    {
        id: "reference",
        label: "Referência",
        type: "text",
        placeholder: "Ex: PES I - A",
        required: true,
    },
    {
        id: "notes",
        label: "Observações",
        type: "textarea",
        placeholder: "Observações",
    },
    {
        id: "activityStatus",
        label: "Status de Atividade",
        type: "select",
        options: [
            { value: "Ativo", label: "Ativo" },
            { value: "Desativado", label: "Desativado" },
        ],
        required: true,
    },
];