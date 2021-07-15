import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteDiscussion } from '../../actions/location'
import userImg from '../../images/user.svg'
import deleteImg from '../../images/delete.webp'
import editImg from '../../images/edit.svg'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export const DiscussionTemplate = ({ discussions }) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    let isValid = false;
    let author = 'Anonymus';
    let locationName='';
    discussions.userData.forEach((user) => {
        if (discussions.createdBy) {
            if (user._id === discussions.createdBy) {
                author = user.userName;
            }
        }
    })
    discussions.locationData.forEach((location)=>{
        if(location._id===discussions.locationId){
            locationName=location.name;
        }
    })
    if (user) {
        if (user.profile._id === discussions.createdBy) {
            isValid = true;
        }
    }

    function handleDelete() {
        confirmAlert({
            title: 'Delete Discussion',
            message: 'Are you sure you want to delete?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => dispatch(deleteDiscussion(discussions._id))
                },
                {
                    label: 'No',
                    onClick: () => ''
                }
            ]
        });
    }
    
    console.log(discussions);
    return (
        <div key={discussions._id}>
            <img src={discussions.imgFile} alt={discussions.imgFile} className="mh-48 w-full object-cover md:w-90" />
            <div className="border m-1 p-6 rounded-md bg-white">
                <h1 className="text-2xl font-semibold">{discussions.title}</h1>
                <div className="text-xl p-2">
                    <p>{discussions.description}</p>
                </div>
                <div className="flex flex-row mt-2">
                    <div className="flex">
                        <img src={userImg} alt="profile" className="h-8 w-8" />
                        <span className="text-xl capitalize mx-2">{author}</span>
                    </div>
                    {isValid ?
                        <div className="ml-auto mr-2 flex">

                            <button onClick={handleDelete}>
                                <img src={deleteImg} alt="profile" className=" cursor-pointer h-10 w-10 mx-4 bg-pink-100  hover:bg-purple-100 rounded-full p-2" />
                            </button>
                            <Link
                                to={{
                                    pathname: `/adddiscussion`,
                                    state: { data: discussions,name:locationName }
                                }}
                            >
                                <img src={editImg} alt="profile" className=" cursor-pointer h-10 w-10 mx-4 bg-pink-100  hover:bg-purple-100 rounded-full p-2" />

                            </Link>
                            

                        </div> : ''}
                </div>
            </div>
        </div>
    )

}