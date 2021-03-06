import mongoose from 'mongoose';
import Location from '../model/location.js';


export const getLocations = async (req, resp) => {
    try {

        const locations = await Location.aggregate([{
            $lookup: {
                from: "users",
                localField: "ObjectId(createdBy)", foreignField: "ObjectId(_id)", as: "userData"
            }
        }])
        resp.status(200).json(locations);
    }
    catch (err) {
        resp.status(404).json({ message: err.message });
    }
}


export const createLocation = async (req, resp) => {
    const location = req.body;
    const newLocation = new Location({ ...location, createdBy: req.userId, createdAt: new Date().toISOString() });
    try {
        newLocation.save();
        resp.status(200).json(newLocation);
    }
    catch (err) {
        resp.status(400).json({ message: err.message });
    }
}