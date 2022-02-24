import React, { Fragment } from 'react'
import Avatar from './Avatar'

const Comentario = ({sujeto}) => {
    return (  
        <Fragment>
            <h1>Comentarios</h1>
            <hr/>
            <div className="media">
                {/*<img src={sujeto.UrlImagen} alt="" className='mr-3'/> */}
                <Avatar UrlImagen={sujeto.UrlImagen} /> 
                <div className="media-body">
                    <h5 className="mt-0">{sujeto.nombre}</h5>
                    {sujeto.texto}
                </div>
            </div>
        </Fragment>
        
    );
}
 
export default Comentario;