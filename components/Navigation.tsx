/**
 * This function creates a Navigation component. It creates a Navigation
 * whose elements are defined through the links prop, [links] as well as the
 * mutations, [mut] props.
 * 
 * It is finally styled depending on the props [NavigationProps] passed to
 * it from the parent component.
 */

import { AppProps } from "next/app";
import Link from 'next/link';
import { z } from 'zod';
import NavigationToggle from './NavigationToggle';
import { useState } from 'react';

const NavigationLink = z.object({
  title: z.string().optional(),
  href: z.string(),
});
type NavigationLink = z.infer<typeof NavigationLink>;

export const DefaultNavigationLinks: NavigationLink[] = [
  { title: "Sous", href: "/" },
  { title: "Pantry", href: "/" },
  { title: "Cook", href: "/" },
];

const NavigationProps = z.object({
  mut: z.string(),// [mut] refers to classes that mutates the component
  links: z.array(NavigationLink)
});
type NavigationProps = z.infer<typeof NavigationProps>;

const DefaultNavigationProps: NavigationProps = {
  mut: "top",
  links: DefaultNavigationLinks
}

const NavigationLinkFactory = ({ title, href } : NavigationLink) => {
  return (
    <Link className="navigation-list-item-link" href={ href }>
      <span className="navigation-list-item-link-title">
        { title }
      </span>
    </Link>
  )
}

/**
 * Under mid size:
 *  - navigation list hidden
 *  - can be toggled on
 */

export default function Navigation({ mut, links }: NavigationProps) {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  // Add toggle mutation on state change
  if (showMobileNav) {
    mut += " toggle-open"
  }

  return (
    <nav className={'navigation' + ' ' + mut} aria-label="Page Navigation">
      <NavigationToggle
        showMobileNav={ showMobileNav }
        setShowMobileNav={ setShowMobileNav }
      />
      <ul className={ showMobileNav ? 'navigation-list toggle-open' : 'navigation-list'}>
        {
          links.map(({ title, href } : NavigationLink, i : number) => {
            return (
              <li  key={ i } className="navigation-list-item">
                <NavigationLinkFactory title={ title } href={ href } />
              </li>
          )})
        }
      </ul>
    </nav>
  );
};

Navigation.defaultProps = DefaultNavigationProps;