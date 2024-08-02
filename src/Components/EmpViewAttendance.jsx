import React, { useState } from 'react';
import axios from 'axios';

function EmpViewAttendance() {
  const [employeeId, setEmployeeId] = useState('');
  const [attendance, setAttendance] = useState([]);

  const handleGetAttendance = () => {
    axios.get(`http://localhost:8080/attendance/employee/${employeeId}`)
      .then(response => {
        setAttendance(response.data);
      })
      .catch(error => {
        alert('Error fetching attendance: ' + error.response.data);
      });
  };

  return (
    <div>
      <h2>Attendance List</h2>
      <input
        type="text"
        placeholder="Employee ID"
        value={employeeId}
        onChange={e => setEmployeeId(e.target.value)}
      />
      <button onClick={handleGetAttendance}>Get Attendance</button>
      <ul>
        {attendance.map(record => (
          <li key={record.id}>
            {`ID: ${record.id}, Punch In: ${record.punchIn}, Punch Out: ${record.punchOut}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmpViewAttendance;
