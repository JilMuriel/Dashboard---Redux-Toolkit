import React from "react";

import Header from "./components/navigation/header";
import DashboardPage from "./components/dashboard/dashboard-page";
import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <Header />
      <DashboardPage />
    </div>
  );
}

export default App;
