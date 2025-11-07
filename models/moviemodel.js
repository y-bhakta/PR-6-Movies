import e from "express";
import mongoose from "mongoose";

const movieSchema=new mongoose.Schema({
    image:{
        required : true,
        type : String
    },
    title : {
        required : true,
        type : String,
    },
    date : {
        required : true,
        type : String
    },
    description : {
        required : true,
        type : String
    }
},{
    timestamps:true
});

let Movies=mongoose.model('movies',movieSchema);
export default Movies;