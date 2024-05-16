const { getMemes, postMeme } = require("../controllers/meme");

const memesRouter= require("express").Router();

memesRouter.get("/", getMemes);
memesRouter.post("/", postMeme);

module.exports = memesRouter;