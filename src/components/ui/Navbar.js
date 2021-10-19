import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/"> Inicio </Link>
        <Link to="/matches"> Partido </Link>
        <Link to="/vs"> Partidos </Link>
        <Link to="/create"> Equipos </Link>
        <Link to="/information"> Información </Link>
        <div className="animation start-home"></div>
      </nav>
    </>
  );
};
