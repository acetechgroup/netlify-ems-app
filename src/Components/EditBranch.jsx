import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditBranch = () => {
  const { branchId } = useParams()
  const [branch, setBranch] = useState({
    branchName: "",
    branchAddress: "",
    branchStrength: "",
    branchManagre: "",
  });
  const navigate = useNavigate()

  useEffect(() => {
    

    axios.get('https://emspro-production.up.railway.app/api/employee/' + branchId)
      .then(result => {
        setBranch({
          ...branch,
          branchName: result.data.branchName,
          branchAddress: result.data.branchAddress,
          branchStrength: result.data.branchStrength,
          branchManagre: result.data.branchManagre,
        })
      }).catch(err => console.log(err))
  }, [])
  

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put('https://emspro-production.up.railway.app/api/employee/' + branchId, branch)
      .then(result => {
        if (result.data) {
          navigate('/dashboard/addBranches')
        } else {
          alert(result.data.Error)
        }
      }).catch(err => console.log(err))
  }

  return (
    <div className="add_dep_bg">
      <div className="d-flex justify-content-center align-items-center">
        <div className="p-3 rounded w-50 border mt-5 mb-1">
          <h3 className="text-center">Edit Branch</h3>
        

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
              value={branch.branchName}
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
              value={branch.branchAddress}
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
              value={branch.branchStrength}
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
              value={branch.branchManagre}
              onChange={(e) =>
                setBranch({ ...branch, branchManagre: e.target.value })
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
  )
}

export default EditBranch

