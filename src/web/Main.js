import React from "react";
import "./Main.css";
import "./responsive.css";
import './bootstrap.css'
import logoblanco from "../img/logoblanco.png";
import slide from "../img/slide.png";
import fondobannercontacto from "../img/fondobannercontacto.png";
import slide1pagos from "../img/slide1pagos.png";
import slide2pagos from "../img/slide2pagos.png";
import Calculadora from "../components/Calculadora/Calculadora";



const Main = () => {
  return (
    <div className="top">
      <section className="cajacalbanner">
        <div className="container cajacalculadora">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 contenedorcalculadora">
            <section id="calculadora" className="seccioncalculadora">
              <div className="service-area">
                <div className="container">
                  <h4 className="titulocalculadora">Calcula tu crédito</h4>
                  <Calculadora/>
                    <br/>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg botoniniciarsesion"
                    >
                    <a>Iniciar Sesión</a>
                  </button>
                  <a href="../formulario_nuevo/registro/">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg botonregistrate"
                      >
                      Regístrate
                    </button>
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-6 col-md-6  col-sm-12 col-xs-12 modelocalculadora">
            <img src={slide} />
          </div>
        </div>
      </section>

      <section>
        <div className="contenedorrequisitos" id="adquirirlo">
          <div className="cajarequisitos">
            <h2>Requisitos para obtener un crédito</h2>
          </div>
          <div className="requisitos">
            <div className="requisitoscaja">
              <i className="fas fa-user-friends iconorequisito"></i>
              <p className="requisitotexto">
                Ser mayor de edad colombiano residente
              </p>
            </div>
            <div className="requisitoscaja">
              <i className="fas fa-credit-card iconorequisito"></i>
              <p className="requisitotexto">
                Tener cuenta bancaria a tu nombre
              </p>
            </div>
            <div className="requisitoscaja">
              <i className="fas fa-envelope-open iconorequisito"></i>
              <p className="requisitotexto">Tener correo propio</p>
            </div>
            <div className="requisitoscaja">
              <i className="fas fa-mobile-alt iconorequisito"></i>
              <p className="requisitotexto">Tener línea de celular propia</p>
            </div>
          </div>
        </div>
        <div className="contenedorpasos col-md-12">
          <div className="cajapasos">
            <h1>8 Pasos para adquirir tu crédito</h1>
          </div>
          <div className="contedortotalpasos">
            <div className="row filapasos">
              <div className="contenidopasos cold-md-4">
                <div className="circlecontenidopasos1">
                  <h6>1</h6>
                </div>
                <p>Calcular Crédito</p>
              </div>
              <div className="contenidopasos cold-md-4">
                <div className="circlecontenidopasos1">
                  <h6>2</h6>
                </div>
                <p>Solicitar Crédito</p>
              </div>
              <div className="contenidopasos cold-md-4">
                <div className="circlecontenidopasos1">
                  <h6>3</h6>
                </div>
                <p>Solicitud de Datos</p>
              </div>
              <div className="contenidopasos cold-md-2">
                <div className="circlecontenidopasos1">
                  <h6>4</h6>
                </div>
                <p>Validación de Datos</p>
              </div>
            </div>
            <div className="row">
              <div className="contenidopasos cold-md-4">
                <div className="circlecontenidopasos1">
                  <h6>5</h6>
                </div>
                <p>Resultado de la Solicitud</p>
              </div>
              <div className="contenidopasos cold-md-4">
                <div className="circlecontenidopasos1">
                  <h6>6</h6>
                </div>
                <p className="p">Firma de Contrato</p>
              </div>
              <div className="contenidopasos cold-md-4">
                <div className="circlecontenidopasos1">
                  <h6>7</h6>
                </div>
                <p className="p">Desembolso</p>
              </div>
              <div className="contenidopasos cold-md-4">
                <div className="circlecontenidopasos1">
                  <h6 className="numeropaso">8</h6>
                </div>
                <p>Pago</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="elegirnos" className="elegirnoscaja">
        <div>
          <h6>¿Por qué elegirnos?</h6>
        </div>
        <div className="contenedorporqueelegirnos">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 porquelegirnosizquierda">
            <div className="cajasdeporquelegirnos">
              <h5>Préstamos Rápidos</h5>
              <div className="barraporquelegirnos">
                <p className="porcentaje">100%</p>
              </div>
            </div>
            <div className="cajasdeporquelegirnos">
              <h5>Experiencia</h5>
              <div className="barraporquelegirnos">
                <p className="porcentaje">100%</p>
              </div>
            </div>
            <div className="cajasdeporquelegirnos">
              <h5>Transparencia en todos los procesos</h5>
              <div className="barraporquelegirnos">
                <p className="porcentaje">100%</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 porquelegirnosderecha">
            <div className="cajasdeporquelegirnos">
              <h5>Rápido y Confiable</h5>
              <div className="barraporquelegirnos">
                <p className="porcentaje">100%</p>
              </div>
            </div>
            <div className="cajasdeporquelegirnos">
              <h5>Plataformas Seguras (Certificado SSL)</h5>
              <div className="barraporquelegirnos">
                <p className="porcentaje">100%</p>
              </div>
            </div>
            <div className="cajasdeporquelegirnos">
              <h5>Atención Financiera sin larga filas</h5>
              <div className="barraporquelegirnos">
                <p className="porcentaje">100%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ssl">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={fondobannercontacto}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contenedorcarrusel">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1pagos} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slide2pagos} className="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      <section className="container contactoabajo" id="contacto">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 cajacontenedorcontactoabajo">
          <h1>Información de Contacto</h1>
          <ul>
            <li>
              <h6 className="informacioncontacto">
                <i className="fas fa-map-marker-alt iconoscontacto"></i>
                <strong className="tituloinformacioncontacto">
                  Dirección:
                </strong>
                Calle 44 # 79-86 Of 207
              </h6>
            </li>
            <li>
              <h6 className="informacioncontacto">
                <i className="fas fa-phone iconoscontacto"></i>
                <strong className="tituloinformacioncontacto">Teléfono:</strong>
                317 365 87 87
              </h6>
            </li>
            <li>
              <h6 className="informacioncontacto">
                <i className="fas fa-envelope-open iconoscontacto"></i>
                <strong className="tituloinformacioncontacto">Correo:</strong>
                ayuda@easycreditcolombia.com
              </h6>
            </li>
            <li>
              <h6 className="informacioncontacto">
                <i className="fab fa-facebook-f iconoscontacto"></i>
                <strong className="tituloinformacioncontacto">Facebook:</strong>
                <a
                  href="https://www.facebook.com/easycreditcolombia/"
                  target="_blank"
                >
                  @easycreditcolombia
                </a>
              </h6>
            </li>
            <li>
              <h6 className="informacioncontacto">
                <i className="fab fa-instagram iconoscontacto"></i>
                <strong className="tituloinformacioncontacto">
                  Instagram:
                </strong>
                <a
                  href="https://www.instagram.com/easycreditcolombia/"
                  target="_blank"
                >
                  easycreditcolombia
                </a>
              </h6>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 cajaformcontacto">
          <form method="post" action="enviar-formulario.php">
            <div className="form-row">
              <div className="col">
                <select
                  className="form-control form-control-lg"
                  name="servicio"
                >
                  <option>Pregunta por el Servicio</option>
                  <option value="Asesoría con un agente">
                    Asesoría con un agente
                  </option>
                </select>
              </div>
            </div>

            <div className="espacioformcontacto"></div>

            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Completo"
                  name="nombre_contacto"
                  id="nombre_contacto"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellidos"
                  name="apellidos_contacto"
                  id="apellidos_contacto"
                  required
                />
              </div>
            </div>

            <div className="espacioformcontacto"></div>

            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email_contacto"
                  id="email_contacto"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Celular"
                  name="celular_contacto"
                  id="celular_contacto"
                  required
                />
              </div>
            </div>

            <div className="espacioformcontacto"></div>

            <button type="submit" className="btn btn-primary botoncontacto">
              Enviar
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container row contenedorfooter">
          <div className="col-md-4">
            <img src={logoblanco} className="logofooter logo1" />
            <br />
            <br />
            <p className="textoeasyfooter">
              EASYCREDITCOLOMBIA.COM es una compañía legalmente constituida en
              Colombia bajo el nombre EASY CREDIT COLOMBIA S.A.S.
            </p>
            <h6 className="tittlefollowfooter">Síguenos:</h6>
            <div className="cajasocialmediafooter">
              <div className="facebook">
                <a
                  href="https://www.facebook.com/easycreditcolombia/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f iconoface"></i>
                </a>
              </div>
              <div className="instagram">
                <a
                  href="https://www.instagram.com/easycreditcolombia/"
                  target="_blank"
                >
                  <i className="fab fa-instagram iconoig"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h1 className="infocontactofooter">Contacto</h1>
            <br />
            <br />
            <div className="row direccionfooter">
              <i className="fas fa-map-marker-alt iconoadress"></i>
              <p className="adressfooter">Calle 44 # 79-86 Of 207</p>
            </div>
            <br />
            <br />
            <div className="row direccionfooter">
              <i className="fas fa-phone iconoadress"></i>
              <p className="adressfooter">317 365 87 87</p>
            </div>
            <br />
            <br />

            <div className="row direccionfooter">
              <i className="fas fa-phone iconoadress"></i>
              <p className="adressfooter">ayuda@easycreditcolombia.com</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="col-sm-12 text-center footerbottom">
        <h6>2020, EasyCreditColombia. Todos los derechos reservados</h6>
      </div>
    </div>
  );
};

export default Main;
