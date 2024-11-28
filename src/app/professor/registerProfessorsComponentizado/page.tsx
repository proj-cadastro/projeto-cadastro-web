"use client"

import React from 'react'
import DynamicForm, { FieldConfig } from '@/components/UI/organisms/DynamicForm'
import TitleRegister from '@/components/UI/atoms/TitleRegister';


import { professorFields } from '@/components/UI/atoms/ProfessorFields';
import { ProfessorService } from '@/service/Service';
import useCourses from '@/service/UtilitarioCursoService';

export default function RegisterProfessorsComponentizado() {
  const { courses } = useCourses(); 




  const updatedFields = professorFields.map(field => {
    if (field.id === 'coursesId') {
      return {
        ...field,
        options: courses, // Passando os cursos carregados
      };
    }
    return field;
  });



  return (
    <DynamicForm
      title={<TitleRegister text="Cadastro de Professor" subText='Fatec Votorantim' />}
      fields={updatedFields}
      onSubmit={ProfessorService.criar}

    />

  )
}