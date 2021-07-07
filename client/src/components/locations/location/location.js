import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../style/locations.css';

const Location = ({ location }) => {
    const dispatch = useDispatch();
    return (
        <div className="content" id={location._id}>
            <div className="holder">
                <div className="img">

                    <img src={location.imgFile} alt={location.imgFile}></img>

                </div>
            </div>
            <div className="text">
                <h1>{location.name}</h1>
                <p>{location.description}</p>
                <div >
                    <Link
                        to={{
                            pathname: `/discuss/${location._id}`,
                            state: { id: location._id }
                        }}
                    >
                        <button  className="btn" id="viewbtn">VIEW STORIES</button>
                    </Link>
                </div>
               
            </div>
        </div>
    )
}

export default Location;