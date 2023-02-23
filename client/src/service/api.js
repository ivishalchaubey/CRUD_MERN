import axios from 'axios';

const URL="http://localhost:5000";

export const allUser = async()=>{
    try {
        return await axios.get(URL)
    } catch (error) {
        console.log('error while API Calling');
    }
}

export const addUser = async(data)=>{
    try {
        return await axios.post(`${URL}/add`,data);
        console.log("Successfully Added..");
    } catch (error) {
        console.log("Error while adding user");
    }
}

export const deleteUser = async(id)=>{
    try {
        return await axios.delete(`${URL}/delete/${id}`)
    } catch (error) {
        console.log("Error While Delete Data..");
    }
}

export const viewOneData = async(id)=>{
    try {
        return await axios.get(`${URL}/view/${id}`)
    } catch (error) {
        console.log("Error While View One");
    }
}

export const editOneData = async(data,id)=>{
    try {
        return await axios.put(`${URL}/edit/${id}`,data)
    } catch (error) {
        console.log('Error While Updating..');
    }
}