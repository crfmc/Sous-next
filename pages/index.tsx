import Head from "next/head";
import Navigation from "../components/Navigation";

export interface NavigationLink {
  title?: string;
  href: string;
}

const NavigationLinks: NavigationLink[] = [
  { title: "Link1", href: "/" }
]

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Sous</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navigation
          sticky={true}
          links={ NavigationLinks }
        />
        <h1>Hello! I&apos;m Sous.</h1>
        <a>Tutorial</a>
        <a>Inventory</a>
        <a>Get cooking!</a>
      </main>

      <footer className=""></footer>
    </div>
  )
}
