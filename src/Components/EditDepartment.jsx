import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditDepartment = () => {
  const { departmentId } = useParams()
  const [department, setDepartment] = useState({
      depName: "",
      hod: "",
      depLocation: "",
    });
  const navigate = useNavigate()

  useEffect(() => {
    

    axios.get('https://emspro-production.up.railway.app/api/employee/' + departmentId)
      .then(result => {
        setDepartment({
          ...department,
          depName: result.data.depName,
          hod: result.data.hod,
          depLocation: result.data.depLocation,
        })
      }).catch(err => console.log(err))
  }, [])
  

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put('https://emspro-production.up.railway.app/api/employee/' + departmentId, department)
      .then(result => {
        if (result.data) {
          navigate('/dashboard/addDepartments')
        } else {
          alert(result.data.Error)
        }
      }).catch(err => console.log(err))
  }

  return (
    <div className="add_dep_bg">
      <div className="d-flex justify-content-center align-items-center">
        <div className="p-3 rounded w-50 border mt-5 mb-1">
          <h3 className="text-center">Edit Department</h3>
        

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
              value={department.depName}
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
              value={department.hod}
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
              value={department.depLocation}
              onChange={(e) =>
                setDepartment({ ...department, depLocation: e.target.value })
              }
            />
          </div>
          
          
          <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Udate Department
              </button>
            </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default EditDepartment

