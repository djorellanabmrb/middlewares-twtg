class LanguageEnum {
    static EN = "en";
    static ES = "es";

    static isValidEnum(language){
        const languages = [this.EN, this.ES];
        if (!languages.includes(language))
            throw Error("this service does not support the language")
        return true;
    }
}

module.exports = LanguageEnum;