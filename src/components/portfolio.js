import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import { useTranslation } from "react-i18next"

const Portfolio = ({ colorTheme, aos }) => {
  const { t } = useTranslation()

  return (
    <div data-aos={aos}>
      <h2 className="divider line glow">{t("portfolio.title")}</h2>
      <Row>
        <Col xs="12" xl="5" style={{ marginBottom: 15 }}>
          <Card style={colorTheme.card}>
            <Card.Header>
              <b>
                {t("portfolio.subtitles.one")}{" "}
                <i
                  className="fa fa-globe fa-2x  pull-right"
                  aria-hidden="true"
                />
              </b>
            </Card.Header>
            <Card.Body>
              <ul>
                <li>
                  <a
                    style={colorTheme.link}
                    href="http://caol.agence.com.br/new/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://caol.agence.com.br/new/
                  </a>
                </li>
                <li>
                  <a
                    style={colorTheme.link}
                    href="http://influencemeapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://influencemeapp.com/ (app mobile android)
                  </a>
                </li>
                <li>
                  <a
                    style={colorTheme.link}
                    href="http://alt-encuestas-dev.e-digital.cl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://alt-encuestas-dev.e-digital.cl
                  </a>
                </li>
                <li>
                  <a
                    style={colorTheme.link}
                    href="http://e-digital.cl/e-access/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://e-digital.cl/e-access/
                  </a>
                </li>
                <li>
                  <a
                    style={colorTheme.link}
                    href="https://web.e-digital.cl/es/access"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://web.e-digital.cl/es/access
                  </a>
                </li>
                <li>
                  <a
                    style={colorTheme.link}
                    href="https://abecs.org.br/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://abecs.org.br/
                  </a>
                </li>
                <li>
                  <a
                    style={colorTheme.link}
                    href="http://pharma-investi.agence.com.br/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://pharma-investi.agence.com.br/
                  </a>
                </li>
                <li>
                  <a
                    style={colorTheme.link}
                    href="http://e-lodging-dev.e-digital.cl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://e-lodging-dev.e-digital.cl
                  </a>
                </li>
                <li>
                  <a
                    style={colorTheme.link}
                    href="http://upperbag.com.br"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://upperbag.com.br {t("version")}
                  </a>
                </li>
                <li>
                  <a
                    style={colorTheme.link}
                    href="http://web.upperbag.com.br"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://web.upperbag.com.br {t("version")}
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="http://sensorial.homologacao.agence.com.br"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://sensorial.homologacao.agence.com.br
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="http://gibraltar.homologacao.agence.com.br"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://gibraltar.homologacao.agence.com.br
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="http://newdesignsystem.homologacao.agence.com.br"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://newdesignsystem.homologacao.agence.com.br
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="http://tabata.homologacao.agence.com.br"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://tabata.homologacao.agence.com.br
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="https://e-digital.global/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://e-digital.global/
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="https://firmasimple.cl/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://firmasimple.cl/
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="https://staging-app.st37.fr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://staging-app.st37.fr/
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="https://st37.fr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://st37.fr/
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="https://skouting.st37.fr/login"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://skouting.st37.fr/login
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="http://avontadelanding.homologacao.agence.com.br/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://avontadelanding.homologacao.agence.com.br/
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="http://avontadeapi.homologacao.agence.com.br/api/documentation"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://avontadeapi.homologacao.agence.com.br/api/documentation{" "}
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="https://api.leveagro.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://api.leveagro.com/{" "}
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="https://app.leveagro.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://app.leveagro.com/{" "}
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="https://agent.iconnectance.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://agent.iconnectance.com/{" "}
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="https://backoffice.iconnectance.com/product"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://backoffice.iconnectance.com/product{" "}
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="https://test-sise.iconnectance.com/consultas#/login?_k=jvs0wa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://test-sise.iconnectance.com/consultas#/login?_k=jvs0wa{" "}
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="https://test-form.iconnectance.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://test-form.iconnectance.com/{" "} ({t("library")})
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="http://asistensi.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://asistensi.com/{" "}
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="http://asistensi.com.ve/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://asistensi.com.ve/{" "}
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="http://asistensi.com.do/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://asistensi.com.do/{" "}
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="http://asistensi.com.mx/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://asistensi.com.mx/{" "}
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="http://asistensi.com.hn/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://asistensi.com.hn/{" "}
                  </a>
                </li>

                <li>
                  <a
                    style={colorTheme.link}
                    href="http://asesores.vidaplatform.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://asesores.vidaplatform.com/{" "}
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col xs="12" xl="3" style={{ marginBottom: 15 }}>
          <Card style={colorTheme.card}>
            <Card.Header>
              <b>
                {t("portfolio.subtitles.two.title")}{" "}
                <i
                  className="fa fa-github fa-2x pull-right"
                  aria-hidden="true"
                />
              </b>
            </Card.Header>
            <Card.Body>
              <ul>
                <li>
                  <i className="fa fa-users" aria-hidden="true"></i>{" "}
                  <label htmlFor="networks" className="margin-0">
                    {t("portfolio.subtitles.two.social")}:
                  </label>
                </li>
                <li>
                  <a
                    style={colorTheme.link}
                    href="https://www.github.com/emanueljcc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-github" aria-hidden="true"></i>{" "}
                    https://www.github.com/emanueljcc
                  </a>
                </li>
                <li>
                  <a
                    style={colorTheme.link}
                    href="https://www.linkedin.com/in/emanueljcc/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>{" "}
                    https://www.linkedin.com/in/emanueljcc
                  </a>
                </li>
                <li>
                  <a
                    style={colorTheme.link}
                    href="https://www.instagram.com/emanueljcc/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>{" "}
                    https://www.instagram.com/emanueljcc
                  </a>
                </li>
                <li>
                  <a
                    style={colorTheme.link}
                    href="https://www.facebook.com/emanueljcc/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i>{" "}
                    https://www.facebook.com/emanueljcc
                  </a>
                </li>
                <li>
                  <a
                    style={colorTheme.link}
                    href="https://api.whatsapp.com/send?phone=584124501381"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-whatsapp" aria-hidden="true"></i>{" "}
                    WhatsApp: +58-412-4501381
                  </a>
                </li>
                <li>
                  <i className="fa fa-skype " aria-hidden="true"></i> Skype:
                  emanueljcc
                </li>
                <li>
                  <i className="fa fa-google " aria-hidden="true"></i> Google -
                  Mail/Meet/Hangouts: emanuelcastillo9101@gmail.com
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col xs="12" xl="4" style={{ marginBottom: 15 }}>
          <Card style={colorTheme.card}>
            <Card.Header>
              <b>
                {t("portfolio.subtitles.three")}{" "}
                <i
                  className="fa fa-certificate fa-2x pull-right"
                  aria-hidden="true"
                />
              </b>
            </Card.Header>
            <Card.Body>
              <ul>
                <li>
                  <a
                    style={colorTheme.link}
                    href="https://www.udemy.com/certificate/UC-9235f5ff-7b26-4f7d-979f-44cd31b6e176/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    React Native Expo: Creando un TripAdvisor de Restaurantes
                  </a>
                </li>
                <li>
                  <a
                    style={colorTheme.link}
                    href="https://www.udemy.com/certificate/UC-5ba16dd2-101d-4932-a885-22db2919ea3c/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Web Personal MERN Full Stack: MongoDB, Express, React y Node
                  </a>
                </li>
                <li>
                  <a
                    style={colorTheme.link}
                    href="https://ed.team/emanuelcastillo/curso/git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GIT desde cero 2020
                  </a>
                </li>
                <li>Curso: React.js Desde Cero</li>
                <li>Curso: NodeJS Desde Cero</li>
                <li>Curso: Laravel Framework PHP</li>
                <li>Curso: Codeigniter Framework PHP</li>
                <li>Programación Web Javascript.</li>
                <li>Programación PHP y MYSQL.</li>
                <li>SQL SERVER.</li>
                <li>Programación PHP NEXTSEND.</li>
                <li>
                  <b>{t("profession")}</b>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Portfolio
