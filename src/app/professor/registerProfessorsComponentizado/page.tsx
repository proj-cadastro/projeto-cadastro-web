"use client"

import React from 'react'
import DynamicForm, { FieldConfig } from '@/components/UI/organisms/DynamicForm'
import { IProfessor } from '@/interfaces/IProfessors';
import TitleRegister from '@/components/UI/atoms/TitleRegister';

import { professorFields } from '@/components/UI/atoms/ProfessorFields';

export default function RegisterProfessorsComponentizado() {

    const postProfessor = (data: Partial<IProfessor>) => {

        console.log("Professor salvo", data)

    }

    return (
        <DynamicForm
            title={<TitleRegister text="Cadastro de Professor" subText='Fatec Votorantim' />}
            fields={professorFields}
            onSubmit={postProfessor}

        />

    )
}