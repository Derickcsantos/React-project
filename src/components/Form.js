import React, { useState } from 'react';

function Form ()
{
  const [ isSent, setIsSent ] = useState( false );
  const [ message, setMessage ] = useState( 'Escreva algo aqui' );

  if ( isSent )
  {
    return <h1>Mensagem enviada!!!</h1>;
  }

  return (
    <form
      onSubmit={ ( e ) =>
      {
        e.preventDefault();
        setIsSent( true );
        // Removido a chamada para `sendMessage`
        console.log( message ); // Apenas para fins de teste, mostramos a mensagem no console
      } }
    >
      <input type='text' placeholder='Digite seu nome'></input>
      <input type='email' placeholder='Digite seu email'></input>
      <textarea
        placeholder="Digite algo aqui"
        value={ message }
        onChange={ ( e ) => setMessage( e.target.value ) }
      />
      <button className='enviarFormulario' type="submit">Enviar</button>
    </form>
  );
}

export default Form;