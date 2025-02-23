import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../api/apiClient";
import TextField from "../TextField";
import { useStoreContext } from "../contextApi/ContextApi";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const { setToken } = useStoreContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const loginHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await apiClient.post(
        "/api/auth/public/login",
        data
      );
      //store the token in localstorage
      console.log(response.token);
      setToken(response.token);
      localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));

      toast.success("Login Successful!");
      reset();
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      const errorMessage = error.response?.data?.message || "Login Failed!";
      toast.error(errorMessage);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>
        <hr className="mb-6 border-gray-300" />

        <form onSubmit={handleSubmit(loginHandler)} className="space-y-4">
          <TextField
            label="Username"
            required
            id="username"
            type="text"
            message="*Username is required"
            placeholder="Enter your username"
            register={register}
            errors={errors}
            validation={{ required: true }}
          />

          <TextField
            label="Password"
            required
            id="password"
            type="password"
            message="*Password must be at least 6 characters"
            placeholder="Enter your password"
            register={register}
            errors={errors}
            validation={{ required: true, minLength: 6 }}
          />

          <button
            disabled={loader}
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            {loader ? "Loading..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account?{" "}
          <Link className="text-blue-600 hover:underline" to="/register">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
