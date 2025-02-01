import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewBranch = () => {
  const [branch, setBranch] = useState({
    branchName: "",
    branchAddress: "",
    branchStrength: "",
    branchManagre: "",
  });
  // const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   axios
  //     .get("https://emspro-production.up.railway.app/api/category/", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((result) => {
  //       if (result.data) {
  //         setCategories(result.data);
  //       } else {
  //         alert(result.data.Error);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userData", JSON.stringify(branch));
    // formData.append("file", branch.image); // Updated


    const token = localStorage.getItem("token");

    axios
      .post("https://emspro-production.up.railway.app/api/employee/", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        if (result.data) {
          navigate("/dashboard/addBranches");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  // const marritalStatuses = ["Married", "Unmarried", "Divorced"];
  // const statuses = [
  //   "Current",
  //   "Ex-Employee",
  //   "New Joining",
  //   "Transferred In",
  //   "Transferred Out",
  //   "Exited Employee",
  // ];
  // const sites = ["New Delhi", "Mumbai", "Bangalore", "Patna", "Kolkata", "Pune"];
  // const works = ["Permanent", "Full Time", "Part Time", "Contract Basis"];

  return (
    <div className="add_dep_bg">
      <div className="d-flex justify-content-center align-items-center">
        <div className="p-3 rounded w-50 border mt-5 mb-1">
          <h3 className="text-center">Add Branch</h3>
          <form className="row g-1" onSubmit={handleSubmit}>
            <div className="col-12">
              <label htmlFor="inputBName" className="form-label">
                Branch Name
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputBName"
                placeholder="Enter Branch Name"
                onChange={(e) =>
                  setBranch({ ...branch, branchName: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputBAddress" className="form-label">
                Branch Address
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputBAddress"
                placeholder="Enter Branch Address"
                autoComplete="off"
                onChange={(e) =>
                  setBranch({ ...branch, branchAddress: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputBStrength" className="form-label">
                Branch Strength
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputBStrength"
                placeholder="Enter Branch Strength"
                onChange={(e) =>
                  setBranch({ ...branch, branchStrength: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputBManager" className="form-label">
                Branch Manager
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputBManager"
                placeholder="Enter Manager's Name"
                onChange={(e) =>
                  setBranch({ ...branch, fname: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Add Branch
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewBranch;
