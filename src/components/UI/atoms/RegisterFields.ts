import { FieldConfig } from "../organisms/DynamicForm";

export const registerUserFields: FieldConfig[] = [
    {
        id: "username",
        label: "Nome",
        type: "text",
        placeholder: "Nome Completo",
        required: true,
    },
    {
        id: "email",
        label: "E-mail",
        type: "text",
        placeholder: "E-mail",
        required: true,
    },
    {
        id: "password",
        label: "Senha",
        type: "text",
        placeholder: "Senha",
        required: true,
    },
    
    
];