import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editOneData, viewOneData } from '../service/api';

const ViewOne = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [edata, setEdata] = useState({
        username: '',
        name: '',
        email: '',
        phone: ''
    })

    useEffect(() => {
        viewEditData();
    }, [])

    const viewEditData = async () => {
        let response = await viewOneData(id);
        // console.log(response);
        setEdata(response.data)
    }

    const setData = (e) => {
        setEdata({ ...edata, [e.target.name]: e.target.value })
    }

    const editBtnClick = async () => {
        // console.log(edata);
        // console.log(await viewOneData());
        editOneData(edata, id)
        setTimeout(() => {
            navigate('/');
            console.log("Called..");
        }, "500")

    }

    return (
        <div className='container p-4 '>
            <div className='w-50 bg-dark p-5 rounded m-auto'>
                <h2 className='text-light'>Edit User</h2>
                <input type="text" name="username" id="" className='form-control mt-3 p-2' placeholder='Enter your username' onChange={(e) => { setData(e) }} value={edata.username} />
                <input type="text" name="name" id="" className='form-control mt-3 p-2' placeholder='Enter your Full Name' onChange={(e) => { setData(e) }} value={edata.name} />
                <input type="email" name="email" id="" className='form-control mt-3 p-2' placeholder='Enter Your Email' onChange={(e) => { setData(e) }} value={edata.email} />
                <input type="text" name="phone" id="" className='form-control mt-3 p-2' placeholder='Enter Your Contact Number' onChange={(e) => { setData(e) }} value={edata.phone} />
                <div className="d-grid gap-2 mt-3 p-2">
                    <button className="btn btn-primary" type="button" onClick={editBtnClick}>Edit User</button>
                </div>
            </div>
        </div>
    )
}

export default ViewOne