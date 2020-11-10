class ErrorMiddleware{
    constructor(){

    }

    async checkErrors(err, req, res, next){
        if(err.code != undefined)
        {
            if(err.field == "file"){
                return res.status(409).send({ message:err.code });
            }else{
                let message = req.polyglot.t(err.message);
                return res.status(err.code).send({ message });
            }
        }
        else{
            console.log(err);
            return res.status(500).send({err}); 
        }
    }
}

module.exports = ErrorMiddleware;