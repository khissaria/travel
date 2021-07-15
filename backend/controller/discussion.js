import mongoose from 'mongoose';
import Discussion from '../model/discussion.js';

export const getDiscussion = async (req, resp) => {
    const query = req.query;

    try {
        const discussion = await Discussion.aggregate([
            {
                $match: { locationId: parseInt(query.locationId) }
            },

            {
                $lookup: {
                    from: "users",
                    localField: "ObjectId(createdBy)", foreignField: "ObjectId(_id)", as: "userData"
                }
            },
            {
                $lookup: {
                    from: "travels",
                    localField: "ObjectId(locationId)", foreignField: "ObjectId(_id)", as: "locationData"
                }
            }
        ]);

        resp.status(200).json(discussion);
    }
    catch (err) {
        resp.status(404).json({ message: err.message });
        console.log(err.message);
    }
}

export const getAllDiscussions = async (req, resp) => {

    try {
        const discussions = await Discussion.aggregate([{
            $lookup: {
                from: "users",
                localField: "ObjectId(createdBy)", foreignField: "ObjectId(_id)", as: "userData"
            }
        },
        {
            $lookup: {
                from: "travels",
                localField: "ObjectId(locationId)", foreignField: "ObjectId(_id)", as: "locationData"
            }
        }
        ])
        resp.status(200).json(discussions);
    }
    catch (err) {
        resp.status(404).json({ message: err.message });
    }
}

export const getDiscussionbyId = async (req, resp) => {

    const query = req.query;

    try {
        const discussion = await Discussion.find({ _id: query.discussionId });
        resp.status(200).json(discussion);
    }
    catch (err) {
        resp.status(404).json({ message: err.message });
    }
}

export const createDiscussion = (req, resp) => {
    const discussion = req.body;

    const newDiscussion = new Discussion({ ...discussion, createdBy: req.userId, createdAt: new Date().toISOString() });
    try {
        newDiscussion.save();
        resp.status(200).json(newDiscussion);
    }
    catch (err) {
        resp.status(404).json({ message: err.message });
    }
}

export const deleteDiscussion = (req, resp) => {

    const query = req.query;


    Discussion.findOneAndRemove({ _id: query.discussionId },
        function (err, docs) {
            if (err) {
                resp.json({ message: err.message });
            }
            else {
                resp.json({ message: 'Deleted' });
            }
        });


}

export const editDiscussion = (req, resp) => {
    const { id } = req.params;
    const discussion = req.body;


    try {
        Discussion.findOneAndUpdate({ _id: id }, req.body, { new: true }, (err, doc) => {
            if (err) {
                resp.json({ message: err.message });
            }
            resp.json(doc);

        });

    }
    catch (err) {

        console.log(err.message);

    }
}