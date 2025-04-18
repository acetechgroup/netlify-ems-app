import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 
const Category = () => {
 
    const [category, setCategory] = useState([])
 
    useEffect(()=> {
        const token = localStorage.getItem('token');
 
        axios.get('https://emspro-production.up.railway.app/api/category/',{
            headers: {
                "Authorization": `Bearer ${token}`
              }
            })
       
        .then(result => {
            if(result.data) {
                setCategory(result.data);
                console.log(token)
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
  return (
    <>
    <div className='w-100'>
    <div className='row category-bg'>
       
        <div className=" p-2 d-flex justify-content-center shadow bg-head">
                <h4>Cetegory List</h4>
            </div>
            <div className=' px-5 mt-3 '>
        <Link to="/dashboard/add_category" className='btn btn-success'>Add Cetegory</Link>
        <div className='row mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        category.map(c => (
                            <tr>
                                <td>{c.categoryName}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}
 
export default Category