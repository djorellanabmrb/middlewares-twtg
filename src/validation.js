const { validationResult } = require('express-validator');

class ValidationMiddleware{
    constructor(){

    }

    async checkValidations(req, res, next){
        try {
            let errors = validationResult(req);
            
            if (!errors.isEmpty()){
                errors = errors.array();
                errors = errors.map((error)=>{
                    let details = error.split(":");
                    details = details[1];
                    details = details.trim();
                    return req.polyglot.t(`validations.${details}`);
                });
                return res.status(422).send({ message: errors });  
            }    
            next();
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = ValidationMiddleware;