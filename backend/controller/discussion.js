import mongoose from 'mongoose';
import Discussion from '../model/discussion.js';

export const getDiscussion = async (req, resp) => {
    const query = req.query;
    try {
        const discussion = await Discussion.find({ locationId: query.locationId });
        resp.status(200).json(discussion);
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

    const newDiscussion = new Discussion({ ...discussion, createdAt: new Date().toISOString() });
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
    console.log(query.discussionId);

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