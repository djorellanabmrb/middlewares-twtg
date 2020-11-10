module.exports = {
    FileMiddleware:require("./file.middleware"),
    HealthcheckMiddleware: require("./healthcheck"),
    InternationalizationMiddleware: require("./internationalization"),
    JwtMiddleware: require("./jwt"),
    ValidationMiddleware: require("./validation"),
    ErrorMiddleware: require("./error")
}