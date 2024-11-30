"use client"

import React from 'react'
import DynamicForm, { FieldConfig } from '@/components/UI/organisms/DynamicForm'
import TitleRegister from '@/components/UI/atoms/TitleRegister';

import { courseFields } from '@/components/UI/atoms/CourseFields';
import { CourseService } from '@/service/Service';
import useProfessors from '@/service/UtilitarioProfessorService';

export default function RegisterCoursesComponentizado() {
  const { professors } = useProfessors();

  const updatedFields = courseFields.map(field => {


    if (field.id === 'professors' || field.id === 'coordinator') {
      return {
        ...field,
        options: professors.map(option => ({
          ...option, // Inclui { value: professor, label: name, key: uniqueKey }
        })),
      };
    }
    return field;
  });
  
  
  


  return (
    <DynamicForm
      title={<TitleRegister text='Cadastro de Cursos' subText='Fatec Votorantim' />}
      fields={updatedFields}
      onSubmit={CourseService.criar}
    />
  )
}