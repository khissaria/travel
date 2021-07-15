import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLocation } from '../actions/location';
import Locations from './locations/locations';

const LocationPage = () =>{
    const [currentLocationID, setCurrentLocationID] = useState(0);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLocation());
    }, [dispatch]);

    return(
        <Locations setCurrentLocationID={setCurrentLocationID} />
    )
}

export default LocationPage;