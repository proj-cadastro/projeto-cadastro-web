import React from 'react'
import DynamicForm, { FieldConfig } from '@/components/UI/organisms/DynamicForm'
import { ICourse } from '@/interfaces/ICourses';
import TitleRegister from '@/components/UI/atoms/TitleRegister';

import { courseFields } from '@/components/UI/atoms/CourseFields';

export default function editCourses() {


    const putCourse = (data: Partial<ICourse>) => {
        console.log("Curso atualizado", data)
    }

    const retornaCourse = () => {
        //fazer uma funcao que retorne o usuário correspondente ao id clicado.
        //ou chamar do contexto.
        return {}
    }


    return (
        <DynamicForm
            title={<TitleRegister text='Edicao de Cursos' subText='Fatec Votorantim' />}
            fields={courseFields}
            onSubmit={putCourse}
            initialValues={retornaCourse}
        />
    )
}