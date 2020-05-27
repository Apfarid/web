import React from 'react';
import "./Main.css";
import "./responsive.css";
import logoblanco from "../img/logoblanco.png";
import slide from "../img/slide.png";
import fondobannercontacto from "../img/fondobannercontacto.png";
import slide1pagos from "../img/slide1pagos.png";
import slide2pagos from "../img/slide2pagos.png";
import modelo from "../img/MODELO-QUIENES-SOMOS.png";


const Nosotros = () => {
    return (
        <div className="top">
            
		    <section  className="quienessomos" id="quienessomos">	
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 modeloquienessomos">
                        <img src={modelo} className="imgmodeloquienessomos"/>	
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 quienesomostexto">	
                        <h6>
                            ¿Quiénes Somos?
                        </h6>
                        <div className="cajaquienesson">	
                            <p>
                                Somos una compañía constituida legalmente en Colombia, nuestra organización está destinada al servicio de <strong className="strong">crédito en línea</strong>, de fácil acceso a nivel nacional, brindando servicio las 24 horas del día de los 7 días de la semana.</p>
                                <h6>
                                    Misión
                                </h6>
                            <p>	
                                Proporcionar la mejor opción para los procesos de micro prestamos las 24 horas del día, los 7 días a la semana, a través de una plataforma virtual fácil, rápida y segura.</p>
                                <h6>
                                    Visión
                                </h6>
                            <p>	
                                En el 2025 seremos reconocidos como líderes en el mercado virtual de micro prestamos 24/7 que beneficia a personas que requieren un préstamo fácil, rápido y confiable. Nuestro compromiso es mejorar continuamente para ofrecerle a nuestros clientes total trasparencia, seguridad y confiabilidad, por medio de un equipo humano competente que mantiene altos niveles de calidad y servicio.</p>
                        </div>
                </div>
            </section>
				<footer className="footer">
					<div className="container row contenedorfooter">
                        <div className="col-md-4">			
                            <img src="img/logoblanco.png" className="logofooter logo1"/>
                            <br/>	
                            <br/>	
                            <p className="textoeasyfooter">	
                                EASYCREDITCOLOMBIA.COM es una compañía legalmente constituida en Colombia bajo el nombre EASY CREDIT COLOMBIA S.A.S.
                            </p>
                            <h6 className="tittlefollowfooter">
                                Síguenos:
                            </h6>
                            <div className="cajasocialmediafooter">	
                                <div className="facebook">	
                                    <a href="https://www.facebook.com/easycreditcolombia/" target="_blank">
                                        <i className="fab fa-facebook-f iconoface">
                                        </i>
                                    </a>
                                </div>
                                <div className="instagram">	
                                    <a href="https://www.instagram.com/easycreditcolombia/" target="_blank">
                                        <i className="fab fa-instagram iconoig">
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                            <div className="col-md-4">	
                                <h1 className="infocontactofooter">
                                    Contacto
                                </h1>
                                <br/>	
                                <br/>	
                                <div className="row direccionfooter">
                                    <i className="fas fa-map-marker-alt iconoadress">
                                    </i>
                                    <p className="adressfooter">
                                        Calle 44 # 79-86 Of 207
                                    </p>
                                </div>
                                <br/>	
                                <br/>	
                                <div className="row direccionfooter">
                                    <i className="fas fa-phone iconoadress">
                                    </i>
                                    <p className="adressfooter">
                                        317 365 87 87
                                    </p>
                                </div>
                                <br/>	
                                <br/>	
                                <div className="row direccionfooter">
                                    <i className="fas fa-phone iconoadress">
                                    </i>
                                    <p className="adressfooter">
                                        ayuda@easycreditcolombia.com
                                    </p>
                                </div>
                        </div> 
                    </div>
				</footer>
				<div className="col-sm-12 text-center footerbottom">	
                    <h6 >
                        2020, EasyCreditColombia. Todos los derechos reservados
                    </h6>
				</div> 
        </div>

    );
};

export default Nosotros;