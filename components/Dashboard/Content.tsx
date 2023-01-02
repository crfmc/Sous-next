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
          <h1 className="dashboard-container-content-header-text">Dashboard content</h1>
        </div>
        <div className="dashboard-container-content-body">
          <section className="dashboard-container-content-body-section">
            <Card title="Zucchini" />
            <Card title="Orange" />
            <Card title="Feta Cheese" />
            <Card title="Bulgur" />
          </section>
        </div>
      </main>
    </div>
  )
}