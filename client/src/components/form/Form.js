import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../style/form.css'
import { createLocation } from '../../actions/location'
import FileBase from 'react-file-base64';


const Form=()=> {

    const dispatch = useDispatch();

    const [locationData, setLocationData] = useState({
        name: '',
        state: '',
        country: '',
        description: '',
        imgFile:''
    });

    const clear = () =>
    {
        setLocationData({
            name:'',
            state:'',
            country:'',
            description:'',
            imgFile:''
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createLocation(locationData));
        clear();
        
    }
    return (<>
        <div id="container">
            <header id="title-container">
                <h1 id="title">Add New Location</h1>
                <p id="description">Thank you for taking the time to help us improve the platform</p>
            </header>
            <form onSubmit={handleSubmit} method="POST">
                
                <div className="form-group">
                  
                    <input type="text" id="name" value={locationData.name} className="form-control" onChange={(e) => setLocationData({ ...locationData, name: e.target.value })} placeholder="Enter Location Name" required />
                </div>
                <div className="form-group">
                    <textarea type="text" id="description" value={locationData.description} className="form-control" placeholder="Description" onChange={(e) => setLocationData({ ...locationData, description: e.target.value })} required />
                </div>
                <div className="form-group">
                    <input type="text" id="state" value={locationData.state} className="form-control" placeholder="Enter the State" onChange={(e) => setLocationData({ ...locationData, state: e.target.value })} required />
                </div>
                <div className="form-group">
                    <select name="role" id="dropdown" value={locationData.country} className="form-control" required onChange={(e) => setLocationData({ ...locationData, country: e.target.value })}>
                        <option selected disabled defaultValue value=''>Select Country</option>
                        <option value="India">India</option>
                        <option value="USA">United States of America</option>
                        <option value="Britain">Britain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className='fileInput'><FileBase type="file" value={locationData.imgFile} multiple={false} onDone={({ base64 }) => setLocationData({ ...locationData, imgFile: base64 })} /></div>

                <div className="form-group">
                    <button type="submit" className="btn" id="submit">Submit</button>
                </div>
            </form>
        </div>

    </>
    )
}

export default Form;