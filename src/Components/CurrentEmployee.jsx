import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
 
const CurrentEmployee = () => {
    const [employee, setEmployee] = useState([]);
    const [records, setRecords] = useState([])
   
 
 
    useEffect(() => {const token = localStorage.getItem('token');
        axios
        .get("https://emspro-production.up.railway.app/api/employee/", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
            .then((result) => {
                if (result.data) {
                    setEmployee(result.data);
                    setRecords(result.data);
                } else {
                    alert(result.data.Error);
                }
            })
            .catch((err) => console.log(err));
    }, []);
    const handleFilter = (event) => {
        setRecords(employee.filter(f => f.name.toLowerCase().includes(event.target.value)))
    }
    const handleDelete = (employeeId) => {
        axios.delete('https://emspro-production.up.railway.app/api/employee/' + employeeId)
          .then(result => {
            if (result.data) {
              window.location.reload()
            } else {
              alert(result.data.Error)
            }
          })
      }
    return (
        <div className='currentEmplyee-bg'>
            <div className='currentEmplyee-bg-1 '>
                <div className='currentEmplyee-bg-2'>
                    Employees
                </div>
                <div className='currentEmplyee-bg-3'>
 
                    {/* this is for field set input */}
                    {/* <div className='body-fldset'>
                        <div className='form-fldset'>
                            <input type="text" placeholder='' className='text-fldset'/>
                            <label htmlFor="" className='label-fldset'>
                                E-mail
                            </label>
                        </div>
                    </div> */}
                    {/* this is for field set input ends*/}
 
                    <div >
                        <div className='body-fldset'>
                            <div className='form-fldset'>
                                <select name="" id="" placeholder=''
                                    //  className='currentEmplyee-btn-2'
                                    className='text-fldset'>
                                    <option value="">Gender</option>
                                    {employee.map((c) => {
                                        return <option value={c.employeeId}>{c.gender}</option>;
                                    })}
                                </select>
                                <label htmlFor="" className='label-fldset'>
                                    Gender
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='currentEmplyee-btn' role='button'><i className="bi bi-cloud-arrow-up-fill icon-2" /> Bulk Attendance Permission</div>
                    </div>
                    <div>
                        <div className='currentEmplyee-btn-3' role='button'><i className="bi bi-cloud-arrow-up-fill icon-2" /> Employee</div>
                    </div>
                    <div>
                        <Link
                        to='/dashboard/employeeDetails'
                        className='nav-link'>
                        <div className='currentEmplyee-btn-4' role='button'>Add Employee</div>
                        </Link>
                    </div>
                    <div>
                        <div className='currentEmplyee-btn-1' role='button'>Export</div>
                    </div>
                </div>
            </div>
            <div className='section-2'>
                <div>
                    <div className='body-fldset'>
                        <div className='form-fldset'>
                            <select name="" id="" placeholder=''
                                //  className='currentEmplyee-btn-2'
                                className='text-fldset'>
                                <option value="">STAFF</option>
                                {employee.map((c) => {
                                    return <option value={c.employeeId}>{c.name}</option>;
                                })}
                            </select>
                            <label htmlFor="" className='label-fldset'>
                                Emp Type
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='body-fldset'>
                        <div className='form-fldset'>
                            <select name="" id="" placeholder=''
                                //  className='currentEmplyee-btn-2'
                                className='text-fldset'>
                                <option value="">SHIFT</option>
                                {employee.map((c) => {
                                    return <option value={c.employeeId}>{c.work}</option>;
                                })}
                            </select>
                            <label htmlFor="" className='label-fldset'>
                                Shift
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='body-fldset'>
                        <div className='form-fldset'>
                            <select name="" id="" placeholder=''
                                //  className='currentEmplyee-btn-2'
                                className='text-fldset'>
                                <option value="">DEPARTMENT</option>
                                {employee.map((c) => {
                                    return <option value={c.employeeId}>{c.category}</option>;
                                })}
                            </select>
                            <label htmlFor="" className='label-fldset'>
                                Select Department
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='body-fldset'>
                        <div className='form-fldset'>
                            <select name="" id="" placeholder=''
                                //  className='currentEmplyee-btn-2'
                                className='text-fldset'>
                                <option value="">ALL</option>
                                {employee.map((c) => {
                                    return <option value={c.employeeId}>{c.status}</option>;
                                })}
                            </select>
                            <label htmlFor="" className='label-fldset'>
                                Select Status
                            </label>
                        </div>
                    </div>
                </div>
                <div><div className='body-fldset'>
                    <div className='form-fldset'>
                        <select name="" id="" placeholder=''
                            //  className='currentEmplyee-btn-2'
                            className='text-fldset'>
                            <option value="">SITE</option>
                            {employee.map((c) => {
                                return <option value={c.employeeId}>{c.site}</option>;
                            })}
                        </select>
                        <label htmlFor="" className='label-fldset'>
                            Site
                        </label>
                    </div>
                </div></div>
                <div>
                    <div className='body-fldset-1'>
                        <div className='form-fldset-1'>
                            <input type="text" placeholder='' className='text-fldset-1'
                                onChange={handleFilter} id='searchInput'/>
 
                            <label htmlFor="searchInput" className='label-fldset-1'>
                                Search <i className="bi bi-search icon-3" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ps-3 pe-3'>
                <div className='w-100 h-100 text-center'>
                <table className="dailyReportTable">
                    <thead>
                      <tr>
                        <th>Emp Id</th>
                        <th>Employee</th>
                        <th>Department</th>
                        <th>Father's Name</th>
                        <th>Phone no</th>
                        <th>Email</th>
                        <th>Joining Date</th>
                        <th>Status</th>
                        <th>Emp Type</th>
                        <th>Shift</th>
                        <th>Site</th>
                        <th>Primary Site</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody >
                      {records.map((e) => (
                        <tr>
                          <td>
                            {e.employeeId}
                          </td>
                          <td>
                            <div className='d-flex'>
                              <div>
                                <img
                                  src={`https://mohitbyproject-production.up.railway.app/api/employee/image/${e.zname}`}
                                  className="home_leave_image"
                                />
                              </div>
                              <div className='ms-2 d-inline'>
                                <div>
                                  {e.name}
                                </div>
                                <div>
                                  {e.category}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            {e.category}
                          </td>
                          <td>
                            {e.fname}
                          </td>
                          <td>
                            {e.mobile}
                          </td>
                          <td>
                            {e.email}
                          </td>
                          <td>
                            {e.jod}
                          </td>
                          <td>
                            {e.status}
                          </td>
                          <td>
                            {e.status}
                          </td>
                          <td>
                            {e.status}
                          </td>
                          <td>
                            {e.site}
                          </td>
                          <td>
                            {e.status}
                          </td>
                          <td>
                        <Link
                          to={`/dashboard/editEmployeeIndivisual/` + e.employeeId}
                         
                        >
                            {/* btn btn-info btn-sm me-2  */}
                          <span className="edit_btn me-1">Edit</span>
                        </Link>
                        <span
                          className="edit_btn"
                        //   btn btn-warning btn-sm
                          onClick={() => handleDelete(e.employeeId)}
                        >
                          Delete
                        </span>
                      </td>
                        </tr>
                      ))}
 
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    )
}
 
export default CurrentEmployee;