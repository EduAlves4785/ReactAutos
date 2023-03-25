import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import {Container} from './styles.js'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

let validationRegister=yup.object().shape({
  nome:yup.string("Nome inválido").required("Campo obrigatório"),
  marca:yup.string("Marca inválida").required("Campo obrigatório"),
  ano:yup.number("Ano inválido").required("Campo obrigatório").typeError('Insira os dados corretamente'),
  quilometragem:yup.number("kM inválida").required("Campo obrigatório"),
  preco:yup.number("Preço inválido").required("Campo obrigatório").typeError('Insira os dados corretamente'),
  imagem: yup.mixed().required("Preencha todos os campos!")
})

export const FormAnuncio = () => {
  const[message,setMessage]=useState("")

  const{cpf}=useParams()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver:yupResolver(validationRegister)
  });

  const onSubmit=async data=>{
    const formData=new FormData()
    formData.append('cpf',cpf),
    formData.append('nome',data.nome),
    formData.append('marca',data.marca),
    formData.append('ano',data.ano),
    formData.append('quilometragem',data.quilometragem),
    formData.append('preco',data.preco),
    formData.append('imagem',data.imagem[0])
    const response = await fetch('http://localhost:8081/criaranuncio', {
      method: 'POST',
      body:formData
    }).then((resp)=>{
      setMessage("Anuncio criado!")
      resp.json()
    }).catch((e)=>{console.log("Houve um erro: "+e)})
  }

  return (
    <Container>
      {message.length>0?<div className='ErroDiv'><h4>{message}</h4></div>:" "}
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div>
          <label htmlFor="imagem">Imagem do veículo</label>
          <input type="file" name='imagem' {...register('imagem')}/>
          {errors.imagem && <span>{errors.imagem.message}</span>}
        </div>
        <div>
          <label htmlFor="nome">Nome do veículo</label>
          <input type="text" placeholder='Insira o nome do veículo' name='nome' {...register('nome')}/>
          {errors.nome && <span>{errors.nome.message}</span>}
        </div>
        <div>
          <label htmlFor="marca">Marca</label>
          <select name='marca' {...register("marca")}>
            <option value="">Selecione uma marca</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="citroen">Citroen</option>
                <option value="fiat">Fiat</option>
                <option value="ford">Ford</option>
                <option value="honda">Honda</option>
                <option value="hyundai">Hyundai</option>
                <option value="jac">JAC Motors</option>
                <option value="jeep">Jeep</option>
                <option value="kia">Kia</option>
                <option value="landrover">Land Rover</option>
                <option value="lexus">Lexus</option>
                <option value="mercedes">Mercedes-Benz</option>
                <option value="mitsubishi">Mitsubishi</option>
                <option value="nissan">Nissan</option>
                <option value="peugeot">Peugeot</option>
                <option value="porsche">Porsche</option>
                <option value="renault">Renault</option>
                <option value="subaru">Subaru</option>
                <option value="suzuki">Suzuki</option>
                <option value="troller">Troller</option>
                <option value="toyota">Toyota</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="volvo">Volvo</option>
                <option value="chery">Chery</option>
                <option value="byd">BYD</option>
                <option value="jaguar">Jaguar</option>
                <option value="ferrari">Ferrari</option>
                <option value="maserati">Maserati</option>
          </select>
          {errors.marca && <span>{errors.marca.message}</span>}
        </div>
        <div>
          <label htmlFor="ano">Ano do veículo</label>
          <input type="number" placeholder='Insira o ano do veículo' name='ano' {...register('ano')}/>
          {errors.ano && <span>{errors.ano.message}</span>}
        </div>
        <div>
          <label htmlFor="quilometragem">Quilometragem do veículo</label>
          <input type="number" placeholder='Insira a quilometragem do veículo' name='quilometragem' {...register('quilometragem')}/>
          {errors.quilometragem && <span>{errors.quilometragem.message}</span>}
        </div>
        <div>
          <label htmlFor="preco">Valor a ser anunciado</label>
          <input type="number" placeholder='Insira o valor' name='preco' {...register('preco')}/>
          {errors.preco && <span>{errors.preco.message}</span>}
        </div>
        <button type='submit'>Anunciar</button>
      </form>
    </Container>
  )
}
