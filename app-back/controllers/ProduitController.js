const  { Produit,User} = require('../models/index'); 
const { Op } = require('sequelize')

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

    // getOneProduit(req, res){
    //     //const { id } = req.params;
    //     const { text } = req.query;
    //     Produit.findAll({where : { design :{ [Op.like]:"%"+text+"%"}}})
    //         .then(produit => {
    //             if(!produit){
    //                 return res.status(404).json({
    //                     status: '404',
    //                     data : 'produit n\' existe pas'
    //                 })
    //             }
    //             return res.status(200).json( produit);
    //         })
    //         .catch(err => { 
    //             return res.status(400).json({
    //                 status : "400",
    //                 data: err.message
    //             })
    //         })    
    // },

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