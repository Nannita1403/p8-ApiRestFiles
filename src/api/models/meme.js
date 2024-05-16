const mongoose = require("mongoose");

const memeSchema = new mongoose.Schema( {
        img:{type:String,require:true },
        textoSuperior:{type:String, require:false},
        textoInferior: {type:String, require:false},
}, {
    timestamps: true,
    collection: "memes"
});

const Meme = mongoose.model("memes", memeSchema, "memes");
module.exports= Meme;