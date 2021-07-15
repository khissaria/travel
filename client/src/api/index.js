import axios from 'axios';

const API = axios.create({ baseURL: 'https://khissaria-travel.herokuapp.com/' });

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile'))
    {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    
    return req;
});


export const getLocation = () => API.get('/location');

export const createLocation = (newLocation) => API.post('/location', newLocation);

export const getAllDiscussions = () => API.get('/discussion/all');

export const getDiscussion = (locationId) => API.get('/discussion', { params: { locationId } });

export const getDiscussionbyID = (discussionId) => API.get('/discussion/getbyId', { params: { discussionId } });

export const createDiscussion = (newDiscussion) => API.post('/discussion', newDiscussion);

export const deleteDiscussion = (discussionId) => API.delete('/discussion', { params: { discussionId } });

export const editDiscussion = (id, updateDiscussion) => API.patch(`/discussion/${id}`, updateDiscussion);

export const signIn = (formData) => API.post('/users/signIn', formData);

export const signUp = (formData) => API.post('/users/register', formData);