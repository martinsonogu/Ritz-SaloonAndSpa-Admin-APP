import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardLayout } from "../../layouts/DashboardLayout";

const MerchantsDashboard = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export default MerchantsDashboard;
