import express from 'express';
import { getData,addData,editData,deleteData,viewData } from '../controller/controller.js';
const Route = express.Router()


Route.get('/',getData);

Route.post('/add',addData);

Route.get('/view/:_id',viewData)

Route.put('/edit/:_id',editData);

Route.delete('/delete/:_id',deleteData);

export default Route;