// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
 
// const AddEmployee = () => {
//   const [employee, setEmployee] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     dob: "",
//     password: "",
//     fname: "",
//     salary: "",
//     address: "",
//     jod: "",
//     category: "",
//     gender: "",
//     marritalStatus: "",
//     status: "",
//     site: "",
//     work: "",
//     image: "",
//   });
//   const [category, setCategory] = useState([]);
//   const navigate = useNavigate()
 
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     axios
//     .get("https://emsproject-production.up.railway.app/api/category/",{
//       headers: {
//         "Authorization": `Bearer ${token}`
//       }
//     })
 
//       .then((result) => {
//         if (result.data) {
//           setCategory(result.data);
//         } else {
//           alert(result.data.Error);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);
 
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const formData = new FormData();
//     formData.append('name', employee.name);
//     formData.append('email', employee.email);
//     formData.append('mobile', employee.mobile);
//     formData.append('dob', employee.dob);
//     formData.append('password', employee.password);
//     formData.append('fname', employee.fname);
//     formData.append('address', employee.address);
//     formData.append('jod', employee.jod);
//     formData.append('salary', employee.salary);
//     formData.append('gender', employee.gender);
//     formData.append('marritalStatus', employee.marritalStatus);
//     formData.append('status', employee.status);
//     formData.append('site', employee.site);
//     formData.append('work', employee.work);
//     formData.append('image', employee.image);
//     formData.append('category', employee.category);
 
//     const token = localStorage.getItem('token');
 
 
//     axios.post('https://emsproject-production.up.railway.app/api/employee/', formData
//     ,{  headers: {
//       "content-type": "application/json",
//       "Authorization": `Bearer ${token}` // Include the token in the Authorization header
//       },})
 
//     .then(result => {
//         if(result.data) {
//             navigate('/dashboard/employee')
//         } else {
//             alert(result.data.Error)
//         }
//     })
//     .catch(err => console.log(err))
//   }
 
 
 
 
//   const marritalStatuses = [
//     { marritalstatusName: 'Married' },
//     { marritalstatusName: 'Unmarried' },
//     { marritalstatusName: 'Divorced' }
// ]
// const [marritalStatus, setMarritalStatus] = useState([])
// const changeMarritalStatus = (e) => {
//     setMarritalStatus(e.target.value)
//     setEmployee({ ...employee, marritalStatus: e.target.value })
// }
 
// const statuses = [
//   { statusName: 'Current' },
//   { statusName: 'Ex-Employee' },
//   { statusName: 'New Joining' },
//   { statusName: 'Transferred In' },
//   { statusName: 'Transferred Out' },
//   { statusName: 'Exited Employee' }
// ]
// const [status, setStatus] = useState([])
// const changeStatus = (e) => {
//   setStatus(e.target.value)
//   setEmployee({ ...employee, status: e.target.value })
// }
 
// const sites = [
//   { siteName: 'New Delhi' },
//   { siteName: 'Mumbai' },
//   { siteName: 'Bangalore' },
//   { siteName: 'Patna' },
//   { siteName: 'Kolkata' },
//   { siteName: 'Pune' }
// ]
// const [site, setSite] = useState([])
// const changeSite = (e) => {
//   setSite(e.target.value)
//   setEmployee({ ...employee, site: e.target.value })
// }
// const works = [
//   { workName: 'Permanemt' },
//   { workName: 'Full Time' },
//   { workName: 'Part Time' },
//   { workName: 'Contract Basis' }
// ]
// const [work, setWork] = useState([])
// const changeWork = (e) => {
//   setWork(e.target.value)
//   setEmployee({ ...employee, work: e.target.value })
// }
 
