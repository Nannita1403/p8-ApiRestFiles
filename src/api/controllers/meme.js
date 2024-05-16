const Meme = require("../models/meme");

const getMemes = async (req,res,next)=>{
    try {
        const memes = await Meme.find();
        return res.status(200).json(memes);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const postMeme = async (req,res,next)=> {
    try {
        const newMeme = new Meme(req.body);
        const memePosted = await newMeme.save();
        return res.status(201).json(memePosted);
    } catch (error) {
        return res.status(400).json("Error en el post del Meme")
    }
}

module.exports={getMemes, postMeme}