import React from 'react'
import DynamicForm from '@/components/UI/organisms/DynamicForm'
import { IProfessor } from '@/interfaces/IProfessors';
import TitleRegister from '@/components/UI/atoms/TitleRegister';
import { professorFields } from '@/components/UI/atoms/ProfessorFields';

export default function editProfessors() {

    const putProfessor = (data: Partial<IProfessor>) => {
        console.log("Professor Atualizado", data)
    }

    const retornaProfessor = () => {
        //fazer uma funcao que retorne o usuário correspondente ao id clicado.
        //ou chamar do contexto.
        return {}
    }


    return (
        <DynamicForm
            title={<TitleRegister text='Edicao de Professores' subText='Fatec Votorantim' />}
            fields={professorFields}
            onSubmit={putProfessor}
            initialValues={retornaProfessor}
        />
    )
}