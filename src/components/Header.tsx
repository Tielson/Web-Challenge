import { X } from "lucide-react"
import "../styles/Header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">📝</div>
          <span className="logo-text">CoreNotes</span>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Pesquisar nota..." />
          <button className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        <button className="close-button">
          <X size={20} />
        </button>
      </div>
    </header>
  )
}

export default Header

