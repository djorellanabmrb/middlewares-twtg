class JwtMiddleware{
    constructor(){
    }
    isAuthorized(secret){
        return async function (req, res, next){
            try {
                const authorization = req.headers.authorization || '';
                const token = authorization.replace('Bearer ', '');
                req.tokenJwt = await jwt.verify(token, secret);
                next();
            } catch (error) {
                return res.status(401).json({message: 'unauthorized'});
            }   
        }
    }
}

module.exports = JwtMiddleware;