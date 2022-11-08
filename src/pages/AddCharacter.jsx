import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/AddCharacters.scss'

const AddCharacter = () => {

    const {register, handleSubmit} = useForm();

    const envioFormulario = (datos) => {
        const formData = new formData();
        formData.append("name", datos.name);
        formData.append("email", datos.email);
        formData.append("password", datos.password);
        formData.append("imagen", datos.imagen[0]);
    }

  return (
    <form className='form' onSubmit={handleSubmit(envioFormulario)}>
        <label>Name
        <input type="text" {...register("name", {required: true})}/>
        </label>
        <label>Email
        <input type="email" {...register("email", {required: true})}/>
        </label>
        <label>Password
        <input type="password" {...register("password", {required: true})}/>
        </label>
        <label>Foto de perfil
        <input className='select' type="file" {...register("imagen")}/>
        </label>
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default AddCharacter