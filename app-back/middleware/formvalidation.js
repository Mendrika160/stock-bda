const {body,check} = require('express-validator');
//load user modal


const registerCheck = () => {
    return [
        body('name')
            .trim().notEmpty().withMessage('username field is required')
            .isLength({min: 4}).withMessage('the username lenght is at least 4 '),
        body('email')
            .isEmail().withMessage('This is not an email')
            .notEmpty().withMessage('Email field is required'),
            // .custom( (value,{req}) => {
            //     return new Promise((resolve, reject) => {
            //         adminUser.findOne({email:req.body.email}, function(err, user){
            //             if(err) {
            //                 reject(new Error('Server Error'))
            //             }
            //             if(Boolean(user)) {
            //                 reject(new Error('E-mail already in use'))
            //             }
            //             resolve(true)
            //             });
            //         });
            // }),
        body('password')
            .notEmpty().withMessage('Password field is required')
            .isLength({min: 6}),
        body('confirmPassword')
            .notEmpty().withMessage('Confirm password is required')
            .custom((value,{req}) =>{
            if(value !== req.body.password){
                throw new Error('Password not equal to confirm password');
            }

            // Indicates the success of this synchronous custom validator
            return true;
        })
    ]
}

const loginCheck = () => {
    return [
        body('email')
            .isEmail().withMessage('This is not an email')
            .notEmpty().withMessage('Email field is required'),
        body('password')
            .notEmpty().withMessage('Password field is required')
            .custom()

    ]
}

module.exports = {registerCheck,loginCheck}