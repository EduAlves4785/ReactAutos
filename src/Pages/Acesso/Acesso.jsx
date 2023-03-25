import React, { useState } from 'react'
import { FormularioCadastro } from '../../components/FormCadastro/FormCadastro'
import { FormularioLogin } from '../../components/FormLogin/FormLogin'
import {FormContainer,BotaoAlterar,BotaoLogin} from './styles'
export const Acesso = () => {
  const[forms,setForms]=useState(<FormularioLogin/>)
  const[isValid,setIsValid]=useState(true)

  return (
    <FormContainer>
      {forms}
      <BotaoAlterar style={{display:isValid?'block':'none'}} onClick={()=>{setForms(<FormularioCadastro/>),setIsValid(false)}}>Ainda não tem conta?</BotaoAlterar>
      <BotaoLogin style={{display:isValid?'none':'block'}} onClick={()=>{setForms(<FormularioLogin/>),setIsValid(true)}}>Login</BotaoLogin>
    </FormContainer>
  )
}
