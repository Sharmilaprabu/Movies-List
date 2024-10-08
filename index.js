const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express()

app.use(express.json());


app.listen(3000, () => {
    console.log('server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated")
});

app.get('/api/products', async(req, res) =>{

    try {
        res.status(200) = await Product.find({});

    } catch (error) {
        res.status(500).json({message: error.message});
    }

});
app.post('/api/products', async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }catch(error) {
        res.status(500).json({message: error.message});

    }
});


mongoose.connect("mongodb+srv://sharmilaprabu05:qI2LIKmL13VOPrFc@backenddb.e9qye.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() =>{
console.log('Connected to database!');
})
.catch(() => {
    console.log("connection failed");
});