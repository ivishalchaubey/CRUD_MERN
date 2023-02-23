import express from "express";
import config from "./database/db.js";
import Route from "./routes/route.js";
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json());
app.use('/',Route)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({extended:true}))

config();

app.listen(PORT,()=>{
    console.log(`Server Running On http://localhost:${PORT}`);
})