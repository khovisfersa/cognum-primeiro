const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.listen(3000);

app.get('/hello', (req,res, next)=> {
    res.status(200).send({"message":"Hello Cognum!"});
})