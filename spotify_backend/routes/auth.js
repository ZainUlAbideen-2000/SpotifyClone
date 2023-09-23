const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { getToken } = require('../utils/helpers');

router.post('/register', async (req, res) => {
    //Extracting the data from the request body
    const { email, password, firstName, lastName, userName } = req.body;

    //Checking if the user already exists
    const user = await User.findOne({ email: email });
    if (user) {
        return res
            .status(400)
            .json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserData = { firstName, lastName, email, userName, password: hashedPassword };
    const newUser = await User.create(newUserData);
    const token = await getToken(email, newUser);
    // console.log(token);
    //Sending the response
    const userToReturn = { ...newUser.toJSON(), token };
    delete userToReturn.password
    return res.status(200).json(userToReturn);

})

router.post("/login", async (req, res) => {
    // Step 1: Get email and password sent by user from req.body
    const { email, password } = req.body;

    // Step 2: Check if a user with the given email exists. If not, the credentials are invalid.
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(403).json({ err: "Invalid credentials" });
    }

    console.log(user);
    const isPasswordValid = await bcrypt.compare(password, user.password);
    // This will be true or false.
    if (!isPasswordValid) {
        return res.status(403).json({ err: "Invalid credentials" });
    }

    // Step 4: If the credentials are correct, return a token to the user.
    const token = await getToken(user.email, user);
    const userToReturn = { ...user.toJSON(), token };
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});

module.exports = router;