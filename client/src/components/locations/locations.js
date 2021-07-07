import React from 'react';
import Location from './location/location'
import { useSelector } from 'react-redux';
import '../../style/locations.css'


function Locations({setCurrentLocationID}) {
    const locations = useSelector((state) => state.location);
   
    
    return (
        <>
            <div className="projects">
                {locations.map((lct) => (
                    <Location location={lct} key={lct._id} />
                ))}
            </div>
        </>
    )
}

export default Locations;