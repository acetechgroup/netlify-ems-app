import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const GeneratePayslip = () => {
    const [date, setDate] = useState(new Date())
    const handleDate = (dt) => {
        setDate(dt)
    }
    const [employee, setEmployee] = useState([]);
    const [records, setRecords] = useState([])



    useEffect(() => {
        axios
            .get("http://localhost:3000/auth/employee")
            .then((result) => {
                if (result.data.Status) {
                    setEmployee(result.data.Result);
                    setRecords(result.data.Result);
                } else {
                    alert(result.data.Error);
                }
            })
            .catch((err) => console.log(err));
    }, []);
    const handleFilter = (event) => {
        setRecords(employee.filter(f => f.name.toLowerCase().includes(event.target.value)))
    }
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/delete_employee/' + id)
            .then(result => {
                if (result.data.Status) {
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
                    Salary Generater
                </div>
                <div className='currentEmplyee-bg-3'>

                    <div>
                        <Link
                            to='#'
                            className='nav-link'>
                            <div className='salary-btn-1' role='button'>Download Report</div>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to='#'
                            className='nav-link'>
                            <div className='salary-btn-1' role='button'>Export Overtime Report</div>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to='#'
                            className='nav-link'>
                            <div className='salary-btn-1' role='button'>Send Report</div>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to='#'
                            className='nav-link'>
                            <div className='salary-btn-1' role='button'>Confirmed Reviewed</div>
                        </Link>
                    </div>
                    <div>
                        <div className='salary-btn-1' role='button'>Pre-Generate Salary</div>
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
                                    return <option value={c.id}>{c.name}</option>;
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
                                <option value="">PENDING</option>
                                {employee.map((c) => {
                                    return <option value={c.id}>{c.name}</option>;
                                })}
                            </select>
                            <label htmlFor="" className='label-fldset'>
                                Payslip Status
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
                                    return <option value={c.id}>{c.name}</option>;
                                })}
                            </select>
                            <label htmlFor="" className='label-fldset'>
                                Columns
                            </label>
                        </div>
                    </div>
                </div>
                <div className='salary-calen'>
                    <label>
                        <div className='salaryDateContainer'>
                            <span className='salaryDateInput'>
                                <DatePicker
                                    selected={date}
                                    dateFormat="MM/yyyy"
                                    onChange={(date) => handleDate(date)}
                                    showMonthYearPicker
                                    maxDate={new Date()}
                                // customInput={<CustomInput />}
                                />
                            </span>
                            <span className='salaryIcon'>
                                <i className="bi bi-calendar3"></i>
                            </span>
                        </div>
                    </label>
                </div>
                <div><div className='body-fldset'>
                    <div className='form-fldset'>
                        <select name="" id="" placeholder=''
                            //  className='currentEmplyee-btn-2'
                            className='text-fldset'>
                            <option value="">HEAD OFFICE</option>
                            {employee.map((c) => {
                                return <option value={c.id}>{c.name}</option>;
                            })}
                        </select>
                        <label htmlFor="" className='label-fldset'>
                            Site
                        </label>
                    </div>
                </div></div>
                <div>
                    <div className='salary-body-fldset-1'>
                        <div className='salary-form-fldset-1'>
                            <input type="text" placeholder='' className='salary-text-fldset-1'
                                onChange={handleFilter} id='searchInput' />

                            <label htmlFor="searchInput" className='salary-label-fldset-1'>
                                Search <i className="bi bi-search icon-3" />
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='salary-btn-1' role='button'>Payroll Status</div>
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
                                        {e.id}
                                    </td>
                                    <td>
                                        <div className='d-flex'>
                                            <div>
                                                <img
                                                    src={`http://localhost:3000/Images/` + e.image}
                                                    className="home_leave_image"
                                                />
                                            </div>
                                            <div className='ms-2 d-inline'>
                                                <div>
                                                    {e.name}
                                                </div>
                                                <div>
                                                    {e.designation}General Manager
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {e.reason}
                                    </td>
                                    <td>
                                        {e.from_date}
                                    </td>
                                    <td>
                                        {e.to_date}
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
                                        {e.status}
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
                                        <Link
                                            to={`/dashboard/editEmployeeIndivisual/` + e.id}

                                        >
                                            {/* btn btn-info btn-sm me-2  */}
                                            <span className="edit_btn me-1">Edit</span>
                                        </Link>
                                        <span
                                            className="edit_btn"
                                            //   btn btn-warning btn-sm 
                                            onClick={() => handleDelete(e.id)}
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

export default GeneratePayslip