import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../style/discussion.css'
import Form from './discussionForm';
import { getDiscussion } from '../../actions/location'
import { useLocation, Link } from "react-router-dom";
import DiscussionTemp from './discussiontemp';


function DiscussionPage({ currentLocationId }) {
    const [currentId,setCurrentId]=useState(0);
    const { state } = useLocation();
    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDiscussion(state.id));
    }, [dispatch]);


    const discussions = useSelector((state) => state.discussion);
   

    return (

        <div className='grid-container'>
            <div className='discussion-container'>
            <ul className="cards">
                    {discussions.map((discussion) => (
                        <DiscussionTemp disc={discussion} key={discussion._id}  setCurrentId={setCurrentId} />
                    ))}

                </ul>
            </div>
            <Form locationId={state.id} currentId={currentId} setCurrentId={setCurrentId}/>
           
        </div>

    )
}

export default DiscussionPage;