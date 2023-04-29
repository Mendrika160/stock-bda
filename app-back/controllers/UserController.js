const {User} = require("../models/index");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const user = require("../models/user");


module.exports = {

    //get All user

    // getUser: (req, res) => {
    //     db.User.findAll().then(users => {
    //         res.render('user/index', { users })
    //     })


    // },
    // deleteUser: (req, res) => {
    //     let { id } = req.params;
    //     db.User.destroy({ where: { id: id } }).then(
    //         () => {
    //             res.redirect('/user')
    //         }
    //     )
    // },

    async postUser (req, res)  {

        
    const { name,password,email} = req.body;
    const saltRound = 10;
    console.log("body",req.body)
    
    try {
        bcrypt.genSalt(saltRound,(err,salt) => {
            if(err) throw err;
            bcrypt.hash(password,salt,(errorHash,hash) =>{
                if(errorHash) throw errorHash;
                console.log("hash",hash)
                User.create({
                    name: name,
                    email: email,
                    password: hash,
                    deletedAt : Date.now()
                }).then(user => {
                    res.status(200).json({ message : "user Added successfully",data : user})                         // res.redirect("/user/login");
                }).catch(err => {
                    res.status(404).send({
                        error: err.message
                    });
                });
            })
            
        })
        
        
    } catch (error) {
        res.status(404).send({
            error: error
        });
    }

    },
    async loginUser (req, res){
        let { email, password } = req.body;

        console.log("body log :" , req.body)
        User.findOne({
            where: { email: email } ,
          })
            .then(user => {
                if(user){
                    bcrypt.compare(password, user.password, (err, result) => {
                        if( err) throw err;
                        if (result){
                            res.status(200).json({
                                message : "log in successffuly"
                            })
                        }else{
                            res.status(404).json({
                                message : "password incorrect"
                            })
                        }
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    message : err.message
                })
            })
        
        

    },
    // logoutUser: (req, res) => {

    //     req.logout();
    //     // req.flash("success_msg","you are logged out")
    //     res.redirect("/login")

    // }



}