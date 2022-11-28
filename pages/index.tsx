import Head from "next/head";
import Navigation from "../components/Navigation";
import Stepper from "../components/Stepper";

export interface NavigationLink {
  title?: string;
  href: string;
}

const NavigationLinks: NavigationLink[] = [
  { title: "Tutorial", href: "/1" },
  { title: "Inventory", href: "/2" },
  { title: "Get Cooking", href: "/3" },
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

        <Navigation sticky={true} links={NavigationLinks} />

        <section className="">

          <Stepper />

        </section>

      </main>

      <footer className=""></footer>
    </div>
  )
}
