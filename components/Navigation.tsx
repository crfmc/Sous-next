import { AppProps } from "next/app";
import { NavigationLink } from '../pages/index';

const NavigationLinkFactory = ({ title, href } : NavigationLink) => {
  return (
    <a href={ href }>{ title }</a>
  )
}

export default function Navigation({ sticky, links }: { sticky: boolean, links: NavigationLink[] } ) {
  return (
    <nav className={ sticky ? "sticky" : "" }>
      {
        links.map(({ title, href } : NavigationLink, i : number) => {
          return (<NavigationLinkFactory title={ title } href={ href } key={ i } />)
        })
      }
    </nav>
  );
}