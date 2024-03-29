import Head from "next/head";
import Navigation from "../components/Navigation";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <html lang="en"></html>
        <title>Sous</title>
        <meta name="description" content="" />
        <link rel="icon" href="/sous-notext.svg" />
      </Head>

      {/* Main content for the page */}
      <main className="home-container">

        <Navigation mut="sm-toggleNav" />

        <section className="home-container-content">
          {/* <Dashboard /> */}
        </section>

      </main>

      <footer className=""></footer>
    </div>
  )
}
