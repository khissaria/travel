import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signIn } from '../actions/auth';
import { Link } from 'react-router-dom'
import join from '../images/join.png'

const signInState = { signInEmail: '', signInPassword: '' }

const Login = () => {
    const [loginData, setLoginData] = useState(signInState);
    const dispatch = useDispatch();
    const history = useHistory({ forceRefresh: true });
    const handleSignInChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        dispatch(signIn(loginData, history));

    }
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        if (user)
            history.push('/');
    }, [])

    return (
        <div>
            <div className=" md:p-10 p-4 bg-gray-50 rounded">
                <div>

                    <div className="flex md:flex-row flex-col ">
                        {

                            <form
                                onSubmit={handleSignIn}
                                className=" bg-white md:w-5/12 p-10 md:h-5/6 md:my-10 md:mx-10 flex flex-col justify-center border-2  rounded-md">
                                <h1 className="text-2xl font-semibold py-2">👋 Welcome back</h1>

                                <input
                                    required
                                    type="email"
                                    name="signInEmail"
                                    placeholder="Email"
                                    className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                                    onChange={handleSignInChange}
                                />

                                <input
                                    required
                                    type="password"
                                    name="signInPassword"
                                    placeholder="Password"
                                    className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                                    onChange={handleSignInChange}
                                />


                                <button
                                    type="submit"
                                    className="flex text-lg w-full m-2 bg-purple-400 hover:bg-purple-500 font-semibold text-white px-6 py-2 rounded">
                                    Sign In
                                </button>
                                <Link to="/register" className="focus:outline-none hover:underline text-center text-purple-400 font-semibold mx-4">
                                    Don't have an account? Register
                                </Link>
                            </form>

                        }

                        <img src={join} alt="join now" className="md:w-1/2 h-full md:mt-0 mt-10" />

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Login;