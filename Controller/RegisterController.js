const RegisterModel = require('../Models/RegisterModel');
const {v4: uuidv4} = require('uuid');


function Register(req, res){
    RegisterModel.findOne({phone: req.body.phone}, (err, user)=>{
        if(user){
            res.status(400).send({message:'user already exists'});
        }
        else if(!user){
            let user = new RegisterModel();
                user._id = uuidv4(),
                user.name = req.body.name,
                user.address = req.body.address,
                user.phone = req.body.phone

            user.save((err)=>{
                if(!err){
                    res.status(200).send({message:'user added successfully', user:user});
                }
                else{
                    throw err;
                }
            })
        }
        else{
            res.send(err);
        }
    })
}

function getUsers(req, res){
    RegisterModel.find({}, (err, data)=>{
        if(!err){
            res.status(200).send(data);
        }
        else{
            throw err;
        }
    })
}

function deleteUser(req, res){
    RegisterModel.deleteOne({_id:req.params.id}, (err, data)=>{
        if(!err){
            res.status(200).send(data);
        }
        else{
            throw err;
        }
    })
}

module.exports = {Register, getUsers, deleteUser};