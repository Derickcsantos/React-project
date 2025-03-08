import React, { useState } from 'react';
import './App.css';

function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi!');

  if (isSent) {
    return <h1>Your message is on its way!</h1>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        // Removido a chamada para `sendMessage`
        console.log(message); // Apenas para fins de teste, mostramos a mensagem no console
      }}
    >
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container" id="navbar">
          <h1>React</h1>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <section id="home" className="banner">
        <div className="container">
          <h2>Projeto utilizando React</h2>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="sobre">
        <div className="container">
          <h2>Sobre o Projeto</h2>
          <p>Este projeto é uma página de exemplo para aprender React e suas funcionalidades!</p>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="contato">
        <div className="container">
          <h2>Entre em Contato</h2>
          <Form /> {/* Chama o componente Form para o envio de mensagens */}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Minha Landing Page. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
