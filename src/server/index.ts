import { useQuery, useMutation } from "react-query";
import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { setToSession } from "../utils";

const baseUrl = "https://ritz-salon-and-spa-240adce6f1a8.herokuapp.com/v1";

export interface registerParams {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
}

const request = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*", // For CORS support to work
    "Content-Type": "application/json",
  },
});

//register
export const useRegister = () => {
  return useMutation(
    async ({
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    }: registerParams) => {
      const objData = {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      };

      try {
        const response = await request.post("auth/register", objData);
        console.log(response);
        if (response.status !== 200) {
          throw new Error("Failed to register user");
        }
        // Storing token key in sessionStorage upon successful registration
        sessionStorage.setItem("TOKEN_KEY", response.data.data.token);
        return response.data;
      } catch (error: any) {
        // Handle errors
        console.error("Registration error:", error);
        throw new Error(error.response.data.message);
      }
    }
  );
};
