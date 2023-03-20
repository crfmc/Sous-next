import Head from "next/head";
import Navigation from "../../components/Navigation";
import Stepper from "../../components/Stepper";

export default function Cook() {
  return (
    <div>
      <Head>
        <title>Sous | Cook</title>
        <meta name="description" content="" />
        <link rel="icon" href="/sous-notext.svg" />
      </Head>
      <Navigation />
      <h1>
        Welcome to the best cooking app in the world.
      </h1>
      <h2>What would you like to cook today?</h2>

      <Stepper />

    </div>
  )
}