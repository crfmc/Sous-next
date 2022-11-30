import { useState } from "react"
import { Welcome } from "./Welcome";
import Content from "./Content";


export default function Dashboard() {
  const [welcome, showWelcome] = useState(true);

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        { welcome ? <Welcome showWelcome={ showWelcome }  /> : <Content /> }
      </div>
    </div>
  )
}