const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.listen(3333);

app.get('/', (req,res, next)=> {
    res.status(200).send("Me mama")
})