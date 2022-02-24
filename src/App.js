import React from 'react';
//import Contador from './components/Contador';
//import Jsx from './components/Jsx';
//import Lista from './components/Lista';
//import Formulario from './components/Formulario';
import FormHook from './components/FormHook';
import EjemploUno from './components/EjemploUno';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';

function App() {

  const sujeto = {
    nombre: 'Juanito',
    UrlImagen: 'https://via.placeholder.com/64',
    texto: 'Esto lo escribio juanito un dia que tenia ganas de escribir'
  }
  return (
    //ClassName para ingresar elementos Boostrap css, mt-5 : magin top, 
    <div className="container mt-5">         
      {/*<FormHook/>*/}
      {/*<EjemploUno/>*/}
      <h2>Components</h2>
      <Saludo persona="Juanito"/>
      <Saludo persona="Felipe"/> 
      <Saludo persona="Catalina"/>
      <Comentario sujeto={sujeto} /> 
      <Comentario sujeto={sujeto} /> 

    </div>
  );
}

export default App;
