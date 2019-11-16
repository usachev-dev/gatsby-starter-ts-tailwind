import React from "react"
import { Link } from "gatsby"

interface Props {}

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <header className="text-6xl">
        <nav>
          <Link to="/">Главная</Link>
        </nav>
        <nav>
          <Link to="/page-2">Вторая</Link>
        </nav>
      </header>
      {children}
    </div>
  )
}

export default Layout
