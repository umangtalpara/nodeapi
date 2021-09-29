const express = require('express');
const MensRanking = require("../models/mens")
const router = new express.Router();

//create record
router.post("/mens", async(req,res) =>{
    try{
    const addMensRanking = new MensRanking(req.body);
    const insertMensRanking = await addMensRanking.save()
    res.status(201).send(insertMensRanking);
    }
    catch(e){ 
        res.status(400).send(e);
    }
});

//read data of men
router.get("/mens" , async(req,res) =>{
    try{
        const mensRankingData = await MensRanking.find();
        res.status(201).send(mensRankingData) ; 
    }
    catch(e){
        res.status(400).send(e);
    }
})

//read data of one men
router.get("/mens/:id" , async(req,res) =>{ 
    try{
        const _id = req.params.id;
        const menRankingData = await MensRanking.findById(_id);
        res.status(201).send(menRankingData) ; 
    }
    catch(e){
        res.status(400).send(e);
    }
})

//update mens 
router.patch("/mens/:id" , async(req,res) =>{ 
    try{
        const _id = req.params.id;
        const updateMensRanking = await MensRanking.findByIdAndUpdate(_id , req.body,{
            new:true
        });
        res.status(201).send(updateMensRanking) ; 
    }
    catch(e){
        res.status(400).send(e);
    }
})

//delete by id
router.delete("/mens/:id" , async(req,res) =>{ 
    try{
        const deleteMen = await MensRanking.findByIdAndDelete( req.params.id);
        res.status(201).send("deleted successfully") ; 
    }
    catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;