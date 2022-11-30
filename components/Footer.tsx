/**
 * Here is a component for the Footer. It will appear on every page
 */
import { useState } from "react"

// useState

const [isDark, setIsDark] = useState(false);


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-content">

        </div>
      </div>
    </footer>
  )
}