import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CSVLink, CSVDownload } from "react-csv";

const Attendence = () => {

    const [date, setDate] = useState(new Date())
    const [admins, setAdmins] = useState([])
    const [category, setCategory] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [records, setRecords] = useState([]);



    useEffect(() => {
        AdminRecords();
    }, [])

    const AdminRecords = () => {
        const token = localStorage.getItem('token');
        axios
            .get("https://emsproject-production.up.railway.app/auth/getUsers/", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(result => {
                if (result.data) {
                    setAdmins(result.data)
                } else {
                    alert(result.data.Error)
                }
            })
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios
            .get("https://emsproject-production.up.railway.app/api/category/", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then((result) => {
                if (result.data) {
                    setCategory(result.data);
                } else {
                    alert(result.data.Error);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios
            .get("https://emsproject-production.up.railway.app/api/employee/", {
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
        console.log(event);
        setRecords(employee.filter(f => f.name.toLowerCase().includes(event.target.value)))
    }

    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(updateTime, 1000);



    const [status, setStatus] = useState('status_1')


    const status_1 = [
        {
            option1: 'Select'
        },
        {
            option1: 'Present'
        },
        {
            option1: 'Absent'
        },
        {
            option1: 'Late'
        },
        {
            option1: 'Half Day'
        },
        {
            option1: 'Paid Leave'
        }
    ]




    const handleStatus = (e) => {
        setStatus({ ...status_1, option1: e.target.value })
        console.log({ ...status_1, option1: e.target.value });
    }
    const handleDate = (e) => {
        setDate(e.target.value)
        console.log(date);
    }

    // const [empName, setEmpName] = useState()

    const handlePunch = (employeeId, name, punchType) => {
        if (document.getElementById('punchButton' + employeeId).innerText === 'Punch In') {
            document.getElementById('punchButton' + employeeId).innerText = "Punch Out"

            axios.post('http://localhost:3000/auth/attendence/', { name: name, employeeId: employeeId, punchIn: new Date().toLocaleString() })
                .then(result => {
                    if (result.data.Status) {
                        navigate('/dashboard/attendence')
                    } else {
                        alert(result.data.Error)
                    }
                }).catch(err => console.log(err))

        } else {
            document.getElementById('punchButton' + employeeId).innerText = "Punch In"

            axios.put('http://localhost:3000/auth/attendence/' + id, {punchOut: new Date().toLocaleString()})
                .then(result => {
                    if (result.data.Status) {
                        navigate('/dashboard/attendence')
                    } else {
                        alert(result.data.Error)
                    }
                }).catch(err => console.log(err))

        }

        console.log(employeeId, name, new Date().toLocaleString(), document.getElementById('punchButton' + employeeId).innerText)
    }

    return (
        <>
            <div className=" container text-center" id='attendence-bg'>
                <div className="row">
                    <div className="col mt-3">
                        <div className='d-flex justify-content-between'>
                            <div className=''>
                                <span className='me-2'>
                                    <label className='me-2 '>Branch</label>
                                    <select className="bg-white rounded-1 border-1" >
                                        <option >All Branches</option>
                                        {admins.map((a) => {
                                            return <option value={a.id}>{a.name}</option>;
                                        })}

                                    </select>
                                </span>
                                <span className='me-2'>
                                    <label className='me-2'>Department</label>
                                    <select className="bg-white rounded-1 border-1" >
                                        <option selected>All Departments</option>
                                        {category.map((c) => {
                                            return <option value={c.id}>{c.categoryName}</option>;
                                        })}
                                    </select>
                                </span>
                                <span>
                                    <label className='me-2'>Date</label>
                                    <input type="date" className='rounded-1 border-1' onChange={handleDate} />
                                </span>
                            </div>
                            <div>
                                <button type="button" className="btn btn-outline-primary btn-sm rounded-0 me-2">Mark All Absent As Present</button>
                                <CSVLink data={employee} filename='DailyReports'>
                                    <button type="button" className="btn btn-primary btn-sm rounded-0"> <i className="bi bi-download me-2"></i>Daily Repoart</button>
                                </CSVLink>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-4 ms-0 me-0 bgcolor">
                    <div className="col mt-3">
                        <div className='rounded-0 border-end present-bg'>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-success me-2"></i>Present</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='rounded-0 border-end present-bg'>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-danger me-2"></i>Absent</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='rounded-0 border-end present-bg'>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-success me-2"></i>Late</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='rounded-0 border-end present-bg'>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-warning me-2"></i>Half Day</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='rounded-0 present-bg'>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-info me-2"></i>Paid Leave</p>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col mb-3'>
                        <div className='d-flex justify-content-between'>
                            <div className='rounded-0 d-flex salary-search-input'>
                                <i className="bi bi-search text-center pt-2 ps-2"></i>
                                <input type="text" className='border-0 ps-2 input-t w-100' placeholder='Search Name of employee' onChange={handleFilter} />
                                <button type="button" className="btn btn-primary btn-sm rounded-0">Search</button>
                            </div>
                            <div>
                                <CSVLink data={records} filename='RegisterEmployeeData'>
                                    <button type="button" className="btn btn-outline-primary  rounded-0 me-0">Export Attendance</button>
                                </CSVLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div>
                            {/* table table-bordered */}
                            <table className="table-content">
                                <thead>
                                    <tr>
                                        <th scope="col">Emp Id</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Punch</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {records.map((e) => (
                                        <tr>
                                            <td>{e.employeeId}</td>
                                            <td>
                                                <img
                                                    src={`http://localhost:3000/Images/` + e.image}
                                                    className="employee_image"
                                                    alt='Emp Img'
                                                />
                                            </td>
                                            <td>{e.name}</td>

                                            <td>
                                                <div>
                                                    <button
                                                        // type='button'
                                                        className='punchbtn rounded-4'
                                                        id={"punchButton" + e.employeeId}
                                                        onClick={() => handlePunch(e.employeeId, e.name, 'Punch In')}>
                                                        Punch In
                                                    </button>
                                                </div>
                                            </td>
                                            <td>
                                                <select name="" id="" className='rounded-4'
                                                    onChange={handleStatus}>
                                                    {/* <option value="">Select</option> */}
                                                    {status_1.map((s) => {
                                                        return <option >{s.option1}</option>;
                                                    })}
                                                </select>
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

export default Attendence