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
    <DashboardLayoutContainer className="w-full h-full flex bg-[#F4F4F4]">
      <DashboardSideNav />
      <div className="w-[70%] h-screen flex flex-col items-start overflow-auto">
        <TopBar />
        <div className="h-screen flex flex-col py-5 w-full px-10">
          {children}
        </div>
      </div>
    </DashboardLayoutContainer>
  );
};

export default DashboardLayout;
