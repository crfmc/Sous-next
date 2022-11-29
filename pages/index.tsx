import Head from "next/head";
import Navigation, { DefaultNavigationLinks } from "../components/Navigation";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Sous</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">

        <Navigation sticky={ false } links={ DefaultNavigationLinks } />

        <section className="">

        </section>

      </main>

      <footer className=""></footer>
    </div>
  )
}
