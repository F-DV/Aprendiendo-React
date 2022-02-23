import React,{useState, Fragment} from 'react';

const  Lista = () => {

    const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5])      //Array, arrayNumero es el numero com tal, serNumero es para modificarlo, el array puede ser vacio o llevar datos

    const [numero, setNumero] = useState(5)

    const agregarElemento = () => {                                  //Funcion de flecha
        
        setNumero(numero + 1)                                        //Sumamos 1 al "numero"(segundo array) cada vez que llamamos esta funcion
        console.log('Click')                                        //imprimimos en la consola
        setArrayNumero([                                            //mostramos  los numeros del primer array
            ...arrayNumero,                                         //numeros se setArray, los ... nos permite concatenar otro array
            numero                                                  //array concatenado
        ])
    }

    return ( 
        <Fragment>
              <h2>Lista</h2>
              <button onClick = {agregarElemento}>Agregar</button>
        
        {
            arrayNumero.map((item, index) => 
                <p key= {index}> {item} - {index}</p>
            )
        }
     
        </Fragment>
    );
}
 
export default Lista;