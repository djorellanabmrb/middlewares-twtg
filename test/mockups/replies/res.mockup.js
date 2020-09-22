class ResMockup {
    constructor(){
        this.headers = [];
    }
    status(status){
        this.status = status;
        return this;
    }
    json(json){
        this.json = json;
        return this;
    }
    set(key, value){
        this.headers[key] = value;
        return this;
    }
}

module.exports = ResMockup;