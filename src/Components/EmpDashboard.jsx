import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, LineChart, Line, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const EmpDashboard = () => {

    const data = [
        {
            name: 'Jan',
            present: 20,
            half_Day: 5,
            absent: 1,
        },
        {
            name: 'Feb',
            present: 15,
            half_Day: 4,
            absent: 7,
        },
        {
            name: 'March',
            present: 18,
            half_Day: 6,
            absent: 2,
        }
    ];

    const [m, setM] = useState(0)
    const [f, setF] = useState(0)
    const [t, setT] = useState(0)
    const [employeeTotal, setemployeeTotal] = useState(0)
    const [employee, setEmployee] = useState([]);
    // const[data, setData]= useState([])
    
    useEffect(() => {const token = localStorage.getItem('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYW1wbDFAZ21haWwuY29tIiwiaWF0IjoxNzIyMzM2MTQ5LCJleHAiOjE3MjIzMzc5NDl9.Wk5XMV_V61JXrrtldWp02-0XKhPiCHAw4EKtmdQmWhM');
        axios
        .get("https://emsproject-production.up.railway.app/api/employee/", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
          .then((result) => {
            if (result.data) {
              setEmployee(result.data);
              // setRecords(result.data.Result);
            } else {
              alert(result.data.Error);
            }
          })
          .catch((err) => console.log(err));
      }, []);

    const employeeCount = () => {
        const token = localStorage.getItem('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYW1wbDFAZ21haWwuY29tIiwiaWF0IjoxNzIyMzM2MTQ5LCJleHAiOjE3MjIzMzc5NDl9.Wk5XMV_V61JXrrtldWp02-0XKhPiCHAw4EKtmdQmWhM');
        axios
            .get("https://emsproject-production.up.railway.app/api/employee/count", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(result => {
                if (result.data) {
                    setemployeeTotal(result.data)
                }
            })
    }

    const GenderM = () => {
        const token = localStorage.getItem('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYW1wbDFAZ21haWwuY29tIiwiaWF0IjoxNzIyMzM2MTQ5LCJleHAiOjE3MjIzMzc5NDl9.Wk5XMV_V61JXrrtldWp02-0XKhPiCHAw4EKtmdQmWhM');
        axios
            .get("https://emsproject-production.up.railway.app/api/employee/countm", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(result => {
                if (result.data) {
                    setM(result.data)
                } else {
                    alert(result.data.Error)
                }
            })
    }
    const GenderF = () => {
        const token = localStorage.getItem('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYW1wbDFAZ21haWwuY29tIiwiaWF0IjoxNzIyMzM2MTQ5LCJleHAiOjE3MjIzMzc5NDl9.Wk5XMV_V61JXrrtldWp02-0XKhPiCHAw4EKtmdQmWhM');
        axios
            .get("https://emsproject-production.up.railway.app/api/employee/countf", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(result => {
                if (result.data) {
                    setF(result.data)
                } else {
                    alert(result.data.Error)
                }
            })
    }
    const GenderT = () => {
        const token = localStorage.getItem('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYW1AZ21haWwuY29tIiwiaWF0IjoxNzIyMzM2NTU4LCJleHAiOjE3MjIzMzgzNTh9._r_6DAmF2ZjeEiUIm9c1YBpDwp6QU5O4g-FkQyVCH6s');
        axios
            .get("https://emsproject-production.up.railway.app/api/employee/countt", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(result => {
                if (result.data) {
                    setT(result.data)
                } else {
                    alert(result.data.Error)
                }
            })
    }



    // useEffect(() => {
    //     //     axios.get('http://localhost:8080/api/employees')
    //     //         .then(response => setData(response.data))
    //     //         .catch(error => console.error(error));
    //     // }, []);
    //     const token = localStorage.getItem('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYW1AZ21haWwuY29tIiwiaWF0IjoxNzIyMzM2NTU4LCJleHAiOjE3MjIzMzgzNTh9._r_6DAmF2ZjeEiUIm9c1YBpDwp6QU5O4g-FkQyVCH6s');
    //     axios
    //     .get("https://emsproject-production.up.railway.app/api/employee/", {
    //       headers: {
    //         "Authorization": `Bearer ${token}`
    //       }
    //     })
    //       .then((result) => {
    //         if (result.data) {
    //           setData(result.data);
    //         } else {
    //           alert(result.data.Error);
    //         }
    //       })
    //       .catch((err) => console.log(err));
    //   }, []);
    
    
    //     const formattedData = data.map(emp => ({
    //         name: emp.name,
    //         salary: emp.salary,
    //     }));
    

    return (
        <>
            <div className='empDash'>
                <div className='text-center pt-2 ms-1 border-bottom'>
                    <h3>Employee Dashboard</h3>
                </div>
                <div className='row row-cols-1 row-cols-md-3'>
                    <div className='col'>
                        <div className='text-center pt-2'>Attendance Report</div>
                        {/* <ResponsiveContainer width="100%" height={300}> */}
                        <BarChart
                            width={380}
                            height={250}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="present" fill="#008000" activeBar={<Rectangle fill="#006400" stroke="#00F700" />} />
                            <Bar dataKey="half_Day" fill="#f4d03f" activeBar={<Rectangle fill="#FFC300" stroke="#b7950b" />} />
                            <Bar dataKey="absent" fill="#f71409" activeBar={<Rectangle fill="#f02218" stroke="#bb120a" />} />
                        </BarChart>
                        {/* </ResponsiveContainer> */}
                    </div>

                    <div className='col'>
                        <div className='text-center pt-2'>Salary Report</div>
                        {/* <ResponsiveContainer width="100%" height="100%"> */}
                        <LineChart
                            width={380}
                            height={250}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="present" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="half_Day" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="absent" stroke="#fc03c6" />
                        </LineChart>
                        {/* </ResponsiveContainer> */}
                    </div>

                    <div className='col'>
                        <div className='text-center pt-2'>Task Report</div>
                        {/* <ResponsiveContainer> */}
                        <AreaChart
                            width={380}
                            height={250}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="present" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="half_Day" stroke="#82ca9d" fill="#8884d8" />
                            <Area type="monotone" dataKey="absent" stroke="#fc03c6" fill="#8884d8" />
                        </AreaChart>
                        {/* </ResponsiveContainer> */}
                    </div>
                </div>
                <div className='row row-cols-1 row-cols-md-4 g-0'>
                    <div className='col '>
                        <Link
                            //   to='/dashboard/currentemployee'
                            className='nav-link'>
                            <div className='dashCard'>
                                <div className='d-flex justify-content-between dashcard-1 p-2'>
                                    <div className='d-flex'>
                                        <div className='me-2 icon-home'>
                                            <i className="bi-fingerprint icon-home-1"></i>
                                        </div>
                                        <div className='dash-font'>
                                            Current Month Attendance
                                        </div>
                                    </div>
                                    <div className='dash-font-1'>
                                        {employeeTotal}
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Present :</div>
                                    <div>{m}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Absent :</div>
                                    <div>{f}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Late :</div>
                                    <div>{t}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Half Day :</div>
                                    <div>{t}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col '>
                        <Link
                            //   to='/dashboard/currentemployee'
                            className='nav-link'>
                            <div className='dashCard'>
                                <div className='d-flex justify-content-between dashcard-2 p-2'>
                                    <div className='d-flex'>
                                        <div className='me-2 icon-home'>
                                            <i className="bi-wallet-fill icon-home-1"></i>
                                        </div>
                                        <div className='dash-font'>
                                            Last Month Salary
                                        </div>
                                    </div>
                                    <div className='dash-font-1'>
                                        {employeeTotal}
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Full Salary :</div>
                                    <div>{m}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Paid Salary :</div>
                                    <div>{f}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Deducted Salary :</div>
                                    <div>{t}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Advance Salary :</div>
                                    <div>{t}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col '>
                        <Link
                            //   to='/dashboard/currentemployee'
                            className='nav-link'>
                            <div className='dashCard'>
                                <div className='d-flex justify-content-between dashcard-1 p-2'>
                                    <div className='d-flex'>
                                        <div className='me-2 icon-home'>
                                            <i className="bi-journal-text icon-home-1"></i>
                                        </div>
                                        <div className='dash-font'>
                                            Current Month Tasks
                                        </div>
                                    </div>
                                    <div className='dash-font-1'>
                                        {employeeTotal}
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Overdue Task :</div>
                                    <div>{m}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Today's Task :</div>
                                    <div>{f}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>This week's Due :</div>
                                    <div>{t}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Pending Task :</div>
                                    <div>{t}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col '>
                        <Link
                            //   to='/dashboard/currentemployee'
                            className='nav-link'>
                            <div className='dashCard'>
                                <div className='d-flex justify-content-between dashcard-2 p-2'>
                                    <div className='d-flex'>
                                        <div className='me-2 icon-home'>
                                            <i className="bi-calendar2-event icon-home-1"></i>
                                        </div>
                                        <div className='dash-font'>
                                            Current Month Holiday
                                        </div>
                                    </div>
                                    <div className='dash-font-1'>
                                        {employeeTotal}
                                    </div>
                                </div>
                                <div className=' table-size-holiday'>
                                    <table className="home-leave-table">
                                        <thead>
                                            <tr>
                                                <th>Sr. No.</th>
                                                <th>Name of Holiday</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {employee.map((e) => (
                                                <tr>
                                                    <td>
                                                        {e.id}
                                                    </td>
                                                    
                                                    <td>
                                                        {e.reason}
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmpDashboard


