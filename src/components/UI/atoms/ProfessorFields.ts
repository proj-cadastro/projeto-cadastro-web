//variável utilizada para mapear os inputs e seus tipos no formulário
import { FieldConfig } from "../organisms/DynamicForm";
//transformar cursosCadastrados em dicionário
// -> label: value
// -> DSM: _ID
// -> COO: _ID
// -> ...




export const    professorFields: FieldConfig[] = [
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
        id: "titration",
        label: "Titulação",
        type: "select",
        options: [
            { value: "specialist", label: "Especialista" },
            { value: "master", label: "Mestre" },
            { value: "doctor", label: "Doutor" },
        ],
        required: true,
    },
    {
        id: "unitId",
        label: "Código UE",
        type: "select",
        options: [
            { value: "301", label: "301 - Votorantim" },
            { value: "123", label: "123 - Sorocaba" },
            { value: "900", label: "900 - Tatuí" },
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
        id: "lattes",
        label: "lattes",
        type: "text",
        placeholder: "lattes",
        required: true,
    },
    {
        id: "notes",
        label: "Observações",
        type: "text",
        placeholder: "Observações",
    },

    {
        id: "activityStatus",
        label: "Status de Atividade",
        type: "select",
        options: [
            { value: "active", label: "Ativo" },
            { value: "inactive", label: "Desativado" },
            { value: "pending", label: "Pendente" },
            { value: "on-leave", label: "Saindo" }
        ],
        required: true,
    },
    {
        id: "coursesId",
        label: "Cursos Relacionados",
        type: "checkbox",
        options: [],
        required: true,
    },
];

