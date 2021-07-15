import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { signUp } from '../actions/auth';
import joinImg from '../images/join.png'

const signUpState = { userName: '', email: '', password: '', cnfPassword: '' }

const Register = () => {

    const [registerData, setRegisterData] = useState(signUpState);
    const dispatch = useDispatch();
    const history = useHistory();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        if (user)
            history.push('/');
    }, [])
    const handleSignUpChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value })
    }

    const handleSignUp = (e) => {
        if (registerData.password === registerData.cnfPassword) {
            e.preventDefault();
            dispatch(signUp(registerData, history));
            // alert('Registration successful. Login to access the Application')
            // window.location = '/login';
        }
        else {
            alert('Password do not match');
        }
    }
    const [error, setError] = useState('')
    return (

        <div>
            <div className=" md:p-10 p-4 bg-gray-50 rounded">
                <div>

                    <div className="flex md:flex-row flex-col ">

                        <form
                            onSubmit={handleSignUp}
                            className=" bg-white md:w-5/12 md:h-5/6 p-10 md:mx-10 flex flex-col border-2  rounded-md">
                            <h1 className="text-2xl font-semibold">🎓 Join the makersclub</h1>

                            <p className="text-red-300 py-2 text-center">{error}</p>

                            <input
                                required
                                type="text"
                                placeholder="Name"
                                className="text-lg m-2 bg-gray-100 py-2 px-4 w-full rounded"
                                name="userName"
                                onChange={handleSignUpChange}
                            />

                            <input
                                required
                                type="email"
                                placeholder="Email"
                                className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                                name="email"
                                onChange={handleSignUpChange}
                            />

                            <input
                                required
                                type="password"
                                placeholder="Password"
                                className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                                name="password"
                                onChange={handleSignUpChange}
                            />

                            <input
                                required
                                type="password"
                                placeholder="Confirm password"
                                className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                                name="cnfPassword"
                                onChange={handleSignUpChange}

                            />
                            <button
                                type="submit"
                                className="text-lg  w-full m-2 bg-purple-400 hover:bg-purple-500 font-semibold text-white px-6 py-2 rounded">Sign up</button>
                            <Link to="/login" className="hover:underline focus:outline-none text-center text-purple-400 font-semibold mx-4">
                                Already a user? Login
                            </Link>
                        </form>




                        <img src={joinImg} alt="join now" className="md:w-1/2 h-full md:mt-0 mt-10" />

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Register;