import express from 'express';
import {getLocations,createLocation} from '../controller/location.js'
import auth from '../middleware/auth.js';

const router=express.Router();

router.get('/',getLocations);
router.post('/',auth,createLocation);

export default router;