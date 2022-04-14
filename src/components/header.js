import React from "react"

import Image from "./image"
import { Container, Row, Col } from "react-bootstrap"
import Toggle from "./toggle"
import ToggleLang from "./togglelang"
import { useTranslation } from "react-i18next"

const Header = ({ aos }) => {
  const { t } = useTranslation()

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
              ></i>
              <p className="margin-0 color-secondary">
                &nbsp;{t("currentProfession")}
              </p>
            </article>
            <br />

            <article className="margin-0 i-flex">
              <i
                className="fa fa-map-marker font-weight-bold m-top-2 "
                aria-hidden="true"
              ></i>
              <p className="margin-0 color-secondary">
                &nbsp;Venezuela
              </p>
            </article>
            <br />

            <article className="margin-0 i-flex">
              <i
                className="fa fa-envelope-o font-weight-bold m-top-2 "
                aria-hidden="true"
              ></i>
              <p className="margin-0 color-secondary">
                &nbsp;emanuelcastillo9101@gmail.com
              </p>
            </article>
            <br />

            <article className="margin-0 i-flex">
              <i
                className="fa fa-whatsapp font-weight-bold m-top-2 "
                aria-hidden="true"
              ></i>
              <p className="margin-0 color-secondary">
                &nbsp;WS +58-412-4501381
              </p>
            </article>
          </div>
        </Col>

        <Toggle />
      </Row>
    </Container>
  )
}

export default Header
