const {check ,body, validationResult} = require('express-validator');
const { idCheck } = require('../model/empData.model');

const addNewDataValid = () => {
    return[

        body('firstName').notEmpty().withMessage("Invalid First Name").isAlpha(),
        body('lastName').notEmpty().withMessage("Invalid Last Name").isAlpha(),
        body('email').isEmail().withMessage("message:'Invalid Email"),
        body('date').isDate().withMessage("Invalid Date").custom(datevalid)
    ]
}

const updateDataValid = () => {
    return[
        body('firstName').optional().notEmpty().withMessage("Invalid First Name").isAlpha(),
        body('lastName').optional().notEmpty().withMessage("Invalid Last Name").isAlpha(),
        body('email').optional().isEmail().withMessage("Invalid Email"),
        body('date').optional().isDate().withMessage("Invalid Date").custom(datevalid)
    ]
}
async function existEmp(value){
    if(await idCheck(value)){
        return true
    }
    throw new Error("User not Found")
}

 function idValidation(){
     const Emps = [
         check('id',"User not Availabe").isMongoId().custom(existEmp)
     ]
     return Emps;
 }


const datevalid = (dt) => {
    let current = new Date();
    let getDateByEmp = new Date(dt);
    let d = 24 * 60 * 60 *1000 // hour * min * sec * mili

    let diffrent = (current - getDateByEmp);
    //console.log(diffrent);
    diffrent = Math.ceil(diffrent / d);
    //console.log(diffrent);
    diffrent = Math.abs(Math.round(diffrent/365));
    //console.log(diffrent);
    if (diffrent >= 15 && diffrent <= 100) 
    {
        return true;
    }
    else
    {
        throw new Error('Age not valid');
    }
}

const validates = (req,res,next) => {
    const errors = validationResult(req)

    if(errors.isEmpty()){
        return next()
    }

    return res.status(422).json({
        errors:errors.array(),
    })
}

module.exports = {
    addNewDataValid,
    updateDataValid,
    validates,
    idValidation
}