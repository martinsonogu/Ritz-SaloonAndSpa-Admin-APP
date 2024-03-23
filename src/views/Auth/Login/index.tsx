import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
//import { toast } from 'react-hot-toast';
import clsx from 'clsx';
import { AuthForm, FormHeader, Title, Subtitle } from '../styles';
//import { useAuth } from '../../../hooks';
//import { setToLocal } from '../../../utils';
import { AuthLayout } from '../../../layouts/AuthLayout';
import { Button,inlineButtonClass } from '../../../components/Button';
import CustomInput from '../../../components/CustomInput'
import { PRIVATE_PATHS, REGULAR_PATHS } from '../../../routes/paths';
//import { LoginResponseType } from '../../../services/hooks/types';
import { Checkbox } from '../../../components/CheckboxInput/styles';

export const Login = () => {
  //const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || PRIVATE_PATHS.OVERVIEW;
  const { register, handleSubmit } = useForm();

  const onSubmit = (values: unknown) => {
    console.log(values)
    navigate(from, { replace: true });
    // mutateAsync(values as LoginRequestPayloadType)
    //   .then((data: LoginResponseType) => {
    //     setToLocal('key', JSON.stringify(data?.data.token));
    //     setToLocal('user', JSON.stringify(data?.data));
    //     setAuth(data?.data);
    //     toast.success(data?.message);
    //     navigate(from, { replace: true });
    //   })
    //   .catch((error: any) => {
    //     toast.error(error?.response?.data?.message || error?.response?.data?.responseMessage);
    //   });
  };

  return (
    <AuthLayout>
      <AuthForm className='w-full max-w-[500px]' onSubmit={handleSubmit(onSubmit)}>
        <FormHeader className='flex flex-col'>
          <Title className='text-[#4B0C67] text-[26px] font-bold'>Welcome Admin</Title>
          <Subtitle className='text-[#E9B903] text-[18px]'>
            Login to continue
            {/* <Button
              type={'link'}
              name={'Sign Up'}
              href={REGULAR_PATHS.SIGN_UP}
              className={clsx('text-[#5329D3]', inlineButtonClass)}
            />{' '} */}
          </Subtitle>
        </FormHeader>
        <div className='flex w-full flex-col mt-[50px] gap-[30px]'>
          <CustomInput
            {...register('username', {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            })}
            label='Email Address'
            placeholder='sample@mail.com'
          />
          <CustomInput
            {...register('password', { required: true })}
            type='password'
            label='Password'
            placeholder=''
          />
        </div>
        <p className='text-[#6F7482] text-sm leading-[19px] tracking-tight font-normal mt-5'>
          Forgot password?{' '}
          <Button
            type={'link'}
            name={'Reset Password'}
            href={REGULAR_PATHS.FORGOT_PASSWORD}
            className={clsx(inlineButtonClass, 'text-red-400 text-sm')}
          />
        </p>
        <div className='flex w-fit  mt-5 gap-2'>
          <Checkbox id='rememberMe' className='border-[#B8BCCA] cursor-pointer' type='checkbox' />
          <label
            htmlFor='rememberMe'
            className='text-sm select-none text-neutral-700 cursor-pointer font-medium leading-tight'
          >
            Keep me logged in
          </label>
        </div>
        <Button
          type={'submit'}
          //isBusy={isLoading}
          className='text-base text-white  font-medium'
          name={'Sign In'}
        />

        <Subtitle className='text-[#] mt-10 text-[18px]'>
            Dont have an Account?{''}{''}
            <Button
              type={'link'}
              name={'Register Account'}
              href={REGULAR_PATHS.SIGN_UP}
              className={clsx('text-[#4B0C67]', inlineButtonClass)}
            />
          </Subtitle>
      </AuthForm>
    </AuthLayout>
  );
};

export default Login;
