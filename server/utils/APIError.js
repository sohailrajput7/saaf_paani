class APIError extends Error{
    constructor(statusCode,message){
        super();
        
        this.message = message;
        this.statusCode = statusCode || 500
    }
}

module.exports = APIError