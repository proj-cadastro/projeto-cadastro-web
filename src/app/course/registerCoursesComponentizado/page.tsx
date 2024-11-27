"use client"

import React from 'react'
import DynamicForm, { FieldConfig } from '@/components/UI/organisms/DynamicForm'
import { ICourse } from '@/interfaces/ICourses';
import TitleRegister from '@/components/UI/atoms/TitleRegister';

import { courseFields } from '@/components/UI/atoms/CourseFields';

export default function RegisterCoursesComponentizado(){

    const postCourse = (data: Partial<ICourse>) => {
        console.log("Curso cadastrado", data)
    }

    return(
        <DynamicForm
            title = {<TitleRegister text='Cadastro de Cursos'subText='Fatec Votorantim'/>}
            fields={courseFields}
            onSubmit={postCourse}
        />
    )
}