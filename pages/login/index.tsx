import Head from "next/head";
import Navigation from "../../components/Navigation";


export default function Login() {
  return (
    <div className="container">
      <Head>
        
      </Head>
      <div className="background">
        
        <Navigation mut={"login"} links={[{title: "About", href: "/about"}]}></Navigation>

      </div>

    </div>
  )
}