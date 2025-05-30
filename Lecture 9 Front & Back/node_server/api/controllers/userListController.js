'use strict'
var mongoose = require('mongoose')
User = mongoose.model('Users')

exports.listAllUsers = async function(req, res){
    var query = { sort: { firstName: 1 } }
    try{
        let user = await User.find({}, null, query)
        res.status(200).json(user);
    } catch (error){
        res.status(500).json(error)
    }
}


exports.createAUser = async function(req, res){
    var newUser = new User(req.body)
    try{
        let user = await newUser.save()
        res.status(200).json(user);
    } catch (error){
        res.status(500).json(error)
    }
}

exports.readAUser = async function(req, res){
    //console.log(req.params.userId)
    try{
        let user = await User.findById(req.params.userId)
        res.status(200).json(user);
    } catch (error){
        res.status(500).json(error)
    }
}

exports.deleteAUser = async function(req, res) {
    console.log(req.params.userId);

    try {
        let user = await User.findByIdAndDelete(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const response = {
            message: "Delete user id: " + req.params.userId + " successfully",
            id: user._id
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.updateAUser = async function(req, res){
    //console.log(req.params.userId)
    var newUser = {}
    newUser = req.body

    try{
        let user = await User.findByIdAndUpdate(req.params.userId, newUser, {new: true})
        res.status(200).json(user);
    } catch (error){
        res.status(500).json(error)
    }
}