import React, { useState,useEffect} from 'react'
import {FormLogin} from './styles'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

let validationLogin=yup.object().shape({
  cpf:yup.number("Verifique os dados").required("Campo obrigatório").min(11,"O CPF deve ter 11 dígitos").typeError("Preencha corretamente."),
  senha:yup.string().required("Campo obrigatório").min(8,"A senha deve ter no mínimo 8 dígitos"),
})

export const FormularioLogin = () => {
  const[user,setUser]=useState()
  const[error,setError]=useState("")

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver:yupResolver(validationLogin)
  });
  const onSubmit = data =>ValidarLogin(data.cpf,data.senha)

  function ValidarLogin(cpf,senha){
    const url=`http://localhost:8081/usuario/${cpf}`
    fetch(url)
    .then(resp=>resp.json())
    .then(data=>{
      setUser(data)
      if(data[0].senha==senha){
        window.location.href=`/conta/${data[0].cpf}`
      }else{
        setError("Dados incorretos")
      }
    })
    .catch((e)=>{
      setError("Tente novamente!")
    })
  }

  return (
    <FormLogin onSubmit={handleSubmit(onSubmit)}>
      {error.length>0?<div className='ErroDiv'><h4>{error}</h4></div>:" "}
      <div>
        <label htmlFor="cpf">CPF</label>
        <input type="number" placeholder='Digite seu CPF.Apenas números' name='cpf' {...register('cpf', { maxLength: 11 })}/>
        {errors.cpf && <span>{errors.cpf.message}</span>}
      </div>
      <div>
        <label htmlFor="email">Senha</label>
        <input type="password" placeholder='Digite sua senha' {...register('senha', { required: true })}/>
        {errors.senha && <span>{errors.senha.message}</span>}
      </div>
      <button type='submit' onClick={()=>{ValidarLogin()}}>Acessar</button>
    </FormLogin>
  )
}
