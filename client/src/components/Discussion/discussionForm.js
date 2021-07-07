import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createDiscussion,editDiscussion } from '../../actions/location'
import '../../style/discussion.css'

const DiscussionForm = (locationID) => {


    const dispatch = useDispatch();


    const [discussionData, setDiscussionData] = useState({
        locationId: '',
        title: '',
        description: '',
        imgFile: '',
        createdBy: ''
    });

    const discussion = useSelector((state) => (locationID.currentId !== undefined ? state.discussion.find(discussion => (discussion._id === locationID.currentId)) : null));

    const clear = () => {
        locationID.setCurrentId(0);
        setDiscussionData({

            locationId: '',
            title: '',
            description: '',
            imgFile: '',
            createdBy: ''
        });
    }

    useEffect(() => { setDiscussionData({ ...discussionData, locationId: locationID.locationId }) }, [locationID]);

    useEffect(() => {

        if (discussion) {
            setDiscussionData({ ...discussionData, title: discussion.title, description: discussion.description, createdBy: discussion.createdBy, imgFile: discussion.imgFile });

        }
    }, [discussion]);





    const handleSubmitDiscussion = (e) => {
        e.preventDefault();

        if (locationID.currentId === 0) {
            dispatch(createDiscussion(discussionData));
        }
        else
        {
            dispatch(editDiscussion(locationID.currentId,discussionData));
        }
        clear();
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmitDiscussion} className="form" method="POST">
                <h6>Add New Story-</h6>
                <div className='controls'>
                    <input type="text" id="title" value={discussionData.title} onChange={(e) => setDiscussionData({ ...discussionData, title: e.target.value })} placeholder="Title" required />
                </div>
                <div className='controls'>
                    <textarea type="text" id="description" value={discussionData.description} placeholder="Description" onChange={(e) => setDiscussionData({ ...discussionData, description: e.target.value })} required />
                </div>
                <div className='controls'>
                    <input type="text" id="createdBy" value={discussionData.createdBy} onChange={(e) => setDiscussionData({ ...discussionData, createdBy: e.target.value })} placeholder="Creator Name" required />
                </div>

                <div className='fileInput'><FileBase type="file" value={discussionData.imgFile} multiple={false} onDone={({ base64 }) => setDiscussionData({ ...discussionData, imgFile: base64 })} /></div>
                <div className="controls">
                    <button type="submit" className="btn" id="submit">SUBMIT</button>
                    <button type="reset" onClick={() => clear()} className="btn" id="clear">CLEAR</button>
                </div>
            </form>
        </div>
    )

}

export default DiscussionForm;