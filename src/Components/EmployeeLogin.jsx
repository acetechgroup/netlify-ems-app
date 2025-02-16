// import React, { useState } from 'react'
// import './style.css'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// const EmployeeLogin = () => {
//     const [values, setValues] = useState({
//         userName: '',
//         password: ''
//     })
//     const [error, setError] = useState(null)
//     const navigate = useNavigate()
//     axios.defaults.withCredentials = true;

//     // const handleSubmit = (event) => {
//     //     event.preventDefault()
//     //     axios.post('http://localhost:3000/employee/employee_login', values)
//     //     .then(result => {
//     //         if(result.data.loginStatus) {
//     //             // localStorage.setItem("valid", true)
//     //             navigate('/employee_detail/'+result.data.id)
//     //         } else {
//     //             setError(result.data.Error)
//     //         }
//     //     })
//     //     .catch(err => console.log(err))
//     // }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // axios.post('https://emsproject-production.up.railway.app/auth/login', values)
//         //     .then(result => {
//         //         if (result.data) {
//         //             // Store JWT token in local storage
//                     // localStorage.setItem("token", result.data);
//                     localStorage.setItem("employeeId", 1);
//         //             console.log(result.data)
//         //             // navigate('/employee_detail/'+result.data.employeeId)
//         //             navigate('/employee_detail/'+10)
//         //             // navigate('/employee_detail')
//         //         } else {
//         //             setError('Invalid login credentials');
//         //         }
//         //     })
//         //     .catch(err => {
//         //         console.log(err);
//         //         setError('An error occurred during login. Please try again.');
//         //     });
//         navigate('/employee_detail/')
//     };

//   return (
//     <>
//     <div className='text-center loginPage'>
//     <div className="row">
//                     <div className="col mx-2 text-white d-flex justify-content-between loginHead shadow">
//                     <img src="Images/EMS.png" alt="LOGO" className="logo_image m-2" />
//                     <h1 className='mt-2 text-dark sm-text-hidden'>Employee Managenment System</h1>
//                     <button className='btn btn-secondary btn-outline-light rounded-2 m-2'>Registration</button>
//                     </div>
//                 </div>
//                 <div className="row">
//                 <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
//         <div className='p-3 rounded w-25 border loginForm'>
//             <div className='text-warning'>
//                 {error && error}
//             </div>
//             <h2>Login Page</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='mb-3'>
//                     <label htmlFor="email"><strong>Email:</strong></label>
//                     <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
//                      onChange={(e) => setValues({ ...values, userName: e.target.value })} className='form-control rounded-0'/>
//                 </div>
//                 <div className='mb-3'> 
//                     <label htmlFor="password"><strong>Password:</strong></label>
//                     <input type="password" name='password' placeholder='Enter Password'
//                      onChange={(e) => setValues({ ...values, password: e.target.value })} className='form-control rounded-0'/>
//                 </div>
//                 <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
//                 <div className='mb-1'> 
//                     <input type="checkbox" name="tick" id="tick" className='me-2'/>
//                     <label htmlFor="password">You are Agree with terms & conditions</label>
//                 </div>
//             </form>
//         </div>
//     </div>
//                 </div>
//     </div>
//     {/* <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
//         <div className='p-3 rounded w-25 border loginForm'>
//             <div className='text-warning'>
//                 {error && error}
//             </div>
//             <h2>Login Page</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='mb-3'>
//                     <label htmlFor="email"><strong>Email:</strong></label>
//                     <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
//                      onChange={(e) => setValues({...values, email : e.target.value})} className='form-control rounded-0'/>
//                 </div>
//                 <div className='mb-3'> 
//                     <label htmlFor="password"><strong>Password:</strong></label>
//                     <input type="password" name='password' placeholder='Enter Password'
//                      onChange={(e) => setValues({...values, password : e.target.value})} className='form-control rounded-0'/>
//                 </div>
//                 <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
//                 <div className='mb-1'> 
//                     <input type="checkbox" name="tick" id="tick" className='me-2'/>
//                     <label htmlFor="password">You are Agree with terms & conditions</label>
//                 </div>
//             </form>
//         </div>
//     </div> */}
//     </>
//   )
// }

// export default EmployeeLogin

import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const EmployeeLogin = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://emspro-production.up.railway.app/api/employee/login', values)
            .then(result => {
                if (result.data) {
                    // Store JWT token in local storage
                    localStorage.setItem("token", result.data);
                    console.log(result.data)
                    const id=result.data;
                    localStorage.setItem("employeeId", id);
                    // navigate('/employee_detail/'+id)
                    navigate('/employee_detail/')
                } else {
                    setError('Invalid login credentials');
                }
            })
            .catch(err => {
                console.log(err);
                setError('An error occurred during login. Please try again.');
            });
    };

  return (
    <>
    <div className='text-center loginPage'>
    <div className="row">
                    <div className="col mx-2 text-white d-flex justify-content-between loginHead shadow">
                    <img src="Images/EMS.png" alt="LOGO" className="logo_image m-2" />
                    <h1 className='mt-2 text-dark sm-text-hidden'>Employee Managenment System</h1>
                    <button className='btn btn-secondary btn-outline-light rounded-2 m-2'>Registration</button>
                    </div>
                </div>
                <div className="row">
                <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm'>
            <div className='text-warning'>
                {error && error}
            </div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
                     onChange={(e) => setValues({ ...values, email: e.target.value })} className='form-control rounded-0'/>
                </div>
                <div className='mb-3'> 
                    <label htmlFor="password"><strong>Password:</strong></label>
                    <input type="password" name='password' placeholder='Enter Password'
                     onChange={(e) => setValues({ ...values, password: e.target.value })} className='form-control rounded-0'/>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
                <div className='mb-1'> 
                    <input type="checkbox" name="tick" id="tick" className='me-2'/>
                    <label htmlFor="password">You are Agree with terms & conditions</label>
                </div>
            </form>
        </div>
    </div>
                </div>
    </div>
    {/* <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm'>
            <div className='text-warning'>
                {error && error}
            </div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
                     onChange={(e) => setValues({...values, email : e.target.value})} className='form-control rounded-0'/>
                </div>
                <div className='mb-3'> 
                    <label htmlFor="password"><strong>Password:</strong></label>
                    <input type="password" name='password' placeholder='Enter Password'
                     onChange={(e) => setValues({...values, password : e.target.value})} className='form-control rounded-0'/>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
                <div className='mb-1'> 
                    <input type="checkbox" name="tick" id="tick" className='me-2'/>
                    <label htmlFor="password">You are Agree with terms & conditions</label>
                </div>
            </form>
        </div>
    </div> */}
    </>
  )
}

export default EmployeeLogin