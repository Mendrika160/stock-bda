const db = require("../models/index");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");


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
                db.User.create({
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
    // loginUser: (req, res) => {
    //     let { email, password } = req.body;
    //     let errors = [];

    //     if (!email || !password) {
    //         errors.push({ msg: "veuillez remplir tous les champs" })
    //     }
    //     if (errors.length > 0) {
    //         res.render('user/login', {
    //             errors
    //         })
    //     } else {


    //         db.User.findOne({
    //             where: {
    //                 email: email
    //             }
    //         }).then(user => {
    //             if (!user) {
    //                 errors.push({ msg: "email not found" });
    //                 res.render('user/login', { errors });
    //                 /* res.status(404).send({  
    //                         message : " utilisateur introuvable"
    //                     })
    //                     */
    //             } else {
    //                 bcrypt.compare(password, user.password, (err, result) => {
    //                     if (result == true) {
    //                         const token = jwt.sign({ email: email }, 'secretkey');
    //                         //res.json(token);
    //                         res.redirect("/team")
    //                     } else {
    //                         errors.push({ msg: "password incorrect" });
    //                         res.render('user/login', { errors });
                    
    //                     }
    //                 });
    //             }
    //         });
    //     }

    // },
    // logoutUser: (req, res) => {

    //     req.logout();
    //     // req.flash("success_msg","you are logged out")
    //     res.redirect("/login")

    // }



}