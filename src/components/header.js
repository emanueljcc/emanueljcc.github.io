import React from "react"

import Image from "./image"
import { Container, Row, Col } from "react-bootstrap"
import Toggle from "./toggle"
import ToggleLang from "./togglelang"
import { useTranslation } from "react-i18next"
import "./layout.css"

const styles = {
  color: '#9d3d7d',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  outline: 'none',
  marginBottom: '0.5rem'
}

const Header = ({ aos }) => {
  const { t } = useTranslation()

  const handleDownload = () => {
    const FILE = 'cv_emanuel_castillo.pdf';
    let anchor = document.createElement('a');
    anchor.setAttribute('href', FILE);
    anchor.setAttribute('download','');
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode.removeChild(anchor);
  }

  return (
    <Container style={{ paddingTop: 50 }}>
      <Row>
        <ToggleLang />
        <Col xs="12" md="6">
          <Image />
        </Col>

        <Col data-aos={aos} xs="12" md="6">
          <h1 className="text-center title-name">
            <small>Castillo</small> Emanuel
          </h1>

          <div className="text-center">
            <article className="margin-0 i-flex">
              <i
                className="fa fa-code font-weight-bold m-top-2"
                aria-hidden="true"
              />
              <p className="margin-0 color-secondary">
                &nbsp;{t("currentProfession")}
              </p>
            </article>
            <br />

            <article className="margin-0 i-flex">
              <i
                className="fa fa-map-marker font-weight-bold m-top-2 "
                aria-hidden="true"
              />
              <p className="margin-0 color-secondary">
                &nbsp;Venezuela
              </p>
            </article>
            <br />

            <article className="margin-0 i-flex">
              <i
                className="fa fa-envelope-o font-weight-bold m-top-2 "
                aria-hidden="true"
              />
              <a href="mailto:emanuelcastillo9101@gmail.com" rel="noreferrer" className="margin-0 color-secondary" style={{ color: '#565656', textDecoration: 'underline' }}>
                &nbsp;emanuelcastillo9101@gmail.com
              </a>
            </article>
            <br />

            <article className="margin-0 i-flex">
              <i
                className="fa fa-whatsapp font-weight-bold m-top-2 "
                aria-hidden="true"
              />
              <a href="https://api.whatsapp.com/send?phone=584124501381" rel="noreferrer" target="_blank" className="margin-0 color-secondary" style={{ color: '#565656', textDecoration: 'underline' }}>
                &nbsp;WS +58-412-4501381
              </a>
            </article>
            <br />
            <br />

            <article className="margin-0 i-flex">
              <button onClick={handleDownload} className="margin-0" style={styles}>
                &nbsp;{t("download")}
              </button>
            </article>
          </div>
        </Col>

        <Toggle />
      </Row>
    </Container>
  )
}

export default Header
