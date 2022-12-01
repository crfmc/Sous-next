import { useState } from "react"
import { Welcome } from "./Welcome";
import Content from "./Content";


export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <Welcome />
        <Content />
      </div>
    </div>
  )
}