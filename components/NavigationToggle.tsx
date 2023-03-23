import { useState } from 'react';


export default function NagivationToggle({ showMobileNav, setShowMobileNav }) {


  const MenuToggleOpen = () => {
    return(
      <div
        onClick={() => setShowMobileNav(!showMobileNav)}
        className="toggle-button"
      >
        <svg className="toggle-button-open" width="100%" height="100%" viewBox="0 0 100% 100%">
          <line x1="20%" x2="80%" y1="30%" y2="30%" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="20%" x2="80%" y1="50%" y2="50%" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="20%" x2="80%" y1="70%" y2="70%" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    )
  }

  const MenuToggleClose = () => {
    return (
      <div
        onClick={() => setShowMobileNav(!showMobileNav)}
        className="toggle-button"
        >
        <svg className="toggle-button-close" width="40" height="40" viewBox="0 0 40 40">
          <line x1="2" x2="38" y1="2" y2="38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <line x1="2" x2="38" y1="38" y2="2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    )
  }

  return showMobileNav ?  <MenuToggleClose /> : <MenuToggleOpen />
}