import React from "react";
import logo from "../assets/logo-svg.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetpwdSchema } from "../libs/ValidationScheme";
import { Link } from "react-router-dom";
import "../Styles/ForgotPwd.css";
import axios from "axios";
import { Loader } from "../utils/Loaders";
const ForgotPwd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgetpwdSchema),
  });
  const handleForgetpwd = async (data) => {
    try {
      const response = await axios.post(  
        "http://localhost:1313/api/auth/forgetpassword",
        data
      );
      const res = await req.json();
      console.log(response);
    } catch (error) {}
  };

  return (
    <>
      <main className="sign-bg d-flex align-items-center justify-content-center">
        <div className="pwd-main">
          <div className="d-flex justify-content-center gap-2">
            <img src={logo} alt="" />
            <h2 className="h2-head pt-2">HR Manager</h2>
          </div>
          <form onSubmit={handleSubmit(handleForgetpwd)} className="d-flex row">
            <div className="">
              <label className="pwd-label mt-5">Forgot password</label>
              <input
                className="input-pwd"
                type="email"
                placeholder="Enter your email address to rest your password."
                {...register("email")}
              />
              <p className="text-danger">{errors.email?.message}</p>
            </div>
            <Link to="">
              <button className="sign-in mt-4">Reset Password</button>
            </Link>
          </form>
        </div>
      </main>
    </>
  );
};

export default ForgotPwd;
