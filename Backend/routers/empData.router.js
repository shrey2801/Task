const express = require('express');
const {httpGetAllData , httpGetDataByID , httpAddNewEmp,httpDeleteData,httpUpdateData} = require('../routers/empData.controller');

const {addNewDataValid,updateDataValid,validates,idValidation} = require('./validation');

const datarouter = express.Router();

datarouter.get('/',httpGetAllData);
datarouter.get('/:id',idValidation(),validates,httpGetDataByID);
datarouter.post('/',httpAddNewEmp,validates,addNewDataValid());
datarouter.delete('/:id',idValidation(),validates,httpDeleteData);
datarouter.patch('/:id',idValidation(),updateDataValid(),validates,httpUpdateData);

module.exports = datarouter;