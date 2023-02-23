import React, { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { deleteUser } from '../service/api'


const DeleteUser = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        dataDeleted();
    }, [])

    const dataDeleted = async () => {
        let response = await deleteUser(id)
        // console.log(response);
        navigate('/')
    }
    return (
        <div className='p-5 mt-4'>
            <h1 className='text-danger'>Delete Successfully....</h1>
        </div>
    )
}

export default DeleteUser