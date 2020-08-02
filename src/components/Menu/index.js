import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="AlmerindoFlix Logo" />
      </Link>
      <Button
        border="true"
        background="black"
        as={Link}
        className="ButtonLink"
        to="/cadastro/video"
      >
        Novo Video
      </Button>
    </nav>
  );
}
