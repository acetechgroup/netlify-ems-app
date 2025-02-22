import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

function MiniDropdown({ onClose }) {

  const [admins, setAdmins] = useState([])
  useEffect(() => {
    AdminRecords();
  }, [])

  const AdminRecords = () => {
    axios.get('http://localhost:3000/auth/admin_records')
      .then(result => {
        if (result.data.Status) {
          setAdmins(result.data.Result)
        } else {
          alert(result.data.Error)
        }
      })
  }

  const modelRef = useRef();
  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  }

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found, cannot logout.");
      navigate('/');
      return;
    }
 
    axios.post('https://emspro-production.up.railway.app/auth/logout', {}, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(result => {
      if (result.data) {
        localStorage.removeItem("token");
        navigate('/');
      } else {
        console.error("Logout failed:", result.data);
      }
    })
    .catch(err => console.error("Error in logout request:", err));
  };

  return (
    <div ref={modelRef} onClick={closeModel} className='dropDownProfile d-flex flex-column'>
      <ul className='d-flex flex-column gap-1 list-unstyled text-decoration-none'>
        <div className='d-flex justify-content-between border-bottom'>
          {admins.map((e) => (
            <div className="">
              {e.name}
            </div>
          ))}
          <div>
            <i onClick={onClose} role='button' className="bi bi-x-circle" />
          </div>
        </div>
        <li role='button'>
          <i className="bi bi-person-circle me-3"></i>
          <Link
            to='/dashboard/profile'
            className=''>
            Profile
          </Link>
        </li>
        <li role='button' onClick={handleLogout}>
          <i className="bi bi-box-arrow-in-right me-3"></i>
          <Link
            to='#'
            className=''>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MiniDropdown