//   return (
//     <>
//       <div className="add_emp_bg">
//         <div className="d-flex justify-content-center align-items-center">
//           <div className="p-3 rounded w-50 border mt-5 mb-1">
//             <h3 className="text-center">Add Employee</h3>
//             <form className="row g-1" onSubmit={handleSubmit}>
//               <div className="col-12">
//                 <label for="inputName" className="form-label">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control rounded-0"
//                   id="inputName"
//                   placeholder="Enter Name"
//                   onChange={(e) =>
//                     setEmployee({ ...employee, name: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="col-12">
//                 <label for="inputEmail4" className="form-label">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control rounded-0"
//                   id="inputEmail4"
//                   placeholder="Enter Email"
//                   autoComplete="off"
//                   onChange={(e) =>
//                     setEmployee({ ...employee, email: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="col-12">
//                 <label for="inputmobile" className="form-label">
//                   Mobile No.
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control rounded-0"
//                   id="inputmobile"
//                   placeholder="Enter Mobile No."
//                   onChange={(e) =>
//                     setEmployee({ ...employee, mobile: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="col-12">
//                 <label for="inputdob" className="form-label">
//                   Date of Birth
//                 </label>
//                 <input
//                   type="date"
//                   className="form-control rounded-0"
//                   id="inputdob"
//                   placeholder="Enter Date of Birth"
//                   onChange={(e) =>
//                     setEmployee({ ...employee, dob: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="col-12">
//                 <label for="inputPassword4" className="form-label">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control rounded-0"
//                   id="inputPassword4"
//                   placeholder="Enter Password"
//                   onChange={(e) =>
//                     setEmployee({ ...employee, password: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="col-12">
//                 <label for="inputFname" className="form-label">
//                   Father's Name
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control rounded-0"
//                   id="inputFname"
//                   placeholder="Enter Father's Name"
//                   onChange={(e) =>
//                     setEmployee({ ...employee, fname: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="col-12">
//                 <label for="inputSalary" className="form-label">
//                   Salary Monthly
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control rounded-0"
//                   id="inputSalary"
//                   placeholder="Enter Monthly Salary"
//                   autoComplete="off"
//                   onChange={(e) =>
//                     setEmployee({ ...employee, salary: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="col-12">
//                 <label for="inputAddress" className="form-label">
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control rounded-0"
//                   id="inputAddress"
//                   placeholder="Address"
//                   autoComplete="off"
//                   onChange={(e) =>
//                     setEmployee({ ...employee, address: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="col-12">
//                 <label for="inputjod" className="form-label">
//                   Date of Joining
//                 </label>
//                 <input
//                   type="date"
//                   className="form-control rounded-0"
//                   id="inputjod"
//                   placeholder="Enter Date of Joining"
//                   onChange={(e) =>
//                     setEmployee({ ...employee, jod: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="col-12">
//                 <label for="category" className="form-label">
//                   Category / Department
//                 </label>
//                 <select name="category" id="category" className="form-select form-control rounded-0"
//                   onChange={(e) => setEmployee({ ...employee, category: e.target.value })}>
//                   {category.map((c) => {
//                     return <option value={c.id}>{c.categoryName}</option>;
//                   })}
//                 </select>
//               </div>
//               <div className="col-12">
//                 <div className='basic-details-form-8'>
//                   <div className='form-label'>
//                     Select Gender:
//                   </div>
//                   <div className='gender-btn'>
//                     <span className='me-2'>
//                       <input type="radio" id='radio-1' name='gender'
//                         value='male'
//                         // checked="checked"
//                         onChange={(e) =>
//                           setEmployee({ ...employee, gender: e.target.value })
//                         }
//                       />
//                       <label htmlFor="radio-1">
//                         Male
//                       </label>
//                     </span>
 
//                     <span className='me-2'>
//                       <input type="radio" id='radio-2' name='gender'
//                         value='female'
//                         onChange={(e) =>
//                           setEmployee({ ...employee, gender: e.target.value })
//                         }
//                       />
//                       <label htmlFor="radio-2">
//                         Female
//                       </label>
//                     </span>
 
