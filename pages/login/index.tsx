import Head from "next/head";
import Navigation from "../../components/Navigation";


export default function Login() {
  return (
    <div className="container">
      <Head>
        <title>Sous | Login</title>
        <meta name="description" content="" />
        <link rel="icon" href="/sous-notext.svg" />
        
      </Head>
      <div className="background">
        
        <Navigation mut={"login"} links={[{title: "About", href: "/about"}]}></Navigation>

      </div>

    </div>
  )
}