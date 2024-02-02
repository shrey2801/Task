const { default: mongoose } = require('mongoose');
const empDataes = require('./empData.mongo');

const data = new Map();

// let oldID = 100;

const empData = {
    id : 100,
    firstName:'shrey',
    lastName:'Patel',
    email:'sp@gmail.com',
    date: new Date('April 19,2022'),
};

saveData(empData);

// data.set(userData.id,userData);

// Get data of all user
async function getAllData(){
    return await empDataes.find({},{'__v':0});
   // return Array.from(data.values());
}

async function saveData (empData){
    await empDataes.insertMany(empData)
}

// To get data from id
function getDataByID(id){
    const getId = empDataes.find({
        _id: new Object(id)
    },{'__v':0});
    return getId;
}

async function getLatestID(){
    const latestID = await empDataes
        .findOne()
        .sort('-id');
    return latestID.id
}

// To add new user
async function addNewEmp(empData){
    return await saveData(empData)
} 


async function idCheck(id){
    return mongoose.isValidObjectId(id) && await empDataes.findById(id)
}
// TO delete id
async function deleteData(dataId){
    const dataID = await empDataes.deleteOne({
        _id:dataId
    });
    return dataID
}



async function updateData(updateId,updatebody){
   const update = await userDataes.updateOne({_id : updateId},{
       firstName:updatebody.firstName,
       lastName:updatebody.lastName,
       email:updatebody.email,
       date:updatebody.date
   })
  // console.log(update);
   return update
    

}

module.exports = {
    getAllData,
    getDataByID,
    addNewEmp,
    idCheck,
    deleteData,
    updateData
};