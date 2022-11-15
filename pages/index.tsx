import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sous</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1>Hello! I&apos;m Sous.</h1>
        <a>Tutorial</a>
        <a>Inventory</a>
        <a>Get cooking!</a>
      </main>

      <footer className="footer"></footer>
    </div>
  )
}
