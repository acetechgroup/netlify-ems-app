import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
 
const AddCategory = () => {
    const [category, setCategory] = useState()
    const navigate = useNavigate()
 
    const handleSubmit = (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token');
        axios.post('https://emspro-production.up.railway.app/api/category/', {categoryName:category},
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                  }
                })
       
        .then(result => {
            if(result.data) {
                navigate('/dashboard/category')
            } else {
                alert(result.data)
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <>
    <div className=' ms-2 d-flex justify-content-center align-items-center category-bg mt-5'>
        <div className=' p-3 rounded border'>
            <h2>Add Category</h2>
            <form onSubmit={handleSubmit}>
                <div className='row mb-3'>
                    <label htmlFor="category"><strong>Category:</strong></label>
                    <input type="text" name='category' placeholder='Enter Category'
                     onChange={(e) => setCategory(e.target.value)} className='form-control rounded-0'/>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Add Category</button>
            </form>
        </div>
    </div>
    </>
  )
}
 
export default AddCategory