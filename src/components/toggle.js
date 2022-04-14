import React from "react"
import {
  OverlayTrigger,
  Tooltip
} from "react-bootstrap"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Toggle = () => {
  return (
    <div style={{ position: "absolute", right: 10, top: 10 }}>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <OverlayTrigger placement="left" defaultShow overlay={<Tooltip id="dark-mode">
            {theme === "dark" ? "Desactivar Modo Oscuro" : "Activar Modo Oscuro"}
          </Tooltip>}>
            <div className="container">
              <label className="switch" htmlFor="checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                  checked={theme === "dark"}
                />
                <div className="slider round"></div>
                <span className="toggle-moon" role="img" aria-label="moon">🌙</span>
                <span className="toggle-sun" role="img" aria-label="sun">☀️</span>
              </label>
            </div>
          </OverlayTrigger>
        )}
      </ThemeToggler>
    </div>
  )
}

export default Toggle
