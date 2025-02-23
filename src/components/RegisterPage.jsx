import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../api/apiClient";
import TextField from "../TextField";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

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

  const registerHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await apiClient.post(
        "/api/auth/public/register",
        data
      );
      reset();
      navigate("/login");
      toast.success("Registration Successful!");
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.message || "Registration Failed!";
      toast.error(errorMessage);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h1>
        <hr className="mb-6 border-gray-300" />

        <form onSubmit={handleSubmit(registerHandler)} className="space-y-4">
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
            label="Email"
            required
            id="email"
            type="email"
            message="*Valid email is required"
            placeholder="Enter your email"
            register={register}
            errors={errors}
            validation={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            }}
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
            {loader ? "Loading..." : "Register"}
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{' '}
          <Link className="text-blue-600 hover:underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
