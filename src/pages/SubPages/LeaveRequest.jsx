import React from "react";
import backIcon from "../../assets/backIcon.svg";
import { Link, useParams } from "react-router-dom";
import { leave } from "../../tables";
import ladyImg from "../../assets/leavelady.svg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import successIcon from "../../assets/Success Icon.svg";
import Swal from "sweetalert2";
Swal;
const LeaveRequest = () => {
  const params = useParams();
  const itemId = params.itemId;
  const selectedItem = leave.find((item) => item.id === parseInt(itemId));

  const Approve = () => {
    Swal.fire({
      title: "Approved Successfully",
      text: "Leave request has been approved! ",
      icon: "success"
    });
  };

  const Decline = ()=>{
    Swal.fire({
      title: "Declined Successfully ",
      text: "Leave request has been declined successfully! ",
      icon: "error"
    });
  }
  return (
    <>
      <main className="mt-lg-5 container">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="mt-4">Leave Request</h1>
          <Link to="/admin-dashboard/leaveboard">
            <img src={backIcon} className="mt-4" />
          </Link>
        </div>
        <hr />
        {selectedItem && (
          <div>
            {/* <p>Action: {selectedItem.action}</p>
            <p>
              Icon: <img src={selectedItem.icon} alt="" />
            </p> */}
            <div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <img src={ladyImg} alt="" />
                  <div className="pt-1 name">
                    <h1 className="m-0 name">Temilade Openiyi</h1>
                    <p>temixalade23@gmail..com</p>
                  </div>
                </div>
                <button className="view">View Profile</button>
              </div>
              <h1>Leave Details</h1>
              <div className="d-lg-flex gap-5">
                <div>
                  <div className="d-flex align-items-center gap-4 ">
                    <p className="mt-2">Leave Type:</p>
                    <h6>{selectedItem.leave}</h6>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <p>Start Date:</p>
                    <h6>{selectedItem.start}</h6>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <p>Description:</p>
                    <h6>Nill</h6>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center gap-4">
                    <p>Duration:</p>
                    <h6>{selectedItem.days}</h6>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <p>End Date:</p>
                    <h6>{selectedItem.end}</h6>
                  </div>
                  <div className="d-flex align-items-center gap-lg-4">
                    <p>Status:</p>
                    <p
                      className={`action-status m-0 ms-5 ms-lg-3 text-center ${selectedItem.action
                        .replace(/\s+/, "-")
                        .toLowerCase()}`}
                    >
                      {selectedItem.action}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <hr />
        <div className="d-flex align-items-center gap-4">
          <div>
            <h5>Leave Balance:</h5>
          </div>
          <h6>(8) Sick leave, (6) Annual Leave</h6>
        </div>
        <hr />
        <div className="d-lg-flex gap-3">
          <button className="save mt-3 mt-lg-0" onClick={Approve}>
            Approve
          </button>
          <button className="cancel can" onClick={Decline}>
            Decline
          </button>
        </div>
      </main>
    </>
  );
};

export default LeaveRequest;
