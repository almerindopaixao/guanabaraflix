import React from 'react';
import { Link } from 'react-router-dom';

import './Page404.css';

export default function Page404() {
  return (
    <div className="main erro">
      <h1>Página não encontrada</h1>
      <p>
        Não conseguimos encontrar a página que vocês esta procurando, porfavor
        click na logo ser redirecionado para a home
      </p>
      <div className="ir-home">
        <Link to="/">Voltar para home</Link>
      </div>
    </div>
  );
}
