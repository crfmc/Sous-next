import Head from "next/head";
import Navigation from "../../components/Navigation";
import Stepper from "../../components/Stepper";

export default function Cook() {
  return (
    <div>
      <Head>
        
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