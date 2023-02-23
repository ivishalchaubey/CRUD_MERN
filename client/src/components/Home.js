import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { allUser } from '../service/api';

const Home = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            Users();
            console.log("Called..");
          }, "500")
        
    }, []);

    const Users = async () => {
        let response = await allUser();
        setUser(response.data)
    }
    return (
        <div className='container my-3'>
            <div className="row">
                {
                    user.map((item) => (
                        <div className="col-md-3" key={item._id}>
                            <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
                                <div className="card-header">{item.username}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">
                                    Email:{item.email}<br/>
                                    Phone:{item.phone}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <NavLink className='btn btn-success me-2' to={`/view/${item._id}`}>Edit</NavLink>
                                    <NavLink className='btn btn-danger' to={`/delete/${item._id}`}>Delete</NavLink>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>


        </div>
    )
}

export default Home