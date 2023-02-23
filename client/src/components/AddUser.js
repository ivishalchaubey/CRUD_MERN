import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../service/api';


const AddUser = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
        name: "",
        email: "",
        phone: ""
    });

    const setData = (e) => {
        setFormData({ ...formData,[e.target.name]:e.target.value })
        // console.log(e.target.name,e.target.value);
    }

    const addBtnClick = () => {
        addUser(formData);
        navigate('/')

    }
    return (
        <div className='container p-4 '>
            <div className='w-50 bg-dark p-5 rounded m-auto'>
                <h2 className='text-light'>Add User</h2>
                <input type="text" name="username" id="" className='form-control mt-3 p-2' placeholder='Enter your username' onChange={(e) => { setData(e) }} />
                <input type="text" name="name" id="" className='form-control mt-3 p-2' placeholder='Enter your Full Name' onChange={(e) => { setData(e) }} />
                <input type="email" name="email" id="" className='form-control mt-3 p-2' placeholder='Enter Your Email' onChange={(e) => { setData(e) }} />
                <input type="text" name="phone" id="" className='form-control mt-3 p-2' placeholder='Enter Your Contact Number' onChange={(e) => { setData(e) }} />
                <div className="d-grid gap-2 mt-3 p-2">
                    <button className="btn btn-primary" type="button" onClick={addBtnClick}>Add User</button>
                </div>
            </div>
        </div>
    )
}

export default AddUser