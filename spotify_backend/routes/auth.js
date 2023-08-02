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
    const hashedPassword = bcrypt.hash(password, 10);
    const newUserData = { firstName, lastName, email, userName, password: hashedPassword };
    const newUser = await User.create(newUserData);
    const token = await getToken(email,newUser);
    console.log(token);
    //Sending the response
    const userToReturn = {...newUser.toJSON(), token};
    delete userToReturn.password
    return res.status(200).json(userToReturn); 
    
})

router.post('/login', async (req, res) => {
    //Extracting the data from the request body
    const { email, password } = req.body;

    //Checking if the user already exists
    const user = await User.findOne({ email: email });
    if(!user){
        return res.status(403).json({message: 'User does not exist'});
    }

    //Checking if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if(!isPasswordCorrect){
        return res.status(403).json({message: 'Password is incorrect'});
    }

    //Sending the response
    const token = await getToken(user.email,user);
    const userToReturn = {...user.toJSON(), token};
    delete userToReturn.password
    return res.status(200).json(userToReturn);
});

module.exports = router;