import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import clsx from "clsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AuthForm, FormHeader, Title, Subtitle, FormBody } from "../styles";
import { AuthLayout } from "../../../layouts/AuthLayout";
import { Button, inlineButtonClass } from "../../../components/Button";
import CustomInput from "../../../components/CustomInput";
import { REGULAR_PATHS } from "../../../routes/paths";
import { Checkbox } from "../../../components/CheckboxInput/styles";

import { useRegister } from "../../../server";

export type SignupRequestPayloadType = {
  email: string;
  password: string;
  passwordConfirmation: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phoneNumber: yup
    .string()
    .matches(
      /^(?:\+\d+)?\d+$/,
      "Must be a valid phone number with or without your country code"
    ),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Must be a valid email address"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 characters minimum.")
    .matches(/[a-z]/, "Password must contain at least one lowercase char")
    .matches(/[A-Z]/, "Password must contain at least one uppercase char")
    .matches(
      /[a-zA-Z]+[^a-zA-Z\s]+/,
      "at least 1 number or special char (@,!,#, etc)."
    ),
});

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const { mutateAsync } = useRegister();

  // const onSubmit = (values: unknown) => {
  //   if (!checked) {
  //     toast.error(
  //       "You must agree to the Terms of Service and Privacy Policy of Ritz before proceeding"
  //     );
  //     return;
  //   }

  //   const { email, password, firstName, lastName, phoneNumber } =
  //     values as SignupRequestPayloadType;
  //   const data = {
  //     password,
  //     email,
  //     firstName,
  //     lastName,
  //     phoneNumber,
  //   };
  //   mutateAsync({
  //     firstName: data.firstName,
  //     lastName: data.lastName,
  //     phoneNumber: data.phoneNumber,
  //     email: data.email,
  //     password: data.password,
  //   }).then((data: any) => {
  //     console.log(data)
  //   })

  //   // });
  //   //navigate("/login", { replace: true });
  //   // mutateAsync({
  //   //   ...data
  //   // } as unknown as SignupRequestPayloadType)
  //   //   .then((data: any) => {
  //   //     toast.success(data?.responseMessage);
  //   //     navigate('/login', { replace: true });
  //   //   })
  //   //   .catch((error: any) => {
  //   //     toast.error(error?.response?.data?.message || error?.response?.data?.responseMessage);
  //   //   });
  // };

  const onSubmit = async (values: unknown) => {
    if (!checked) {
      toast.error(
        "You must agree to the Terms of Service and Privacy Policy of Ritz before proceeding"
      );
      return;
    }
    const { email, password, firstName, lastName, phoneNumber } =
      values as SignupRequestPayloadType;
    const data = {
      password,
      email,
      firstName,
      lastName,
      phoneNumber,
    };

    //console.log(data);

    try {
      const response = await mutateAsync(data); // Calling the mutateAsync function with the payload
      console.log(response);
      sessionStorage.setItem("TOKEN_KEY", response.token); // Storing token key in sessionStorage upon successful registration
      // navigate("/login", { replace: true });
    } catch (error: any) {
      console.error("Registration error:", error);
      toast.error(error.message);
    }
  };

  return (
    <AuthLayout>
      <AuthForm
        className="w-full max-w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormHeader className=" mb-6">
          <Title className="text-[#4B0C67] text-[26px] font-bold">Hello!</Title>
          <Subtitle className="text-[15px] font-normal text-[#E9B903] tracking-[0.18px]">
            Register to get Started
          </Subtitle>
        </FormHeader>
        <FormBody className="flex flex-col gap-2">
          <CustomInput
            label="First Name"
            type="text"
            placeholder="Enter your first name"
            errorText={errors.firstName?.message}
            {...register("firstName")}
            className="w-full"
          />
          <CustomInput
            label="Last Name"
            type="text"
            placeholder="Enter your lastName"
            errorText={errors.lastName?.message}
            {...register("lastName")}
            className="w-full"
          />
          <CustomInput
            label=" Email Address"
            type="email"
            errorText={errors.email?.message}
            placeholder="sample@mail.com"
            {...register("email")}
          />
          <CustomInput
            label="Phone Number"
            type="text"
            placeholder="Enter your phone number"
            errorText={errors.phoneNumber?.message}
            {...register("phoneNumber")}
            className="w-full"
          />

          <CustomInput
            label="Password"
            placeholder="Password"
            type="password"
            errorText={errors.password?.message}
            {...register("password")}
          />
          {/* <CustomInput
            label='Confirm Password'
            placeholder='confirm password'
            type='password'
            errorText={errors.passwordConfirmation?.message}
            {...register('passwordConfirmation')}
          /> */}
        </FormBody>

        <div className="flex w-fit  mt-5 gap-2">
          <Checkbox
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
            id="agreeTerms"
            className="border-[#B8BCCA] cursor-pointer"
            type="checkbox"
          />
          <label
            htmlFor="agreeTerms"
            className="text-sm select-none text-neutral-700 cursor-pointer font-medium leading-tight"
          >
            I agree to the terms and conditions
          </label>
        </div>
        <Button
          name="Create account"
          //isBusy={isLoading}
          type="Register Account"
          className="text-[#FFF] text-base font-medium w-full"
        />
        <Subtitle className="text-[15px] font-normal text-[#202224] tracking-[0.18px]">
          Have an account?{" "}
          <Button
            type={"link"}
            name={"Sign In"}
            href={REGULAR_PATHS.LOGIN}
            className={clsx("text-[#4B0C67]", inlineButtonClass)}
          />{" "}
        </Subtitle>
      </AuthForm>
    </AuthLayout>
  );
};

export default Signup;
