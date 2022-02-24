import React, {Fragment} from 'react';

import { useForm } from 'react-hook-form'
/**
 * La gracia de trabajar con react-Formhook , es que 
 * podemos validar el formulario de una forma muy sencilla
 * 1) Lo primero es importarlo : import {useForm} from 'react-hook.form'
 * 2) onSubmit={handleSubmit(onSubmit)} : con esta linea estamos evaluando cada uno de los inputs
 *  Nota: para poder evaluarlños, deben de tener el name
 * 3) El register , nos permite evaluar el dato
 */

const FormHook = () => {

const {register, errors, handleSubmit} = useForm();

    //cada vez que presionemos el boton leemos todos los inputs
    const onSubmit =(data,e) => {
        console.log(data)
        e.target.reset()
    }

    return ( 
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name = "titulo"
                    className='form-control my-2'                                       //margin arriba y abajo de 2
                    
                    {...register("titulo", { required: true })}
                />

            {/*{errors.exampleRequired && <span>This field is required</span>}*/}   
                <button className='btn btn-primary'>Enviar</button>
            </form>
        </Fragment>
    );
}
 
export default FormHook;