// Configuration file for optional environment variables

var env = process.env;

var config;

if( env.NODE_ENV === "production" ) {
    config = {
        port: env.PORT,
        jwtSec: env.JWT_SEC,
        dbUrl: env.MONGODB_URI
    };
}
else { // development or test
    config = {
        port: 3000,
        jwtSec: "superSecret",
        adminEmail: "email@example.com",
        adminPass: "adminPass",
        dbUrl: "mongodb://localhost/cfc"
    };
}

module.exports = config;
