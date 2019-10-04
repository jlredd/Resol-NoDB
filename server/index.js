require("dotenv").config({ path: __dirname + "./../.env" });

const express = require('express');
const cors = require('cors')

const app = express();

const { SERVER_PORT } = process.env;

app.use(cors());
app.use(express.json());

const wc = require('./WomenController');

//Get
app.get("/api/women", wc.read);

//Put
app.put('/api/women/:id', wc.update);

//Post
app.post('/api/women', wc.create);

//Delete
app.delete('/api/women/:id', wc.delete);

app.listen(SERVER_PORT, () => {console.log(`Old Gregg wants to play love games on port ${SERVER_PORT}`)});