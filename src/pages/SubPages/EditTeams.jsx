import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../lib/ValidationScheme";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import successIcon from "../../assets/Success Icon.svg";
import Swal from "sweetalert2";


const EditTeams = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data) => console.log(data);

   
const saved = ()=>{
  Swal.fire({
    title: "Saved Successfully",
    text: "EditTeam has been created successfully! ",
    icon: "success"
  });
}
  return (
    <>
      <main className="mt-lg-5 container">
        <div className="mt-4">
          <h1 className="mb-4">Edit Team</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* 1 */}
            <div className="mb-5">
              <div className=" gap-5 mb-4">
                <div className="col-lg mb-3 mb-lg-0 w-100">
                  <label>Team Name</label>
                  <input
                    type="text"
                    placeholder="Product name"
                    className="w-100 input-employee"
                    {...register("generalFirst")}
                  />
                  <p className="text-danger">{errors.generalFirst?.message}</p>
                </div>
                <div className="col-lg w-100">
                  <label>Team Manager</label>
                  <select
                    name="gender"
                    id="gender"
                    className="input-employee w-100"
                    
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="married">Option 1</option>
                    <option value="single">Option 2</option>
                    <option value="in a relationship">Option 2</option>
                  </select>
                </div>
              </div>
              <div className="col-lg w-100">
                <label>Team Members</label>
                <select
                  name="gender"
                  id="gender"
                  className="input-employee w-100"
                 
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="married">Option 1</option>
                  <option value="single">Option 2</option>
                  <option value="in a relationship">Option 2</option>
                </select>
              </div>
            </div>
            {/* end */}
            <div className="d-lg-flex gap-3">
              <Link className="w-25" to="">
                <button className="cancel">Cancel</button>
              </Link>
              <button
                className="save mt-3 mt-lg-0"
                onClick={saved}
              >
                Save & Continue
              </button>
            </div>
            
          </form>
        </div>
      </main>
    </>
  );
};

export default EditTeams;
