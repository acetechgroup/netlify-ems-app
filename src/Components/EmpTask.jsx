import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EmpTask = () => {

  const [employee, setEmployee] = useState([]);

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

  return (
    <div className='reqstLeave'>
      <div className="d-flex justify-content-center align-items-center pt-2 pb-2 fs-4 border-bottom">
        Task List
      </div>
      <div className='table-size-task'>
        <table className="home-leave-table">
          <thead>
            <tr>
              <th>Task Id</th>
              <th>Assigned Date</th>
              <th>Task Title</th>
              <th>Assigned Task</th>
              <th>Task Status</th>
            </tr>
          </thead>
          <tbody >
            {employee.map((e) => (
              <tr>
                <td>
                  {e.id}
                </td>
                <td>
                  {e.date}
                </td>
                <td>
                  {e.title}
                </td>
                <td>
                  {e.task}
                </td>
                <td>
                  {/* {e.reason} */}
                  <select name="" id="">
                    <option value="">Select Status</option>
                    <option value="">Pending</option>
                    <option value="">Working</option>
                    <option value="">Completed</option>
                  </select>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmpTask