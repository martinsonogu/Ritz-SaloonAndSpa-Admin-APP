import React, { PropsWithChildren, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import ForgotPassword from '../views/Auth/ForgotPassword';
import Login from '../views/Auth/Login';
import ResetPassword from '../views/Auth/ResetPassword';
import Signup from '../views/Auth/SignUp'
import Overview from '../views/Dashboard/Overview';
import Appointment from '../views/Dashboard/SalonAndSpa/Appointment';
import Payment from '../views/Dashboard/SalonAndSpa/Payment';
import Update from '../views/Dashboard/SalonAndSpa/Update';
import { useRedirect } from '../hooks';


import { PRIVATE_PATHS, REGULAR_PATHS } from './paths';

export const AppRouter = () => {
  const {
    OVERVIEW,
    HOME,
    APPOINTMENTS,
    PAYMENTS,
    UPDATE_SERVICES
  } = PRIVATE_PATHS;
  const { FORGOT_PASSWORD, LOGIN, RESET_PASSWORD, SIGN_UP } = REGULAR_PATHS;

  useRedirect();
  return (
    <Routes>
      <Route
        path={HOME}
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route index element={<Overview />} />
        <Route path={OVERVIEW} element={<Overview />} />
        <Route path={APPOINTMENTS} element={<Appointment />} />
        <Route path={PAYMENTS} element={<Payment />} />
        <Route path={UPDATE_SERVICES} element={< Update/>} />
        {/* {put other links here} */}
      </Route>
      
      <Route path={LOGIN} element={<Login />} />
      <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={SIGN_UP} element={<Signup />} />
      <Route path='*' element={<Navigate to={LOGIN} replace />} />
    </Routes>
  );
};

export const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
 const navigate = useNavigate();

  useEffect(() => {
    const checkAccessToken = () => {
      const accessToken = localStorage.getItem('key');

      if (!accessToken) {
        navigate(REGULAR_PATHS.LOGIN);
      }
    };

    checkAccessToken();
  }, [navigate]);

  return <>{children}</>;
};
