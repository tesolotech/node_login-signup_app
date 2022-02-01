
const mongoose = require('mongoose');
const User = require('../models/user.model.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



// Create and save user
exports.signupUser = (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    status: 409,
                    message: "User Exists"
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            status: 500,
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            name: req.body.name,
                            email: req.body.email,
                            password: hash
                        });
                        user.save()
                            .then(result => {
                                res.status(201).json({
                                    status: 201,
                                    message: 'User created successfull'
                                })
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    status: 500,
                                    error: err
                                });
                            });
                    }
                })
            }
        })
        .catch()

};

// Login user
exports.loginUser = (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                res.status(401).json({
                    status: 401,
                    message: 'Auth Failed'
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    res.status(401).json({
                        status: 401,
                        message: 'Auth Failed'
                    });
                }
                if (result) {
                    const token = jwt.sign({
                        email: user[0].email,
                        userId: user[0]._id
                    },
                        'RADHASWAMI',
                        {
                            expiresIn: '1h',

                        });

                    res.status(200).json({
                        status: 200,
                        message: 'Auth Successful',
                        token: token
                    });
                }
                if (err) {
                    res.status(401).json({
                        status: 402,
                        message: 'Auth Failed'
                    });
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                status: 500,
                error: err
            });
        })
};



//Get all Users
exports.GetAllUser = (req, res) => {
    User.find()
        .then(result => {

            res.status(200).json({
                status: 200,
                data: result,
                message: 'Success'
            });
        }).catch(err => {
            res.status(500).send({
                status: 500,
                message: err.message || "Some error occurred while retrieving users."
            });
        });
};

//Get Single Users by id
exports.GetUserById = (req, res) => {

    User.findById({ _id: req.params.userId })
        .exec()
        .then(result => {
            res.status(200).json({
                status: 200,
                data: result
            });
        }).catch(err => {
            res.status(500).send({
                status: 500,
                message: err.message || "Some error occurred while retrieving users."
            });
        });
};
