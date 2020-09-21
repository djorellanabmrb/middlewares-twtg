const Polyglot = require('node-polyglot');
const {LanguageEnum} = require("./enums");
const Internationalization = require("./internationalization")

class InternationalizationMiddleware{
    constructor(){
    }
    async attachI18(req, res, next){
        const acceptLanguage = req.header('Accept-Language');
        try {
            LanguageEnum.isValidEnum(acceptLanguage);
        } catch (error) {
            return res.status(406)
            .json({message: 'You must add the header, Accept-Language, with the values of "es" or "en".'});
        }
        req.polyglot = new Polyglot();
        if(acceptLanguage === LanguageEnum.EN){
            req.polyglot.extend(Internationalization.en);
        } else {
            req.polyglot.extend(Internationalization.es);
        }
        next();
    }
}

module.exports = InternationalizationMiddleware;
