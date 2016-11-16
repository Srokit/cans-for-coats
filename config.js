// Configuration file for optional environment variables

var env = process.env;

var config;

if( env.NODE_ENV === "production" ) {
    config = {
        port: env.PORT
    };
}
else { // development or test
    config = {
        port: 3000
    };
}

module.exports = config;
