import React, {Fragment} from 'react';

const  accion = () => {

    const saludo = "Hola"
    const temperatura = 19;

    return (  
        <Fragment> {saludo} ¿como estan?
                <h2>Frio o calor?</h2>    
                <h4>
                    
                    {
                        temperatura > 20 ? 'calor' : 'frio'
                    }
                    </h4>                
        </Fragment>

    );
}
 
export default accion;