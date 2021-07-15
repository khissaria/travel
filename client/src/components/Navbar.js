import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import logoutImg from '../images/logout.svg'
import profileImg from '../images/user.svg'


function Navbar() {
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        window.location='/';
    }

    useEffect(() => {
        
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime())
                logout();
            setUser(JSON.parse(localStorage.getItem('profile')));

        }

    }, []);

    return (<>
        <div className="sticky top-0 z-10">
            <div className="bg-white  p-4 flex">
                <a href="/">
                    <h1 className=" text-gray-600 text-2xl font-mono font-bold ">♨ 
                        <span className="md:inline-block hidden">things2do</span>
                    </h1>
                </a>
                {!user?
                <div className="flex ml-auto mr-2">
                    <div className="">
                        <div className="flex flex-row ml-auto mr-2">
                            <a className="mx-2" href="/login">
                                <button className="md:text-xl text-sm border-2 border-gray-600  font-bold text-gray-700 px-6 py-2 rounded">Login</button>
                            </a>
                            <a className="mx-2" href="/register">
                                <button className="md:text-xl text-sm border-2 border-gray-700 bg-gray-600 hover:bg-gray-700 font-bold text-white px-6 py-2 rounded">Create an account</button>
                            </a>
                        </div>
                    </div>
                </div>:
                <div className="flex ml-auto mr-4 ">
                    <div className="flex mx-2 border-2 px-2 py-1 rounded-full">
                        <h1 className="text-xl font-semibold mx-4 ">
                            {user ? user.profile.email.toString().toLowerCase() : ''}
                        </h1>
                        <img src={profileImg} alt="me" className="flex h-8 w-8 " />

                    </div>

                    <img
                        onClick={() => logout()}
                        src={logoutImg} alt="logout" className="cursor-pointer hover:bg-red-100 rounded-full flex h-10 w-10 p-1" />

                </div>}
            </div>
        </div>

    </>
    )
}

export default Navbar;