import { AUTH } from "../constants/actionType";
import * as api from '../api/index.js'

export const signIn = (formData, history) => async (dispatch) => {

    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        history.go(0);
    }
    catch (err) {
        alert('Invalid Credentials. Please try again.');
        console.log(err.message);
    }
}

export const signUp = (formData, history) => async (dispatch) => {

    try {

        await api.signUp(formData)
            .then((data) => {alert('Registered successfully, Please login to browse');history.push('/')})
            .catch((err) => console.log(err.message));


    }
    catch (err) {
        console.log(err.message);
    }
}