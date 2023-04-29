
const router = require('express').Router();
const {registerCheck}= require('../middleware/formvalidation')
const { 
    getAllProduit,
    addProduit
} = require('../controllers/ProduitController');

const {postUser,loginUser} = require('../controllers/UserController');


// user

router.post('/user/register',postUser);
router.post('/user/login',loginUser)

// prodiuit 

router.get('/produits',getAllProduit);
router.post('/produit/add',addProduit);






module.exports = router;