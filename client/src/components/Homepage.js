import React,{useEffect,useState} from 'react';
import {useDispatch} from 'react-redux';
import Locations from './locations/locations';
import {getLocation} from '../actions/location'; 

const Homepage=()=>{
    const [currentLocationID,setCurrentLocationID]=useState(0);

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getLocation());
       },[dispatch]);
       
       return(
           <Locations setCurrentLocationID={setCurrentLocationID}/>
       )
}

export default Homepage;
