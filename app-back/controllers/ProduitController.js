const  { Produit,User} = require('../models/index'); 
const { Op } = require('sequelize');
const produit = require('../models/produit');

module.exports = {
    /**
     *
     */

    async getAllProduit(req, res){
        Produit.findAll({
            include: [
                {
                  model: User,
                  attributes: ['id', 'name'],
                },
            ]
        })
            .then(produits => { 
                res.status(200).json(produits)
            })
            .catch(err => { 
                res.status(400).json({
                    status : "400",
                    data : err.message
                })
            })
    },

    async addProduit(req, res){
        console.log("body",req.body)
        Produit.create(req.body)
            .then(() => { 
                res.status(200).json({
                    status : "200",
                    data: "Add one product successfuly"
                })
            })
            .catch(err => { 
                res.status(400).json({
                    status : "400",
                    data : err
                })
            })
    },

    async findOneProduit(req, res){
        const { id } = req.params;
        try {
            Produit.findByPk(id)
            .then((produit) => { 
                res.status(200).json({
                    status : "200",
                    data: produit
                })
            })
            .catch(err => { 
                res.status(400).json({
                    status : "400",
                    data : err
                })
            })
            
        } catch (error) {
            res.status(400).json({
                status : "400",
                data : error
            })
            
        }
       
      
      
    },

    // async editOneProduit(req,res){
    //     const { id } = req.params;

    //     try{
    //         const produit = await Produit.update(req.body,{where : { id: id}});
    //         if(!produit){
    //             return res.status(404).json({
    //                     status: '404',
    //                     data : 'produit n\' existe pas'
    //                 })
    //         }
    //         return res.status(200).json({status : '200',data : `le produit numero ${id} a ete modifier avec succes`});

    //     }catch(err){
    //         return res.status(400).json({
    //             status:'400', 
    //             data : err.message
    //         })
    //     }
    // },

    // async deleteOneProduit(req,res){
    //     const { id } = req.params;
    //     try{
    //         const produit = await Produit.destroy({where : { id : id}})
    //         if(!produit){
    //             return res.status(404).json({
    //                 status: '404',
    //                 data : 'produit que vous voulez effacer n\'existe pas'
    //             })
    //         }
    //         return res.status(200).json({ status : '200',data : 'suppression de produit avec succes'})

    //     }catch(err){
    //         return res.status(400).json({
    //             status:'400', 
    //             data : err.message
    //         })
    //     }
        
    // },

    
    // async getAllBonProduit(req,res){
    //     const {id } = req.params;
        
     

    // }
    
    
}