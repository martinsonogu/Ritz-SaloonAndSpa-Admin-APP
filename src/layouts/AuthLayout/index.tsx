import React from 'react';
import { useNavigate } from 'react-router-dom';
import { REGULAR_PATHS } from '../../routes/paths';
import { RitzhubIcon } from '../../components/RitzhubIcon';
import MainLogo from '../../assets/svg/MainLogo';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className='h-full w-full flex items-center '>
     
      <AuthLayoutLeft />
     
      {children}
    </div>
  );
};

const AuthLayoutLeft: React.FC<any> = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-[#4B0C67] w-1/2 h-full '>
      
      <div className='flex items-center justify-center w-full'>
      <MainLogo onClick={() => navigate(REGULAR_PATHS.LOGIN)} />

      </div>
    </div>
  );
};
