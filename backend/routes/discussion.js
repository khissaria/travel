import express from 'express';
import {getDiscussion,createDiscussion,getDiscussionbyId,deleteDiscussion,editDiscussion} from '../controller/discussion.js'

const router=express.Router();

router.get('/',getDiscussion);
router.post('/',createDiscussion);
router.get('/getbyId',getDiscussionbyId);
router.delete('/',deleteDiscussion);
router.patch('/:id',editDiscussion);

export default router;