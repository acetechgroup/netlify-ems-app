import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 
const AddDepartments = () => {
 
    const [department, setDepartment] = useState([])
 
    useEffect(()=> {
        const token = localStorage.getItem('token');
 
        axios.get('https://emsbymohit-production.up.railway.app/api/employee/',{
            headers: {
                "Authorization": `Bearer ${token}`
              }
            })
       
        .then(result => {
            if(result.data) {
                setDepartment(result.data);
                console.log(token)
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])

    const handleDelete = (departmentId) => {
        const token = localStorage.getItem("token");
        axios
          .delete("https://emsbymohit-production.up.railway.app/api/employee/" + departmentId, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((result) => {
            if (result.data) {
              window.location.reload();
            } else {
              alert(result.data.Error);
            }
          })
          .catch((err) => console.log(err));
      };

  return (
    <>
    <div className='w-100'>
    <div className='row category-bg'>
       
        <div className=" p-2 d-flex justify-content-center shadow bg-head">
                <h4>Departments</h4>
            </div>
            <div className=' px-5 mt-3 '>
        <Link 
        to="/dashboard/addNewDepartment" 
        className='btn btn-success'
        >
            Add New Department
        </Link>
        <div className='row mt-3'>
            <table className='table'>
            <thead>
                  <tr>
                    <th>Dep. Id</th>
                    <th>Dep. Name</th>
                    <th>HOD</th>
                    <th>Dep. Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {department.map((e) => (
                    <tr key={e.departmentId}>
                      <td>{e.id}</td>
                      <td>{e.depName}</td>
                      <td>{e.hod}</td>
                      <td>{e.depLocation}</td>
                      <td>
                        <Link
                          to={`/dashboard/edit_department/` + e.departmentId}
                          className="btn btn-info btn-sm me-2 bi-pencil"
                        >
                          {/* Edit Branch */}
                        </Link>
                        <button
                          className="btn btn-warning btn-sm bi-trash3"
                          onClick={() => handleDelete(e.departmentId)}
                        >
                          {/* Delete Branch */}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}
 
export default AddDepartments