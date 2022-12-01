import DashNav from "./DashNav"

export default function Content() {
  return (
    <div className="dashboard-container-content">
      <section className="dashboard-container-content-left">
        <DashNav />
      </section>
      <main className="dashboard-container-content-right">
        <div className="dashboard-container-content-header">
          <h1>Hello!</h1>
        </div>
      </main>
    </div>
  )
}