const express = require('express');
const mongoose = require('mongoose');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const authRoutes = require('./routes/auth');
const songRoute = require('./routes/song')
const playlistRoute = require('./routes/playlist')
const passport = require('passport');
const User = require('./models/User');
require('dotenv').config();
const app = express();
const port = 8000;


app.use(express.json());

//Connected to MongoDB
mongoose
    .connect("mongodb+srv://zainarshad131:" +
        process.env.MONGO_PASSWORD + "@cluster0.2fwarxa.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then((x) => {
        console.log('MongoDB Connected')
    })
    .catch(err => console.log(err));


//Passport Middleware
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
            const user = await User.findById(jwt_payload.identifier);
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (err) {
            return done(err, false);
        }
    })
);





app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/auth', authRoutes)
app.use('/song', songRoute);
app.use('/playlist', playlistRoute)

app.listen(port, () => console.log('Server running on port 8000'));