const express = require('express');
const passport = require('passport');
const router = express.Router();
const Song = require('../models/Song');
const User = require('../models/User');

//Posting a song to the database  
router.post(
    "/create",
    passport.authenticate("jwt", { session: false }), async (req, res) => {
        // req.user getss the user because of passport.authenticate
        const { name, thumbnail, track } = req.body;
        if (!name || !thumbnail || !track) {
            return res
                .status(301)
                .json({ err: "Insufficient details to create song." });
        }
        const artist = req.user._id;
        const songDetails = { name, thumbnail, track, artist };
        const createdSong = await Song.create(songDetails);
        return res.status(200).json(createdSong);
    }
);

//Getting all mySongs from the database
router.get("/get/mysongs", passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const currentUser = req.user._id;
        const songs = await Song.find({ artist: req.user._id });
        return res.status(200).json({ data: songs });

    }
)


//Getting all songs of an artist by artist ID
router.get(
    "/get/artist/:artistId",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const { artistId } = req.params;
        // We can check if the artist does not exist
        const artist = await User.findOne({ _id: artistId });
        // ![] = false
        // !null = true
        // !undefined = true
        if (!artist) {
            return res.status(301).json({ err: "Artist does not exist" });
        }

        const songs = await Song.find({ artist: artistId });
        return res.status(200).json({ data: songs });
    }
);

//Getting Songs by name
router.get("/get/songname/:songName", passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const { songName } = req.params;

        //Patter matching is not implemented yet
        //for exampke vanilla will not match vanila
        const songs = await Song.find({ name: songName });
        return res.status(200).json({ data: songs });
    }
)

module.exports = router;