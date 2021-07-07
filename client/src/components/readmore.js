import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from "react-router-dom";
import { getDiscussionbyId } from '../actions/location'
import '../style/readmore.css';

function Readmore({ currentDiscussionID }) {
    const { state } = useLocation();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDiscussionbyId(state.id));
    }, [dispatch]);

    const discussion = useSelector((state) => state.discussion);
    
    return (
        <>
            <h1 className='heading'>{discussion[0].title}</h1>
            <div className='readmore'>

                <div className="img">
                    <img src={discussion[0].imgFile}></img>
                </div>
                <div className='content'>
                    <div className='author'>

                        <img className='img' src='https://cdn.hashnode.com/res/hashnode/image/upload/v1600792675173/rY-APy9Fc.png?w=200&h=200&fit=crop&crop=faces&auto=compress&auto=compress' />

                        <label>Author: {discussion[0].createdBy ? discussion[0].createdBy : 'Anonymus'}</label>
                        <br />
                        <label >Created On: {discussion[0].createdAt.split('T')[0]}</label>
                    </div>
                    <div className='description'>
                        <p>{discussion[0].description}</p>
                    </div>
                    <Link
                        to={{
                            pathname: `/discuss/${discussion[0].locationId}`,
                            state: { id: discussion[0].locationId }
                        }}
                    >
                        <button  className="btn" id="viewbtn">BACK</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Readmore;