import * as api from '../api'

export const getLocation = () => async (dispatch) => {
    try {
        const { data } = await api.getLocation();
        dispatch({ type: 'FETCH_ALL', payload: data })
    }
    catch (err) {
        console.log(err.message);
    }

}

export const createLocation = (location) => async (dispatch) => {
    try {
        const { data } = await api.createLocation(location);
        dispatch({ type: 'CREATE', payload: data });
    }
    catch (err) {
        console.log(err);
    }
}



export const getDiscussion = (locationId) => async (dispatch) => {

    try {

        const { data } = await api.getDiscussion(locationId);
        dispatch({ type: 'FETCH_DISCUSSION', payload: data })
    }
    catch (err) {
        console.log(err.message);
    }
}

export const createDiscussion = (discussion) => async (dispatch) => {
    try {
        const { data } = await api.createDiscussion(discussion);
        dispatch({ type: 'CREATE_DISCUSSION', payload: data });
    }
    catch (err) {
        console.log(err);
    }
}

export const getDiscussionbyId = (discussionId) => async (dispatch) => {
    try {

        const { data } = await api.getDiscussionbyID(discussionId);
        dispatch({ type: 'GET_DISCUSSION', payload: data })
    }
    catch (err) {
        console.log(err);
    }
}

export const deleteDiscussion = (discussionId) => async (dispatch) => {
    try {

        await api.deleteDiscussion(discussionId);
        dispatch({ type: 'DELETE_DISCUSSION', payload: discussionId });
    }
    catch (err) {
        console.log(err);
    }
}

export const editDiscussion = (id, updateDiscussion) => async (dispatch) => {
    try {

        const { data } = await api.editDiscussion(id, updateDiscussion);
        debugger;
        console.log(data);
        dispatch({ type: 'EDIT_DISCUSSION', payload: data })
    }
    catch (err) {
        console.log(err.message);
    }
}