//                     <span>
//                       <input type="radio" id='radio-3' name='gender'
//                         value='trans'
//                         onChange={(e) =>
//                           setEmployee({ ...employee, gender: e.target.value })
//                         }
//                       />
//                       <label htmlFor="radio-3">
//                         Trans
//                       </label>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12">
//                 <label for="inputName" className="form-label">
//                   Marrital Status
//                 </label>
//                 <select
//                   className="form-control rounded-0 form-select"
//                   id="inputName"
//                   value={marritalStatus}
//                   onChange={changeMarritalStatus}
//                 >
//                   <option value="">Select Status</option>
//                   {marritalStatuses.map((e) => {
//                     return <option value={e.marritalstatusName}>{e.marritalstatusName}</option>;
//                   })}
//                 </select>
//               </div>
//               <div className="col-12">
//                 <label for="inputName" className="form-label">
//                   Status
//                 </label>
//                 <select
//                   className="form-control rounded-0 form-select"
//                   id="inputName"
//                   value={status}
//                   onChange={changeStatus}
//                 >
//                   <option value="">Select Employee Status</option>
//                   {statuses.map((e) => {
//                     return <option value={e.statusName}>{e.statusName}</option>;
//                   })}
//                 </select>
//               </div>
//               <div className="col-12">
//                 <label for="inputName" className="form-label">
//                   Site
//                 </label>
//                 <select
//                   className="form-control rounded-0 form-select"
//                   id="inputName"
//                   value={site}
//                   onChange={changeSite}
//                 >
//                   <option value="">Select Site</option>
//                   {sites.map((e) => {
//                     return <option value={e.siteName}>{e.siteName}</option>;
//                   })}
//                 </select>
//               </div>
//               <div className="col-12">
//                 <label for="inputName" className="form-label">
//                   Work Type
//                 </label>
//                 <select
//                   className="form-control rounded-0 form-select"
//                   id="inputName"
//                   value={work}
//                   onChange={changeWork}
//                 >
//                   <option value="">Select Work Type</option>
//                   {works.map((e) => {
//                     return <option value={e.workName}>{e.workName}</option>;
//                   })}
//                 </select>
//               </div>
//               <div className="col-12 mb-3">
//                 <label className="form-label" for="inputGroupFile01">
//                   Select Image
//                 </label>
//                 <input
//                   type="file"
//                   className="form-control rounded-0"
//                   id="inputGroupFile01"
//                   name="image"
//                   onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })}
//                 />
//               </div>
//               <div className="col-12">
//                 <button type="submit" className="btn btn-primary w-100">
//                   Add Employee
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
 
