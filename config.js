// Configuration file for optional environment variables

var env = process.env;

var config;

if( env.NODE_ENV === "production" ) {
    config = {
        port: 3000
    };
}
else { // development or test
    config = {
        port: env.PORT;
    };
}

module.exports = config;
