import React, { useState } from 'react'
import {FormCadastro} from './styles'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validationUser=yup.object().shape({
  cpf:yup.number("Verifique os dados").required("Campo obrigatório").min(11,"O CPF deve ter 11 dígitos").typeError("Digite um CPF válido"),
  email:yup.string().email("e-mail inválido").required("Campo obrigatório").max(100,"Este e-mail é inválido"),
  senha:yup.string().required("Campo obrigatório").min(8,"A senha deve ter no mínimo 8 dígitos"),
  nome:yup.string().required("Campo obrigatório"),
  nascimento:yup.string().required("Campo obrigatório"),
  numero:yup.number("Verifique os dados").required("Campo obrigatório").typeError("Número inválido"),
  estado:yup.string().required("Campo obrigatório"),
  cidade:yup.string().required("Campo obrigatório"),
}).required()

export const FormularioCadastro = () => {

  const{register,handleSubmit, formState:{ errors }}=useForm({
    resolver:yupResolver(validationUser)
  })

  const onSubmit=data=>cadastro(data)

  function cadastro(data){

    const url="http://localhost:8081/cadastrar"
    setMessage("Usuário cadastrado! Clique no botão de login.")
    fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
    },
      body:JSON.stringify({
          cpf:data.cpf,
          email:data.email,
          senha:data.senha,
          nome:data.nome,
          nascimento:data.nascimento,
          numero:data.numero,
          estado:data.estado,
          cidade:data.cidade
      }),
    }).then((resp)=>{resp.json()})
      .catch((e)=>{
        console.log("Houve um erro: "+e)
        return
      })
  }

  const[message,setMessage]=useState("")
  const[user,setUser]=useState({})

  return (
    <FormCadastro onSubmit={handleSubmit(onSubmit)}>
      <h4>{message}</h4>
      <div>
        <label htmlFor="cpf">CPF</label>
        <input type="number" placeholder='Digite seu CPF.Apenas números' name='cpf' {...register('cpf', { maxLength: 11 })}/>
        {errors.cpf && <span>{errors.cpf.message}</span>}
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="email" placeholder='Digite seu e-mail' name='email' {...register("email")}/>
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input type="password" placeholder='Digite sua senha' name='senha' {...register("senha")}/>
        {errors.senha && <span>{errors.senha.message}</span>}
      </div>
      <div>
        <label htmlFor="nome">Nome</label>
        <input type="text" placeholder='Digite seu nome completo' name='nome' {...register("nome")}/>
        {errors.nome && <span>{errors.nome.message}</span>}
      </div>
      <div>
        <label htmlFor="nascimento">Nascimento</label>
        <input type="date" name='nascimento' {...register("nascimento")}/>
        {errors.nascimento && <span>{errors.nascimento.message}</span>}
      </div>
      <div>
        <label htmlFor="numero">Número de contato</label>
        <input type="text" placeholder='Digite seu número de contato' name='numero' {...register("numero")}/>
        {errors.numero && <span>{errors.numero.message}</span>}
      </div>
      <div>
        <label htmlFor="estado">Estado</label>
        <select name="estado" {...register("estado")}>
          <option value="">Selecione</option>
          <option value="AC" name="Acre">Acre</option>
          <option value="AL" name="Alagoas">Alagoas</option>
          <option value="AP" name="Amapá">Amapá</option>
          <option value="AM" name="Amazonas">Amazonas</option>
          <option value="BA" name="Bahia">Bahia</option>
          <option value="CE" name="Ceará">Ceará</option>
          <option value="DF" name="Distrito Federal">Distrito Federal</option>
          <option value="ES" name="Espirito Santo">Espirito Santo</option>
          <option value="GO" name="Goiás">Goiás</option>
          <option value="MA" name="Maranhão">Maranhão</option>
          <option value="MS" name="Mato Grosso do Sul">Mato Grosso do Sul</option>
          <option value="MT" name="Mato Grosso">Mato Grosso</option>
          <option value="MG" name="Minas Gerais">Minas Gerais</option>
          <option value="PA" name="Pará">Pará</option>
          <option value="PB" name="Paraíba">Paraíba</option>
          <option value="PR" name="Paraná">Paraná</option>
          <option value="PE" name="Pernambuco">Pernambuco</option>
          <option value="PI" name="Piauí">Piauí</option>
          <option value="RJ" name="Rio de Janeiro">Rio de Janeiro</option>
          <option value="RN" name="Rio Grande do Norte">Rio Grande do Norte</option>
          <option value="RS" name="Rio Grande do Sul">Rio Grande do Sul</option>
          <option value="RO" name="Rondônia">Rondônia</option>
          <option value="RR" name="Roraima">Roraima</option>
          <option value="SC" name="Santa Catarina">Santa Catarina</option>
          <option value="SP" name="São Paulo">São Paulo</option>
          <option value="SE" name="Sergipe">Sergipe</option>
          <option value="TO" name="Tocantins">Tocantins</option>
        </select>
        {errors.estado && <span>{errors.estado.message}</span>}
      </div>
      <div>
        <label htmlFor="cidade">Cidade</label>
        <input type="text" placeholder='Cidade onde reside' name='cidade' {...register("cidade")}/>
        {errors.cidade && <span>{errors.cidade.message}</span>}
      </div>
      <div>
        <button type='submit'>Cadastrar</button>
      </div>
    </FormCadastro>
  )
}
