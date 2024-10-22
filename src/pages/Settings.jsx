import React from "react";
import ladySetting from "../assets/Setting Dp.svg";
import { useState } from "react";
import { formSchema } from "../lib/ValidationScheme";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import successIcon from "../assets/Success Icon.svg";
import Swal from "sweetalert2"

const Settings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data) => console.log(data);
  
const save = ()=>{
  Swal.fire({
    title: "Saved Successfully",
    text: "Employee settings has been changed successfully",
    icon: "success"
  });
}
  return (
    <>
      <main className="mt-lg-5 container">
        <div>
          <h1 className="pt-4">Settings</h1>
          <p className="title">Dashboard/Settings</p>
        </div>
        <form
          className="border border-2 rounded p-4 mt-4 d-flex row gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="d-md-flex justify-content-between gap-5">
            <div>
              <p className="title m-0">Profile Information</p>
              <p>Edit your profile information</p>
            </div>
            {/* Form */}
            <div className="settings-width">
              <div>
                <div>
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    placeholder="Akinwumi Aisha"
                    className="input-employee w-100"
                    {...register("firstName")}
                  />
                  <p className="text-danger">{errors.firstName?.message}</p>
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <label htmlFor="">Email Address</label>
                    <Link className="text-primary settings-link-color" to="/auth/forgotpassword">Change Account Email</Link>
                  </div>
                  <input
                    type="email"
                    placeholder="Akinwumi Aisha"
                    className="w-100 input-employee"
                    {...register("email")}
                  />
                  <p className="text-danger">{errors.email?.message}</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
          {/* Security */}
          <div className="d-md-flex justify-content-between gap-5">
            <div>
              <p className="title m-0">Security</p>
            </div>
            <div className="settings-width mt-2 mt-lg-0">
              <div>
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <label htmlFor="">Password</label>
                    <Link className="text-primary settings-link-color">Change Password</Link>
                  </div>
                  <input
                    type="password"
                    placeholder="xxxxxxxx"
                    className="input-employee w-100"
                    {...register("password")}
                  />
                  <p className="text-danger">{errors.password?.message}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Upload  Photo */}
          <div className="d-md-flex justify-content-between gap-5">
            <div>
              <p className="title m-0">Upload Photo</p>
            </div>
            <div className="settings-width">
              <div>
                <p className="title mt-2 mt-lg-0">Profile pic</p>
                <img src={ladySetting} alt="" className="mb-1" />
                <p className="text-secondary ">
                  Your profile pic will be visible next to your name in your
                  profile. Your image should be at least 200x200px and must be
                  in JPG or PNG format.
                </p>
              </div>
            </div>
          </div>
          <div className="d-lg-flex gap-3">
            <Link className="w-25" to="">
              <button className="cancel">Cancel</button>
            </Link>
            <button
              className="save mt-3 mt-lg-0"
              onClick={save}
            >
              Save
            </button>
          </div>

        </form>
      </main>
    </>
  );
};

export default Settings;
