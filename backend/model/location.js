import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

autoIncrement.initialize(mongoose);

const locationSchema=mongoose.Schema({
    
    name:String,
    state:String,
    country: String,
    description:String,
    imgFile:String,
    createdBy:String,
    createdAt:{
        type:Date,
        default:new Date()
    }
});

locationSchema.plugin(autoIncrement.plugin,'travel');
const Location=mongoose.model('travel',locationSchema);
export default Location;