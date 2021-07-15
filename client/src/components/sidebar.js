import React from 'react';
import rocket from '../images/rocket.svg';
import discussion from '../images/discussion.svg'
import homeImg from '../images/home.svg'

const SideBar = () => {
    
    return (
        <div className="sticky top-20">
            <div className="md:sticky md:top-10 fixed inset-x-0 bottom-0 justify-center z-20 bg-white rounded-xl mx-2 md:w-20 flex md:flex-col flex-row md:py-10 ">
                <a aria-current="page" className="pl-2 active" href="/">
                    <img src={homeImg} alt="Home" className="w-14 h-14 m-2  p-2 rounded" /></a>
                <a className="pl-1" href="/locations">
                    <img src={rocket} alt="Home" className="w-14 h-14 m-2  p-2 rounded" /></a>
                <a className="pl-1" href="/discussions">
                    <img src={discussion} alt="Home" className="w-14 h-14 m-2  p-2 rounded" /></a>
                
            </div>
        </div>
    )

}

export default SideBar;