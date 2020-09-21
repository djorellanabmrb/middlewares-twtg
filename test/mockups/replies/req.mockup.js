class ReqMockup {
    constructor(){}
    headers(headers){
        this.headers = headers;
        return this;
    }
    header(key){
        return this.headers[key];
    }
}

module.exports = ReqMockup;