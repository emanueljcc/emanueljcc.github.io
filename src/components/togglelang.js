import React, { useState } from "react"
import { useTranslation } from "react-i18next"

const ToggleLang = () => {
  // TODO: fixed error gatsby build
  const [languaje, setLanguaje] = useState(typeof window !== "undefined" && window.localStorage.getItem("lang") === "en" ? "en" : "es")
  const { i18n } = useTranslation()

  const changeLanguage = e => {
    const check = e.target.checked
    const lng = check ? "es" : "en"

    // set localStorage
    localStorage.setItem("lang", lng === "es" ? "es" : "en")

    i18n.changeLanguage(lng)
    setLanguaje(check ? "es" : "en")
  }

  return (
    <div style={{ position: "absolute", left: 10, top: 10 }}>
        <div className="container">
          <label className="switch" htmlFor="check-lang">
            <input
              type="checkbox"
              id="check-lang"
              onChange={changeLanguage}
              checked={languaje === "es"}
            />
            <div className="slider round"></div>
            <span className="toggle-moon" role="img" aria-label="es">🇲🇽</span>
            <span className="toggle-sun" role="img" aria-label="en">🇺🇸</span>
          </label>
        </div>
    </div>
  )
}

export default ToggleLang
