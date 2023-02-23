import UserModel from "../model/model.js"

// GET Data 
export const getData = async(req,res)=>{
    try {
        let data = await UserModel.find({});
        res.status(201).json(data)
    } catch (error) {
        res.status(404).json({msg:error.message});
    }
    
    // res.send(data)
}

// View Single Data 
export const viewData = async(req,res)=>{
    try {
        let data = await UserModel.findById(req.params)
        res.send(data)
    } catch (error) {
        console.log("While Calling View One");
    }
}

// POST Data
export const addData = async(req,res)=>{
    let data = new UserModel(req.body);
    try {
        let result = await data.save()
        res.send(result)
        console.log("Data added Successfully..");
    } catch (error) {
        console.log("Error While Adding Data ..",error);
    }
}

// PUT Data
export const editData = async(req,res)=>{
    let data = await UserModel.updateOne(
        req.params,
        {
            $set:(req.body)
        }
    )
    try {
        res.send(data)
    } catch (error) {
        console.log("Error While Edit..");
    }
    
}


// DELETE Data
export const deleteData = async(req,res)=>{
    let data = await UserModel.deleteOne(req.params)
    try {
        res.send(data)
    } catch (error) {
        console.log("Can't be delete Item");
    }
    
}