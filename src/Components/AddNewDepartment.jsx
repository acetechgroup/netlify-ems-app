import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewDepartment = () => {
  const [department, setDepartment] = useState({
    depName: "",
    hod: "",
    depLocation: "",
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
    formData.append("userData", JSON.stringify(department));
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
          navigate("/dashboard/addDepartments");
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
          <h3 className="text-center">Add Department</h3>
          <form className="row g-1" onSubmit={handleSubmit}>
            <div className="col-12">
              <label htmlFor="inputDName" className="form-label">
                Department Name
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputDName"
                placeholder="Enter Department Name"
                onChange={(e) =>
                    setDepartment({ ...department, depName: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputDhod" className="form-label">
                Department HOD
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputDhod"
                placeholder="Enter HOD Name"
                autoComplete="off"
                onChange={(e) =>
                    setDepartment({ ...department, hod: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputDLocation" className="form-label">
                Department Location
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputDLocation"
                placeholder="Enter Department Location Address"
                onChange={(e) =>
                    setDepartment({ ...department, branchStrength: e.target.value })
                }
              />
            </div>
            
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Add Department
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewDepartment;
