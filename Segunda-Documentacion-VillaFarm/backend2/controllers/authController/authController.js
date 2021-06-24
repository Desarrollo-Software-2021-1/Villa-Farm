const User = require("../../models/User/User");
const jwt = require("jsonwebtoken");
const expressJwt = require('express-jwt');

exports.signup = (req, res) => {
    console.log('req.body', req.body);
    const user = new User(req.body);
    user.save((error, user) => {
        console.log('reached signup endpoint')
        if(error) {
            return res.status(400).json({
               message:'please check fields, there was an Error'
            })
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        })
    })
};

exports.signin = (req, res) => {

    const{email, password} = req.body
    User.findOne({email},(error, user) => {
        if(error || !user) {
            return res.status(400).json({
                error: 'User with that email does not exist'
            })
        }

        if(!user.authenticate(password)){
            return res.status(401).json({
                error: 'Email and password dont match'
            })
        }
        const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET)
        res.cookie('t', token, {expire: new Date() +9999})
        const {_id, name, email, role} = user
        return res.json({token, user:{_id, email, name, role}})
    })
}
// login
exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name'

    User.find().exec((err, data) => {
        if(err) {
            return res.status(400).json({
                error:errorHandler(err)
            })
        }
        res.json(data)
    })
}