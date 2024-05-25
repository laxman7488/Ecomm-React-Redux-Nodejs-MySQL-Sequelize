const express = require("express");
const env = require("dotenv");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

var corsOptions = {
    origin: "http://localhost:3000"
};

global.basename = path.resolve(__dirname);

class App {

    constructor() {
        this.app = express();
        this.envSetup();
        this.config();
    }

    envSetup() {

        // Set Process
        let envFilePath = path.join(basename, './config/dev.env');

        //Set logger
        var log4js = require('log4js');
        log4js.configure(path.join(basename, './config/log4js.json'));
        global.logger = log4js.getLogger("app");
        logger.level = ("DEBUG");
        if (fs.existsSync(envFilePath)) {
            env.config({ path: envFilePath });
        } else {
            logger.error('Killing Process as Env files are missing:', envFilePath);
            console.error('Killing Process as Env files are missing:', envFilePath);
            process.exit(1);
        }
    }

    config() {
        this.app.set('trust proxy', 1);
        this.app.disable('x-powered-by')
        this.app.use(express.json({limit: '5mb'}));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors(corsOptions));
        this.app.use('/api', require('./router'));
        this.app.use('/*', express.static(__dirname + '/public'));
    }

    shutdown() {
        logger.info('Application is shutsdown');
    }
}

const application = new App();

let PORT = process.env.PORT || 8080;
application.connect = application.app.listen(PORT, () => {
    console.log('Application is up and running on :' + PORT);
    logger.info('Application is up and running on :' + PORT);
});



process.once('SIGTERM', () => {
    logger.info('Received SIGTERM');
    application.shutdown();
});

process.once('SIGINT', () => {
    logger.info('Received SIGINT');
    application.shutdown();
});

process.once('uncaughtException', err => {
    logger.info('Uncaught exception');
    console.error(err);
    application.shutdown(err);
});
