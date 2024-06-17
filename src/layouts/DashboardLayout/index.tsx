import React from "react";
import { DashboardSideNav } from "../../components/SideNav";
import { DashboardLayoutContainer } from "./styles";
import { TopBar } from "./TopBar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <DashboardLayoutContainer className=" w-full h-full flex bg-[#F4F4F4] ">
      <DashboardSideNav />
      <div className="w-full flex flex-col items-start overflow-auto">
        <TopBar />

        <div className="flex-1 h-screen w-full py-3 px-3 ">{children}</div>
      </div>
    </DashboardLayoutContainer>
  );
};

export default DashboardLayout;
