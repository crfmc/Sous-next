import { z } from 'zod';

const NavigationToggleProps = z.object({
  showMobileNav: z.boolean(),
  setShowMobileNav: z.function().args(z.boolean()).returns(z.void())
});
  

type NavigationToggleProps = z.infer<typeof NavigationToggleProps>;


export default function NagivationToggle({ showMobileNav, setShowMobileNav } : NavigationToggleProps) {

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
        <svg className="toggle-button-close" width="100%" height="100%" viewBox="0 0 100% 100%">
          <line x1="30%" x2="70%" y1="30%" y2="70%" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>
          <line x1="30%" x2="70%" y1="70%" y2="30%" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>
        </svg>
      </div>
    )
  }

  return showMobileNav ?  <MenuToggleClose /> : <MenuToggleOpen />
}