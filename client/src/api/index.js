import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getLocation = () => API.get('/location');

export const createLocation = (newLocation) => API.post('/location', newLocation);

export const getDiscussion = (locationId) => API.get('/discussion', { params: { locationId } });
export const getDiscussionbyID = (discussionId) => API.get('/discussion/getbyId', { params: { discussionId } });

export const createDiscussion = (newDiscussion) => API.post('/discussion', newDiscussion);

export const deleteDiscussion = (discussionId) =>API.delete('/discussion', { params: { discussionId } });

export const editDiscussion = (id,updateDiscussion) =>    API.patch(`/discussion/${id}`,updateDiscussion);