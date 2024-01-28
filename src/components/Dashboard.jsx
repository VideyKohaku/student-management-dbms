// import React from "react";

function Dashboard({toggleForm}) {
  return (
    <section className="dashboard card">
      <div className="card-header">
        <h2>Dashboard</h2>
        <div className="action-buttons">
          <input
            type="text"
            className="searchInput"
            placeholder="Search by name"
          />
          <button className="button" onClick={() => toggleForm("Open add")}>
            Add Student
          </button>
          <button className="button" onClick={() => toggleForm("Open course list")}>
            Course List
          </button>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
