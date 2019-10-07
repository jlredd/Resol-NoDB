require("dotenv").config({ path: __dirname + "./../.env" });

const express = require('express');
const cors = require('cors')

const app = express();

const { SERVER_PORT } = process.env;

app.use(cors());
app.use(express.json());

const wc = require('./WomenController');
const tc = require('./OurTeamController')
const dr = require('./DonorController')

//Get
app.get("/api/women", wc.read);

//Put
app.put('/api/women/:id', wc.update);

//Post
app.post('/api/women', wc.create);

//Delete
app.delete('/api/women/:id', wc.delete);

//Get Our Team
app.get("/api/our-team", tc.read)

//Get Donors
app.get('/api/donors', dr.read)

app.listen(SERVER_PORT, () => {console.log(`Old Gregg wants to play love games on port ${SERVER_PORT}`)});