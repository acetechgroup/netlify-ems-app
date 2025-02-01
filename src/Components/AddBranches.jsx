import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 
const AddBranches = () => {
 
    const [branch, setBranch] = useState([])
 
    useEffect(()=> {
        const token = localStorage.getItem('token');
 
        axios.get('https://emsbymohit-production.up.railway.app/api/employee/',{
            headers: {
                "Authorization": `Bearer ${token}`
              }
            })
       
        .then(result => {
            if(result.data) {
                setBranch(result.data);
                console.log(token)
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])

    const handleDelete = (branchId) => {
        const token = localStorage.getItem("token");
        axios
          .delete("https://emsbymohit-production.up.railway.app/api/employee/" + branchId, {
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
                <h4>Branches</h4>
            </div>
            <div className=' px-5 mt-3 '>
        <Link 
        to="/dashboard/addNewBranch" 
        className='btn btn-success'
        >
            Add New Branch
        </Link>
        <div className='row mt-3'>
            <table className='table'>
            <thead>
                  <tr>
                    <th>Branch Id</th>
                    <th>Branch Name</th>
                    <th>Branch Address</th>
                    <th>Branch Strength</th>
                    <th>Branch Manager</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {branch.map((e) => (
                    <tr key={e.branchId}>
                      <td>{e.id}</td>
                      <td>{e.branchName}</td>
                      <td>{e.address}</td>
                      <td>{e.Strength}</td>
                      <td>{e.branchManagre}</td>
                      <td>
                        <Link
                          to={`/dashboard/edit_branch/` + e.branchId}
                          className="btn btn-info btn-sm me-2"
                        >
                          Edit Branch
                        </Link>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => handleDelete(e.branchId)}
                        >
                          Delete Branch
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
 
export default AddBranches