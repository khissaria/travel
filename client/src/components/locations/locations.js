import React, { useState } from 'react';
import Location from './location/location'
import { useSelector } from 'react-redux';

import di from '../../images/di.png'

function Locations({ setCurrentLocationID }) {
    const locations = useSelector((state) => state.location);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    return (

        <div className="w-full border-l-2 px-4 " >
            <div className="bg-gray-50">
                <div className="flex md:flex-row flex-col">
                    <div className="md:w-12/12">
                        <div className="flex md:flex-row flex-col bg-purple-100 my-2 ">
                            <div className=" m-10">
                                <h1 className="text-4xl my-2 font-bold">Add a Location and get started</h1>
                                <p className="text-xl ">Add a location you are travelling to and let the community help you come up with a travelling plan for you.</p>
                                {user ?
                                    <a className="sticky top-20" href="/add">
                                        <button className="px-6 my-4 cursor-pointer bg-purple-400 hover:bg-purple-500 focus:outline-none text-white rounded-full text-center p-2 text-2xl font-semibold">Add Location</button>
                                    </a> : ''
                                }
                            </div>

                            <img src={di} alt="review" className=" md:w-80 md:h-40 mt-auto mb-0 ml-auto mr-2 " />

                        </div>
                        <div>
                            {locations.map((lct) => (
                                <Location location={lct} key={lct._id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations;

