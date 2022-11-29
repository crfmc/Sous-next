import { AppProps } from "next/app";
import Link from 'next/link';
import { z } from 'zod';

const NavigationLink = z.object({
  title: z.string().optional(),
  href: z.string()
});
type NavigationLink = z.infer<typeof NavigationLink>;

export const DefaultNavigationLinks: NavigationLink[] = [
  { title: "Sous", href: "/" },
  { title: "Pantry", href: "/pantry" },
  { title: "Get Cooking", href: "/cook" },
];

const NavigationProps = z.object({
  sticky: z.boolean(),
  links: z.array(NavigationLink)
});
type NavigationProps = z.infer<typeof NavigationProps>;

const DefaultNavigationProps: NavigationProps = {
  sticky: true,
  links: DefaultNavigationLinks
}

const NavigationLinkFactory = ({ title, href } : NavigationLink) => {
  return (
    <Link href={ href }>{ title }</Link>
  )
}

export default function Navigation({ sticky, links } : NavigationProps ) {
  return (
    <nav className={ sticky ? "sticky" : "" }>
      {
        links.map(({ title, href } : NavigationLink, i : number) => {
          return (<NavigationLinkFactory title={ title } href={ href } key={ i } />)
        })
      }
    </nav>
  );
};

Navigation.defaultProps = DefaultNavigationProps;