import Movies from "../../models/moviemodel.js";
const homepage=(req,res)=>{
    return res.render('./client/index.ejs');
}
const aboutpage=(req,res)=>{
    return res.render('./client/pages/about.ejs');
}
const contactpage=(req,res)=>{
    return res.render('./client/pages/contact.ejs');
}
const joinuspage=(req,res)=>{
    return res.render('./client/pages/joinus.ejs');
}
const reviewpage=async(req,res)=>{
    let data=await Movies.find({});   
    return res.render('./client/pages/review.ejs',{
        data
    });
}
const singlepage=async(req,res)=>{
    try {
        let {id}=req.params;
        let data=await Movies.findById(id);
        return res.render('./client/pages/single.ejs',{
            data
        });
    } catch (error) {
        return res.send("Error in single page");
    }
}
export {homepage,aboutpage,contactpage,joinuspage,reviewpage,singlepage};