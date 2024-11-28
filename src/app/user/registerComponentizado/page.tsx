"use client"

import { registerUserFields } from "@/components/UI/atoms/RegisterFields"
import TitleRegister from "@/components/UI/atoms/TitleRegister"
import DynamicForm from "@/components/UI/organisms/DynamicForm"
import { IUser } from "@/interfaces/IUser"
import { UserService } from "@/service/Service"


export default function registerComponentizado() {

    const postUser = (data: Partial<IUser>) => {
        
        //pode ser utilizado esse método para validações...
  
      }

    return(
        <DynamicForm
        title={<TitleRegister text="Cadastro de Usuário" subText='Fatec Votorantim' />}
        fields={registerUserFields}
        onSubmit={UserService.criar}

        />

    )
}