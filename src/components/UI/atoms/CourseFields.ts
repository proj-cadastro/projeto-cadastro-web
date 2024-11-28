import { ProfessorService } from "@/service/Service";
import { FieldConfig } from "../organisms/DynamicForm";

const professoresCadastrados = ProfessorService.listarTodos


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
            { value: "in-person", label: "Presencial" },
            { value: "home-school", label: "EAD" },
            { value: "blended", label: "Híbrido" },
        ],
        required: true,
    },
    {
        id: "professors",
        label: "Professores",
        type: "checkbox",
        options: [],
        required: true,
    },
    {
        id: "coordinator",
        label: "Coordenador",
        type: "select",
        options: [],
        required: true,
    },
];