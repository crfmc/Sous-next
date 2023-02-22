import { useState } from 'react';


export default function NagivationToggle({ showMobileNav, setShowMobileNav }) {

  return (
    <div
      onClick={() => setShowMobileNav(!showMobileNav)}
      className="toggle-button"
    >
      <div className="toggle-button-line top"></div>
      <div className="toggle-button-line middle"></div>
      <div className="toggle-button-line bottom"></div>
    </div>
  )
}