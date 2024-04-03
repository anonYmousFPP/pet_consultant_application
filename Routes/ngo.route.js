const Ngo = require('../schema/ngo.schema');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const data = await Ngo.find();
        res.status(202).send(data);
    }
    catch(err){
        res.status(500).send('Internal Server Error');
    }
})



router.post('/', async(req, res) => {
    try{
        const data = req.body;
        for(let i=0; i<data.length; i++){
            const newData = await Ngo(data[i]).save();
            console.log('My Data is ', newData);
        }
        res.status(200).send('Data Saved Successfully');
    }
    catch(err){
        console.log("Error is ", err);
        res.status(500).send('Internal Server Error');
    }
})

router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const data = req.body;
        const response = await Ngo.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        })

        if(!response){
            res.status(404).send('Invalid ID')
        }

        res.status(202).send('Data Saved Successfully');
    }
    catch(err){
        console.log('Error is ', err);
        res.status(404).send(err);
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const data = req.params.id;
        const response = await Ngo.findByIdAndDelete(data);

        if(!response){
            res.status(404).send('Invalid ID')
        }

        res.status(202).send('Data Saved Successfully');
    }
    catch(err){
        console.log('Error is ', err);
        res.status(404).send(err);
    }
})

module.exports = router;