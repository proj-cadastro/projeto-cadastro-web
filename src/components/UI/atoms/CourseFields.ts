import { FieldConfig } from "../organisms/DynamicForm";

export const courseFields: FieldConfig[] = [
    {
        id: "name",
        label: "Nome do Curso",
        type: "text",
        placeholder: "Digite o nome do curso",
        required: true,
    },
    {
        id: "codCourse",
        label: "Código do Curso",
        type: "text",
        placeholder: "Digite o código do curso",
        required: true,
    },
    {
        id: "subjects",
        label: "Disciplinas",
        type: "select",
        options: [
            { value: "Matemática", label: "Matemática" },
            { value: "Física", label: "Física" },
            { value: "Química", label: "Química" },
        ],
        required: false, // Opcional
    },
    {
        id: "initialism",
        label: "Sigla",
        type: "text",
        placeholder: "Exemplo: ENG",
        required: true,
    },
    {
        id: "model",
        label: "Modelo do Curso",
        type: "select",
        options: [
            { value: "Presencial", label: "Presencial" },
            { value: "EAD", label: "EAD" },
            { value: "Híbrido", label: "Híbrido" },
        ],
        required: true,
    },
    {
        id: "professors",
        label: "Professores",
        type: "select",
        options: [
            { value: "Professor A", label: "Professor A" },
            { value: "Professor B", label: "Professor B" },
            { value: "Professor C", label: "Professor C" },
        ],
        required: true,
    },
    {
        id: "coordinator",
        label: "Coordenador",
        type: "select",
        options: [
            { value: "Professor A", label: "Professor A" },
            { value: "Professor B", label: "Professor B" },
            { value: "Professor C", label: "Professor C" },
        ],
        required: true,
    },
];