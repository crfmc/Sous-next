import { Head } from "next/document";
import Stepper from "../../components/Stepper";

export default function Cook() {
  return (
    <div>
      <h1>
        Welcome to the best cooking app in the world.
      </h1>
      <h2>What would you like to cook today?</h2>

      <Stepper />

    </div>
  )
}