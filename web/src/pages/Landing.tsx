import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

import '../styles/pages/landing.css'

import logoImg from '../images/logo.svg'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>

          <div className="location">
            <strong>Canoas</strong>
            <span>Rio Grande do Sul</span>
          </div>
          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </Link>
        </main>
      </div>
    </div>
  );
}

export default App;
