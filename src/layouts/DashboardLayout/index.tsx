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
    <DashboardLayoutContainer className=" bg-[#f4f4f4]">
      <DashboardSideNav />
      <div className="w-full h-full flex flex-col items-start overflow-auto">
        <TopBar />
        <div className="h-full flex flex-col py-5 w-full px-10">{children}</div>
      </div>
    </DashboardLayoutContainer>
  );
};

export default DashboardLayout;
