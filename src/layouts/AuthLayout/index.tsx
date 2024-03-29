import React from "react";
import { useNavigate } from "react-router-dom";
import { REGULAR_PATHS } from "../../routes/paths";
import MainLogo from "../../assets/svg/MainLogo";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="h-screen w-full flex-1 flex items-center justify-between">
      <div className=" w-full h-full flex-1 flex items-center justify-center">
        <AuthLayoutLeft />
      </div>
      <div className=" w-full h-full flex-1 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

const AuthLayoutLeft = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#4B0C67] w-full h-screen flex items-center justify-center">
      <MainLogo />
    </div>
  );
};
