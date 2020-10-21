const Polyglot = require('node-polyglot');
const {LanguageEnum} = require("./enums");

class InternationalizationMiddleware{
    constructor(){
    }
    attachI18(Internationalization){
        return function (req, res, next){
            let acceptLanguage = req.header('Accept-Language');
            try {
                LanguageEnum.isValidEnum(acceptLanguage);
            } catch (error) {
                acceptLanguage = "es";
                res.set("Accept-Language", "es");
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
}

module.exports = InternationalizationMiddleware;
