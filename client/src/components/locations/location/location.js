import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import userImg from '../../../images/user.svg'

const Location = ({ location }) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    let author = 'Anonymus';
    location.userData.forEach((user) => {
        if (location.createdBy) {
            if (user._id === location.createdBy) {
                author = user.userName;
            }
        }
    })


    return (

        <div className="border p-6 my-2 rounded-md bg-white">

            <img src={location.imgFile} alt={location.imgFile} className="mh-48 w-full object-cover md:w-90" />

            <h1 className=" capitalize text-2xl px-4 font-semibold">{location.name}</h1>

            <p className="text-xl p-4 mb-2 ">{location.description}</p>
            <div className="flex flex-row ">
                <div className="flex m-2">

                    <img src={userImg} alt="profile" className="h-8 w-8" />
                    <span className="md:text-xl text-md capitalize mx-2">{author}</span>
                </div>
                <div className="ml-auto mr-2 flex">
                    {user?<Link
                        to={{
                            pathname: `/adddiscussion`,
                            state: { id: location._id, name:location.name }
                        }}
                    >
                        <button className="focus:outline-none bg-purple-100 font-semibold opacity-80 border-2 hover:border-purple-400 text-purple-600 md:text-xl text-sm rounded h-10 px-4">Add things2do</button>
                    </Link>:''}
                    <Link style={{marginLeft:'0.5rem'}}
                        to={{
                            pathname: `/discussions/${location._id}`,
                            state: { id: location._id }
                        }}
                    >
                        <button className="focus:outline-none bg-purple-100 font-semibold opacity-80 border-2 hover:border-purple-400 text-purple-600 md:text-xl text-sm rounded h-10 px-4">View</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Location;