class ErrorMiddleware{
    constructor(){

    }

    async checkErrors(err, req, res, next){
        if(err.code != 500)
        {
            let message = req.polyglot.t(`errors.${error.msg}`)
            return res.status(err.code).send({ message });
        }else{
            return res.status(500).send("It is a new error on the system"); 
        }
    }
}

module.exports = ErrorMiddleware;