/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

import icon_site from "/assets/icon3.png";
import barra_lateral from "/assets/icon4.svg";

import "../styles/ui/header.css";
import Sidebar from "./Sidebar";

export default function Header({
  mostrarSubMenu,
  mostrarTiposReciclagem,
  voltarAoCorpo,
  subMenu,
  home,
}) {
  const [barraLateral, ativarBarraLateral] = useState(false);

  const mostrarSidebar = () => {
    ativarBarraLateral(!barraLateral);
  };

  return (
    <header>
      <Link to="/" className="divnome">
        <img style={{ width: "50px" }} src={icon_site} />
        <div className="nome">Nome do Site</div>
      </Link>

      <Link to="/aprenda" className="link-aprenda" onClick={home}>
        Aprenda a Reciclar
      </Link>

      <div>
        <img
          className="filter-white"
          style={{ width: "50px" }}
          src={barra_lateral}
          onClick={mostrarSidebar}
        />
      </div>

      <Sidebar
        barraLateral={barraLateral}
        mostrarSidebar={mostrarSidebar}
        mostrarSubMenu={mostrarSubMenu}
        mostrarTiposReciclagem={mostrarTiposReciclagem}
        voltarAoCorpo={voltarAoCorpo}
        subMenu={subMenu}
      />
    </header>
  );
}
