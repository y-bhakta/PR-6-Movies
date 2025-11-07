import Movies from "../../models/moviemodel.js";
import fs from "fs";
export const dashboard = (req,res)=>{
    return res.render('./server/index.ejs');
}
export const formbasicpage = (req,res)=>{
    return res.render('./server/pages/form-basic.ejs');
}
export const tablespage = async(req,res)=>{
    let movies=await Movies.find({});
    return res.render('./server/pages/tables.ejs',{
        movies
    });
}
export const addmovie=async(req,res)=>{
    try {
        req.body.image=req.file.path;
        let data=await Movies.create(req.body);
        return res.redirect('/server/tables');
    } catch (error) {
        return res.json({message:error.message});
    }
}
export const deleteMovie=async(req,res)=>{
    try {
        let {id}=req.params;
        let data=await Movies.findByIdAndDelete(id);
        fs.unlinkSync(data.image);
        return res.redirect('/server/tables');
    } catch (error) {
        return res.json({message:error.message});
    }
}
export const editMovie=async(req,res)=>{
    try {
        let {id} = req.params;
        let movie=await Movies.findById(id);
        return res.render('./server/pages/editpage.ejs',{
            movie
        })
    } catch (error) {
        return res.json({message:error.message});
    }
}

export const updateMovie=async(req,res)=>{
    try{
        const existingMovie = await Movies.findById(req.params.id);
        if(req.file){
            fs.unlinkSync(existingMovie.image);
            req.body.image = req.file.path;
        }else{
            req.body.image = existingMovie.image;
        }
        const movie=await Movies.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if (!movie) { 
            return res.status(404).send("Movie not found");
        }else{
            console.log('Movie updated:', movie);
        }
        return res.redirect('/server/tables');
    }catch(error){
        return res.json({message:error.message});
    }
}