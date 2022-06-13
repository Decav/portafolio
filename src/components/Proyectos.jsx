import React from "react";
import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";
import * as SiIcons from "react-icons/si";

const Proyectos = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center" style={{ width: "50%" }}>
        <div className="col-10">
          <div className="contenedor" style={{ height: "90%", width: "75%" }}>
            <div className="bg-light bg-opacity-25 card shadow text-light">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link link-light active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    BaraTop
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link link-light"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    MusicApp
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link link-light"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="contact-tab-pane"
                    aria-selected="false"
                  >
                    Vic2
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link link-light"
                    id="appimpact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#appimpact-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="appimpact-tab-pane"
                    aria-selected="false"
                  >
                    AppImpact
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabindex="0"
                >
                  <div className="row m-5">
                    <div className="col-lg-4 col-md-12 col-12">
                      <p className="">
                        Proyecto realizado en Laravel framework, se puede
                        registrar como usuario cliente en la aplicación o como
                        usuario vendedor en conjunto con un negocio con patente
                        registrada. Los negocios pueden añadir productos y
                        ofertas en base a productos predeterminados añadidos por
                        la administración de la aplicación.
                      </p>
                      <div className="bg-light bg-opacity-25 card table-responsive">
                        <table className="table">
                          <h5 className="display-6">Herramientas</h5>
                          <tbody>
                            <tr>
                              <th>
                                Laravel <FaIcons.FaLaravel />
                              </th>
                            </tr>
                            <tr>
                              <th>
                                MySQL <DiIcons.DiMysql />
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a
                        target={"_blank"}
                        rel="noreferrer"
                        href="https://github.com/Decav/Proyecto_titulo_BaraTop"
                        className="nav-link text-light"
                      >
                        <FaIcons.FaGithub /> Repositorio Proyecto_titulo_BaraTop{" "}
                      </a>
                    </div>
                    <div className="col-lg col-md col-12" style={{ width: "100%" }}>
                      <div
                        id="carouselExampleIndicators"
                        class="carousel slide"
                        data-bs-ride="true"
                      >
                        <div class="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img
                              src="https://media.discordapp.net/attachments/729827578784776232/983203159348482118/unknown.png?width=1068&height=546"
                              class="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              src="https://media.discordapp.net/attachments/729827578784776232/983202968407015424/unknown.png?width=1068&height=546"
                              class="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              src="https://media.discordapp.net/attachments/729827578784776232/983202443401777212/unknown.png?width=1068&height=546"
                              class="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <button
                          class="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                          class="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabindex="0"
                >
                  <div className="row m-5">
                    <div className="col-lg-6 col-md-12 col-12">
                      <p className="">
                        Proyecto realizado con el framework de Flutter, la idea
                        de la aplicación es poder añadir artistas además de
                        relacionarlos a álbumes. Como también poder modificar y
                        eliminar estos 2 últimos.
                      </p>
                      <div className="bg-light bg-opacity-25 card table-responsive">
                        <table className="table">
                          <h5 className="display-6">Herramientas</h5>
                          <tbody>
                            <tr>
                              <th>
                                Flutter <SiIcons.SiFlutter />
                              </th>
                            </tr>
                            <tr>
                              <th>
                                Android Studio <SiIcons.SiAndroidstudio />
                              </th>
                            </tr>
                            <tr>
                              <th>
                                API Laravel <FaIcons.FaLaravel />
                              </th>
                            </tr>
                            <tr>
                              <th>
                                MySQL <DiIcons.DiMysql />
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a
                        target={"_blank"}
                        rel="noreferrer"
                        href="https://github.com/Decav/MusicApp"
                        className="nav-link text-light"
                      >
                        <FaIcons.FaGithub /> Repositorio Proyecto_MusicApp{" "}
                      </a>
                    </div>
                    <div className="col-lg col-md col-12" style={{ width: "100%" }}>
                      <div className="row justify-content-center">
                        <div
                          id="carouselExampleIndicators1"
                          class="carousel slide"
                          data-bs-ride="true"
                          style={{ width: "50%" }}
                        >
                          <div class="carousel-indicators">
                            <button
                              type="button"
                              data-bs-target="#carouselExampleIndicators1"
                              data-bs-slide-to="0"
                              class="active"
                              aria-current="true"
                              aria-label="Slide 1"
                            ></button>
                            <button
                              type="button"
                              data-bs-target="#carouselExampleIndicators1"
                              data-bs-slide-to="1"
                              aria-label="Slide 2"
                            ></button>
                            <button
                              type="button"
                              data-bs-target="#carouselExampleIndicators1"
                              data-bs-slide-to="2"
                              aria-label="Slide 3"
                            ></button>
                          </div>
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img
                                src="https://media.discordapp.net/attachments/729827578784776232/983197168481480794/unknown.png?width=352&height=569"
                                class="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div class="carousel-item">
                              <img
                                src="https://media.discordapp.net/attachments/729827578784776232/983197238593466368/unknown.png?width=352&height=569"
                                class="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div class="carousel-item">
                              <img
                                src="https://media.discordapp.net/attachments/729827578784776232/983198142893797436/unknown.png?width=352&height=569"
                                class="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </div>
                          <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators1"
                            data-bs-slide="prev"
                          >
                            <span
                              class="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                          </button>
                          <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators1"
                            data-bs-slide="next"
                          >
                            <span
                              class="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact-tab-pane"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                  tabindex="0"
                >
                  <div className="row m-5">
                    <div className="col-lg-4 col-md-12 col-12">
                      <p className="">
                        Proyecto realizado bajo el stack de MERN, en la
                        aplicación se pueden visualizar rutinas de ejercicios
                        para diferentes partes del cuerpo, como también dietas
                        variadas en función de lo que busque el usuario. Se
                        puede registrar en la aplicación para que un usuario
                        pueda añadir a sus favoritos, dietas y ejercicios
                        personalizados a su propio gusto.
                      </p>
                      <div className="bg-light bg-opacity-25 card table-responsive">
                        <table className="table">
                          <h5 className="display-6">Herramientas</h5>
                          <tbody>
                            <tr>
                              <th>
                                React <FaIcons.FaReact />
                              </th>
                            </tr>
                            <tr>
                              <th>
                                Node js <FaIcons.FaNodeJs />
                              </th>
                            </tr>
                            <tr>
                              <th>
                                Express <SiIcons.SiExpress />
                              </th>
                            </tr>
                            <tr>
                              <th>
                                MongoDB <DiIcons.DiMongodb />
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a
                        target={"_blank"}
                        rel="noreferrer"
                        href="https://github.com/Decav/Vic2"
                        className="nav-link text-light"
                      >
                        <FaIcons.FaGithub /> Repositorio Proyecto_Vic2{" "}
                      </a>
                    </div>
                    <div className="col-lg col-md col-12" style={{ width: "100%" }}>
                      <div
                        id="carouselExampleIndicators2"
                        class="carousel slide"
                        data-bs-ride="true"
                      >
                        <div class="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators2"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators2"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators2"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img
                              src="https://media.discordapp.net/attachments/729827578784776232/983208644738973716/unknown.png?width=1068&height=516"
                              class="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              src="https://media.discordapp.net/attachments/729827578784776232/983209012558454814/unknown.png?width=1068&height=516"
                              class="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              src="https://media.discordapp.net/attachments/729827578784776232/983208821784711268/unknown.png?width=1068&height=516"
                              class="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <button
                          class="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators2"
                          data-bs-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                          class="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators2"
                          data-bs-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="appimpact-tab-pane"
                  role="tabpanel"
                  aria-labelledby="appimpact-tab"
                  tabindex="0"
                >
                  <div className="row m-5">
                    <div className="col-lg-4 col-md-12 col-12">
                      <p className="">
                        Aplicacion informativa sobre un juego, desarrollada en el framework Flutter.
                        La idea de la aplicacion es poder mostrar datos e informacion de interes sobre el juego.

                      </p>
                      <div className="bg-light bg-opacity-25 card table-responsive">
                        <table className="table">
                          <h5 className="display-6">Herramientas</h5>
                          <tbody>
                            <tr>
                              <th>
                                Flutter <SiIcons.SiFlutter />
                              </th>
                            </tr>
                            <tr>
                              <th>
                                Android Studio <SiIcons.SiAndroidstudio />
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a
                        target={"_blank"}
                        rel="noreferrer"
                        href="https://github.com/Decav/AppImpact"
                        className="nav-link text-light"
                      >
                        <FaIcons.FaGithub /> Repositorio Proyecto_AppImpact{" "}
                      </a>
                    </div>
                    <div className="col-lg col-md col-12" style={{ width: "100%" }}>
                      <div className="row justify-content-center">
                        <div
                          id="carouselExampleIndicators3"
                          class="carousel slide"
                          data-bs-ride="true"
                          style={{ width: "50%" }}
                        >
                          <div class="carousel-indicators">
                            <button
                              type="button"
                              data-bs-target="#carouselExampleIndicators3"
                              data-bs-slide-to="0"
                              class="active"
                              aria-current="true"
                              aria-label="Slide 1"
                            ></button>
                            <button
                              type="button"
                              data-bs-target="#carouselExampleIndicators3"
                              data-bs-slide-to="1"
                              aria-label="Slide 2"
                            ></button>
                            <button
                              type="button"
                              data-bs-target="#carouselExampleIndicators3"
                              data-bs-slide-to="2"
                              aria-label="Slide 3"
                            ></button>
                          </div>
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img
                                src="https://media.discordapp.net/attachments/729827578784776232/985926121994461184/unknown.png?width=340&height=478"
                                class="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div class="carousel-item">
                              <img
                                src="https://media.discordapp.net/attachments/729827578784776232/985926237023244338/unknown.png?width=340&height=478"
                                class="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div class="carousel-item">
                              <img
                                src="https://media.discordapp.net/attachments/729827578784776232/985926328245190686/unknown.png?width=340&height=478"
                                class="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </div>
                          <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators3"
                            data-bs-slide="prev"
                          >
                            <span
                              class="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                          </button>
                          <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators3"
                            data-bs-slide="next"
                          >
                            <span
                              class="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
