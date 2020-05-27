import React, { Fragment } from "react";
import "./Main.css";
import "./responsive.css";
import logoblanco from "../img/logoblanco.png";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className="header">
      <header>
        <div className="header-top-area headertop">
          <div className="container">
            <div className="row infoheader">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="header-top-left">
                  <ul>
                    <li>
                      <i className="fa fa-globe" aria-hidden="true"></i>
                      Prestamos 100% online, sin comisiones ni pagos por
                      adelantado
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="header-top-right">
                  <ul>
                    <li>
                      <i className="far fa-envelope-open"></i>
                      ayuda@easycreditcolombia.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="header-top-right">
                  <ul>
                    <li>
                      <i className="fas fa-mobile-alt" aria-hidden="true"></i>
                      317 365 87 87
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-sm menu">
        <div className="container">
          <a href="index.html" className="navbar-brand cajalogo">
            <img src={logoblanco} className="logoeasy" />
          </a>

          <ul className="navbar-nav ml-auto menudash">
            <li className="nav-item linkmenu">
              <a href="easycreditcolombia.com" className="nav-link ancornav">
                Inicio
              </a>
            </li>
            <li className="nav-item ancornav">
              <a href="#adquirirlo" className="nav-link ancornav">
                ¿Cómo Adquirirlo?
              </a>
            </li>
            <li className="nav-item ancornav">
              <a
                href="#"
                className="nav-link ancornav"
                target="_blank"
              >
                ¿Quiénes Somos?
              </a>
            </li>
            <li className="nav-item ancornav">
              <a href="#elegirnos" className="nav-link ancornav">
                ¿Por qué elegirnos?
              </a>
            </li>
            <li className="nav-item ancornav">
              <a href="#contacto" className="nav-link ancornav">
                Contacto
              </a>
            </li>

            <li className="nav-item ancornav">
              <a href="#" className="nav-link ancornav">
                <i className="far fa-user"></i>
              </a>
            </li>

            <li className="nav-item ancornav">
              <a href="#" className="nav-link ancornav">
                <i className="fas fa-user-plus"></i>
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <i className="fas fa-bars iconomenuresponsive"></i>
            </li>
          </ul>

          <ul className="menu-responsive" id="menurespon">
            <li className="nav-item linkmenu">
              <a
                href="easycreditcolombia.com"
                className="nav-link ancormenuresponsive"
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a href="#adquirirlo" className="nav-link">
                ¿Cómo Adquirirlo?
              </a>
            </li>
            <li className="nav-item">
              <a
                href="sobre-nosotros.html"
                className="nav-link ancormenuresponsive"
                target="_blank"
              >
                ¿Quiénes Somos?
              </a>
            </li>
            <li className="nav-item">
              <a href="#elegirnos" className="nav-link ancormenuresponsive">
                ¿Por qué elegirnos?
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacto" className="nav-link ancormenuresponsive">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link ancormenuresponsive">
                <i className="far fa-user"></i>
                Iniciar Sesión
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link ancormenuresponsive">
                <i className="fas fa-user-plus"></i>
                Registro
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;
