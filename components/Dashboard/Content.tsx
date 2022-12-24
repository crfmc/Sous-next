import DashNav from "./DashNav";
import Card from "../Card";

export default function Content() {
  return (
    <div className="dashboard-container-content">
      <section className="dashboard-container-content-left">
        <DashNav />
      </section>
      <main className="dashboard-container-content-right">
        <div className="dashboard-container-content-header">
          <h1 className="dashboard-container-content-header">Dashboard content</h1>
        </div>
        <div className="dashboard-container-content-body">
          <Card name="Omelette" />
        </div>
      </main>
    </div>
  )
}