import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardLayout } from "../../layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Outlet />
      gell
    </DashboardLayout>
  );
};

export default Dashboard;