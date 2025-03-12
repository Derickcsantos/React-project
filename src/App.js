import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';


function App ()
{
  return (
    <div className="App">
      {/* Header */ }
      <header className="header">
        <div className="head" id="navbar">
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

      {/* Banner */ }
      <section id="home" className="banner">
        <div className="container">
          <h2>Projeto utilizando React</h2>
        </div>
      </section>

      {/* Seção Sobre */ }
      <section id="sobre" className="sobre">
        <div className="container containerSobre">
          <div className='conteudoSobre'>
            <h2>Sobre mim</h2>
            <p>Sou estudante de Desenvolvimento de Sistemas com 19 anos, apaixonado por tecnologia e em busca da minha primeira oportunidade como Desenvolvedor Júnior.
              Atualmente, estou me aprofundando em Javascript, Node.js e MySQL, com foco em me tornar um desenvolvedor full-stack.
              Sou proativo, motivado e comprometido com meu desenvolvimento contínuo, buscando sempre aplicar as melhores práticas em tudo o que faço.</p>
          </div>
          <div >
            <img className='imgSobre' src='../img/sobre.png'></img>
          </div>
        </div>
        
      </section>

      {/* Seção de Contato */ }
      <section id="contato" className="contato">
        <div className="container contatoContainer">
          <h2>Entre em Contato</h2>
          <Form /> {/* Chama o componente Form para o envio de mensagens */ }
        </div>
      </section>

      {/* Footer */ }
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 React Landing Page</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