// export default AddEmployee;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    password: "",
    fname: "",
    salary: "",
    address: "",
    jod: "",
    category: "",
    gender: "",
    marritalStatus: "",
    status: "",
    site: "",
    work: "",
    image: null,
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://mohitbyproject-production.up.railway.app/api/category/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        if (result.data) {
          setCategories(result.data);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userData", JSON.stringify(employee));
    formData.append("file", employee.image); // Updated


    const token = localStorage.getItem("token");

    axios
      .post("https://mohitbyproject-production.up.railway.app/api/employee/", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        if (result.data) {
          navigate("/dashboard/employee");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  const marritalStatuses = ["Married", "Unmarried", "Divorced"];
  const statuses = [
    "Current",
    "Ex-Employee",
    "New Joining",
    "Transferred In",
    "Transferred Out",
    "Exited Employee",
  ];
  const sites = ["New Delhi", "Mumbai", "Bangalore", "Patna", "Kolkata", "Pune"];
  const works = ["Permanent", "Full Time", "Part Time", "Contract Basis"];

  return (
    <div className="add_emp_bg">
      <div className="d-flex justify-content-center align-items-center">
        <div className="p-3 rounded w-50 border mt-5 mb-1">
          <h3 className="text-center">Add Employee</h3>
          <form className="row g-1" onSubmit={handleSubmit}>
            <div className="col-12">
              <label htmlFor="inputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputName"
                placeholder="Enter Name"
                onChange={(e) =>
                  setEmployee({ ...employee, name: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control rounded-0"
                id="inputEmail4"
                placeholder="Enter Email"
                autoComplete="off"
                onChange={(e) =>
                  setEmployee({ ...employee, email: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputmobile" className="form-label">
                Mobile No.
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputmobile"
                placeholder="Enter Mobile No."
                onChange={(e) =>
                  setEmployee({ ...employee, mobile: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputdob" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control rounded-0"
                id="inputdob"
                onChange={(e) =>
                  setEmployee({ ...employee, dob: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control rounded-0"
                id="inputPassword4"
                placeholder="Enter Password"
                onChange={(e) =>
                  setEmployee({ ...employee, password: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputFname" className="form-label">
                Father's Name
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputFname"
                placeholder="Enter Father's Name"
                onChange={(e) =>
                  setEmployee({ ...employee, fname: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputSalary" className="form-label">
                Salary Monthly
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputSalary"
                placeholder="Enter Monthly Salary"
                autoComplete="off"
                onChange={(e) =>
                  setEmployee({ ...employee, salary: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputAddress"
                placeholder="Enter Address"
                autoComplete="off"
                onChange={(e) =>
                  setEmployee({ ...employee, address: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputjod" className="form-label">
                Date of Joining
              </label>
              <input
                type="date"
                className="form-control rounded-0"
                id="inputjod"
                onChange={(e) =>
                  setEmployee({ ...employee, jod: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="category" className="form-label">
                Category / Department
              </label>
              <select
                name="category"
                id="category"
                className="form-select form-control rounded-0"
                onChange={(e) =>
                  setEmployee({ ...employee, category: e.target.value })
                }
              >
                <option value="">Select Category</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.categoryName}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <label className="form-label">Select Gender:</label>
              <div className="gender-btn">
                <span className="me-2">
                  <input
                    type="radio"
                    id="radio-1"
                    name="gender"
                    value="male"
                    onChange={(e) =>
                      setEmployee({ ...employee, gender: e.target.value })
                    }
                  />
                  <label htmlFor="radio-1">Male</label>
                </span>
                <span className="me-2">
                  <input
                    type="radio"
                    id="radio-2"
                    name="gender"
                    value="female"
                    onChange={(e) =>
                      setEmployee({ ...employee, gender: e.target.value })
                    }
                  />
                  <label htmlFor="radio-2">Female</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="radio-3"
                    name="gender"
                    value="trans"
                    onChange={(e) =>
                      setEmployee({ ...employee, gender: e.target.value })
                    }
                  />
                  <label htmlFor="radio-3">Trans</label>
                </span>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="inputMarritalStatus" className="form-label">
                Marrital Status
              </label>
              <select
                className="form-control rounded-0 form-select"
                id="inputMarritalStatus"
                onChange={(e) =>
                  setEmployee({ ...employee, marritalStatus: e.target.value })
                }
              >
                <option value="">Select Status</option>
                {marritalStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="inputStatus" className="form-label">
                Status
              </label>
              <select
                className="form-control rounded-0 form-select"
                id="inputStatus"
                onChange={(e) =>
                  setEmployee({ ...employee, status: e.target.value })
                }
              >
                <option value="">Select Status</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="inputSite" className="form-label">
                Select Site
              </label>
              <select
                className="form-control rounded-0 form-select"
                id="inputSite"
                onChange={(e) =>
                  setEmployee({ ...employee, site: e.target.value })
                }
              >
                <option value="">Select Site</option>
                {sites.map((site) => (
                  <option key={site} value={site}>
                    {site}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="inputWork" className="form-label">
                Select Work Type
              </label>
              <select
                className="form-control rounded-0 form-select"
                id="inputWork"
                onChange={(e) =>
                  setEmployee({ ...employee, work: e.target.value })
                }
              >
                <option value="">Select Work Type</option>
                {works.map((work) => (
                  <option key={work} value={work}>
                    {work}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="inputImage" className="form-label">
                Upload Image
              </label>
              <input
                type="file"
                className="form-control rounded-0"
                id="inputImage"
                onChange={(e) =>
                  setEmployee({ ...employee, image: e.target.files[0] })
                }
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Add Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
