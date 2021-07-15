import express from 'express';
import {getDiscussion,createDiscussion,getDiscussionbyId,deleteDiscussion,editDiscussion,getAllDiscussions} from '../controller/discussion.js'
import auth from '../middleware/auth.js';

const router=express.Router();

router.get('/',getDiscussion);
router.post('/',auth,createDiscussion);
router.get('/getbyId',getDiscussionbyId);
router.delete('/',auth,deleteDiscussion);
router.patch('/:id',auth,editDiscussion);
router.get('/all',getAllDiscussions);

export default router;