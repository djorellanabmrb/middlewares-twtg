class HealthcheckMiddleware{
    constructor(){
    }
    apiName(name) {
        this.apiName = name;
    }
    async getStatus(req, res){
        try {
            return res.status(200).json({
                name: this.apiName,
                uptime: process.uptime()
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = HealthcheckMiddleware;