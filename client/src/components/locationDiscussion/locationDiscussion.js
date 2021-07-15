import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscussion } from '../../actions/location'
import { useLocation } from "react-router-dom";
import { DiscussionTemplate } from './discussionTemplate';
import img from '../../images/idea.png'


 function LocationDiscussion ({currentLocationId})  {

    const { state } = useLocation();
    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDiscussion(state.id));
    }, [dispatch]);


    const discussions = useSelector((state) => state.discussion);

    return (
        <div className="w-full border-l-2 px-4 ">
            <div className="bg-gray-50">
                <div className="flex md:flex-row flex-col-reverse md:px-20 p-6 pt-10 bg-purple-100 my-2">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl my-2 font-bold">Discuss things2do</h1>
                        <p className="text-xl">Share amazing things you could do in your city and let people have the same amazing experience you have.</p>
                      
                    </div>
                    <img src={img} alt="discuss" className="ml-auto mr-2 md:w-1/3" />
                </div>
                <div className="bg-gray-50 p-2 rounded flex md:flex-row flex-col">
                    <div className="flex flex-col bg-gray-50 justify-center md:w-8/12 md:pb-20">
                        {discussions.map((discussion) => (
                            <DiscussionTemplate discussions={discussion} key={discussion._id} />
                        ))}
                    </div>
                    <div className="md:w-4/12 flex flex-col items-center">
                        <div className=" md:sticky md:top-40 mb-20 md:mb-2 m-4 bg-pink-100 p-4 rounded border-t-8 border-pink-200"><h1 className="text-2xl font-semibold">Rules</h1>
                            <p className="text-lg py-2">Respect that other people in the community have different life experiences and may have a different perspective than yours</p>
                            <p className="text-lg py-2">Please do not spam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LocationDiscussion;