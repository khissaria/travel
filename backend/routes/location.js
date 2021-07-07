import express from 'express';
import {getLocations,createLocation} from '../controller/location.js'

const router=express.Router();

router.get('/',getLocations);
router.post('/',createLocation);

export default router;