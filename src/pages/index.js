import React, { useEffect } from "react"
import {
  Container,
  Row,
  Col,
} from "react-bootstrap"
import AOS from "aos"
import Profile from "../components/profile"
import Experience from "../components/experience"
import Portfolio from "../components/portfolio"
import Stack from "../components/stack"
import Layout from "../components/layout"
import SEO from "../components/seo"

// i18n
import "../i18n/i18n"

// CSS
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "aos/dist/aos.css"

const colorTheme = {
  theme: {
    backgroundColor: "var(--bg)",
    color: "var(--textNormal)",
    transition: "color 0.4s ease-out, background 0.4s ease-out",
    fontFamily: "Josefin Sans"
  },
  card: {
    backgroundColor: "var(--cardColor)",
    color: "var(--textNormal)",
    transition: "color 0.4s ease-out, background 0.4s ease-out"
  },
  link: {
    color: "var(--link)",
    textDecoration: "underline"
  }
}

const IndexPage = () => {

  useEffect(() => {
    AOS.init({ duration : 1000 })
  }, [])

  // enable trasitions (fade-up)
  // const AOS_ENABLED = 'fade-up'; // available
  const AOS_ENABLED = ''; // '' => unavailable

  return (
    <div style={colorTheme.theme}>
      <Layout>
        <SEO title="Emanuel Castillo | Curriculum Vitae" />
        <Container fluid>
          <Row>
            <Col xs="12" xl="10">
              <Profile aos={AOS_ENABLED} />

              <Experience aos={AOS_ENABLED} />

              <Portfolio colorTheme={colorTheme} aos={AOS_ENABLED} />
            </Col>
            <Col xs="12" xl="2">
              <Stack colorTheme={colorTheme} aos={AOS_ENABLED} />
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  )
}

export default IndexPage
