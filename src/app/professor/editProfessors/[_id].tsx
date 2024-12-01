"use client";

import React from "react";
import DynamicForm from "@/components/UI/organisms/DynamicForm";
import { IProfessor } from "@/interfaces/IProfessors";
import TitleRegister from "@/components/UI/atoms/TitleRegister";
import { professorFields } from "@/components/UI/atoms/ProfessorFields";
import { useRouter } from "next/router";

export default function EditProfessors() {

    const router = useRouter()
    const {_id} = router.query

  const putProfessor = (data: Partial<IProfessor>) => {
    console.log(data)
  };

  

  const retornaProfessor = () => {
    console.log("Professor Atualizado", _id);
    return {};
  };

  return (
    <DynamicForm
      title={
        <TitleRegister text="Edicao de Professores" subText="Fatec Votorantim" />
      }
      fields={professorFields}
      onSubmit={putProfessor} // Função de atualização
      initialValues={retornaProfessor()} // Chamando a função para valores iniciais
    />
  );
}
