class FileMiddleware{
    constructor(){
    }
    apiName(name) {
        this.apiName = name;
    }
    async removeFile(req, res){
        try {
            fs.unlinkSync(req.file.path);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = FileMiddleware;