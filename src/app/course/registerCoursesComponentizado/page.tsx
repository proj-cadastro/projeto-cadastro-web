"use client"

import React from 'react'
import DynamicForm, { FieldConfig } from '@/components/UI/organisms/DynamicForm'
import TitleRegister from '@/components/UI/atoms/TitleRegister';

import { courseFields } from '@/components/UI/atoms/CourseFields';
import { CourseService } from '@/service/Service';
import useProfessors from '@/service/UtilitarioProfessorService';

export default function RegisterCoursesComponentizado(){
    const { professors } = useProfessors(); 

    const updatedFields = courseFields.map(field => {
        switch (field.id) {
          case 'professores':
          case 'coordenador': // Ambos recebem a mesma lista de professores
            return {
              ...field,
              options: professors,
            };
          default:
            return field; // Mantém os outros campos inalterados
        }
      });
      

    return(
        <DynamicForm
            title = {<TitleRegister text='Cadastro de Cursos'subText='Fatec Votorantim'/>}
            fields={updatedFields}
            onSubmit={CourseService.criar}
        />
    )
}