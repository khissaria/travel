import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

autoIncrement.initialize(mongoose);

const discussionSchema=mongoose.Schema({
    
    locationId:Number,
    title:String,
    description:String,
    imgFile:String,
    createdBy:String,
    createdAt:{
        type:Date,
        default:new Date()
    }
});

discussionSchema.plugin(autoIncrement.plugin,'discussion');
const Discussion=mongoose.model('discussion',discussionSchema);
export default Discussion;