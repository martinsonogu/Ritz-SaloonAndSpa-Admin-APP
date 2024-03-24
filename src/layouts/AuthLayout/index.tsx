import React from 'react';
import { useNavigate } from 'react-router-dom';
import { REGULAR_PATHS } from '../../routes/paths';
import MainLogo from '../../assets/svg/MainLogo';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className='h-full w-full flex items-center '>
     
      <div className="flex-1"><AuthLayoutLeft /></div>
     <div className="flex-1">{children}</div>
      
    </div>
  );
};

const AuthLayoutLeft: React.FC<any> = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-[#4B0C67] w-full h-full '>
      
      <div className='flex items-center justify-center w-full'>
      <MainLogo onClick={() => navigate(REGULAR_PATHS.LOGIN)} />

      </div>
    </div>
  );
};
