import React from "react"
import {
  DiReact,
  DiNodejsSmall,
  DiMysql,
  DiPostgresql,
  DiLaravel,
  DiMaterializecss,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiGit,
  DiTrello,
  DiJavascript1,
  DiPhp,
  DiMongodb,
  DiAngularSimple,
  DiJqueryLogo,
  DiFirebase,
  DiCodeigniter,
  DiSass,
  DiDocker,
  DiGulp,
  DiVisualstudio,
  DiUbuntu,
  DiWindows,
  DiApple,
  DiJira,
} from "react-icons/di"
import redux from "../images/icons/redux.svg"
import ts from "../images/icons/ts.png"
import vue from "../images/icons/vue.svg"
import aws from "../images/icons/aws.svg"
import leaflet from "../images/icons/leaflet.svg"
import webpack from "../images/icons/webpack.svg"
import next from "../images/icons/next.svg"
import gatsby from "../images/icons/gatsby.svg"
// import typescript from "../images/icons/typescript.svg"
import tailwindcss from "../images/icons/tailwindcss.svg"
import { Card } from "react-bootstrap"
import { useTranslation } from "react-i18next"

const Stack = ({ colorTheme, aos }) => {
  const { t } = useTranslation()

  return (
    <>
      <div data-aos={aos}>
        <Card style={colorTheme.card}>
          <Card.Header>
            <b>{t("titleCards.one")}</b>
          </Card.Header>
          <Card.Body>
            <ul>
              <li>
                <DiJavascript1 color="#000" size={25} />
                JavaScript
              </li>
              <li>
                <img alt="ts" src={ts} width="20" style={{ marginLeft: 3 }} />{" "}
                TypeScript
              </li>
              <li>
                <DiReact color="#000" size={25} />
                React.js
              </li>
              <li>
                <img
                  alt="next"
                  src={next}
                  width="20"
                  style={{ marginLeft: 3 }}
                />{" "}
                Next.js
              </li>
              <li>
                <img
                  alt="redux"
                  src={redux}
                  width="20"
                  style={{ marginLeft: 3 }}
                />{" "}
                Redux / Recoil / Context API
              </li>
              <li>
                <DiNodejsSmall color="#000" size={25} />
                Node.js
              </li>
              <li>
                <DiMongodb color="#000" size={25} />
                MongoDB
              </li>
              <li>
                <DiPhp color="#000" size={25} />
                PHP
              </li>
              <li>
                <DiLaravel color="#000" size={25} />
                Laravel
              </li>
              <li>
                <DiMysql color="#000" size={25} />
                MySQL
              </li>
              <li>
                <DiPostgresql color="#000" size={25} />
                PostgreSQL
              </li>
              <li>
                <DiMaterializecss color="#000" size={25} />
                Material Design
              </li>
              <li>
                <DiBootstrap color="#000" size={25} />
                Bootstrap
              </li>
              <li>
                <DiHtml5 color="#000" size={25} />
                HTML
              </li>
              <li>
                <DiCss3 color="#000" size={25} />
                CSS
              </li>
              <li>
                <DiSass color="#000" size={25} />
                Sass
              </li>
              <li>
                <img
                  alt="tailwind"
                  src={tailwindcss}
                  width="20"
                  style={{ marginLeft: 3 }}
                />{" "}
                TailwindCSS
              </li>
              <li>
                <DiGit color="#000" size={25} />
                Git
              </li>
              <li>
                <DiTrello color="#000" size={25} />
                Trello
              </li>
              <li>
                <DiJira color="#000" size={25} />
                Jira
              </li>
              <li>
                <DiVisualstudio color="#000" size={25} />
                VS Code
              </li>
              <li>
                <DiApple color="#000" size={25} />
                OS - Mac OS
              </li>
            </ul>
          </Card.Body>
        </Card>
      </div>
      <br />

      <div data-aos={aos}>
        <Card style={colorTheme.card}>
          <Card.Header>
            <b>{t("titleCards.two")}</b>
          </Card.Header>
          <Card.Body>
            <ul>
              <li>
                <DiReact color="#000" size={25} />
                React Native / Expo
              </li>
              <li>
                <DiAngularSimple color="#000" size={25} />
                Angular.js
              </li>
              <li>
                <img
                  alt="gatsby"
                  src={gatsby}
                  width="20"
                  style={{ marginLeft: 3 }}
                />{" "}
                Gatsby
              </li>
              <li>
                <DiAngularSimple color="#000" size={25} />
                Angular
              </li>
              <li>
                <img alt="vue" src={vue} width="20" style={{ marginLeft: 3 }} />{" "}
                Vue
              </li>
              <li>
                <DiJqueryLogo color="#000" size={25} />
                jQuery
              </li>
              <li>
                <img alt="aws" src={aws} width="20" style={{ marginLeft: 3 }} />{" "}
                AWS / S3
              </li>
              <li>
                <DiFirebase color="#000" size={25} />
                Firebase
              </li>
              <li>
                <img
                  alt="leaflet"
                  src={leaflet}
                  width="20"
                  style={{ marginLeft: 3 }}
                />{" "}
                Leaflet
              </li>
              <li>
                <img
                  alt="webpack"
                  src={webpack}
                  width="20"
                  style={{ marginLeft: 3 }}
                />{" "}
                Webpack
              </li>
              <li>
                <DiCodeigniter color="#000" size={25} />
                Codeigniter
              </li>
              <li>
                <DiDocker color="#000" size={25} />
                Docker
              </li>

              <li>
                <DiGulp color="#000" size={25} />
                Gulp
              </li>
              <li>
                <DiUbuntu color="#000" size={25} />
                OS - Linux / Ubuntu
              </li>
              <li>
                <DiWindows color="#000" size={25} />
                OS - Windows
              </li>
            </ul>
          </Card.Body>
        </Card>
      </div>
      <br />

      <div data-aos={aos}>
        <Card style={colorTheme.card}>
          <Card.Header>
            <b>{t("titleCards.three.title")}</b>
          </Card.Header>
          <Card.Body>
            <ul>
              <li>{t("titleCards.three.spanish")}</li>
              <li>{t("titleCards.three.english")}</li>
            </ul>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Stack
