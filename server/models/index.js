const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

var dbModel = null;

class Models {

    constructor() {
    }
    getDB() {
        if (dbModel) {
            return db;
        } else {
            this.db = {};
            this.connect(this.config())
            dbModel = this.db;
            return dbModel;
        }
    }


    config() {
        return {
            database: {
                host: process.env.host.toString(),
                database_url: process.env.dbUrl,
                username: process.env.user,
                password: process.env.password,
                dialect: process.env.dialect,
                db: process.env.database,
                logger: true,
                logQueryParameters: true,
                logging: (...msg) => console.log(msg)
            }
        }
    }

    connect(config) {
        let sequelize;

        if (config.database.database_url) {
            sequelize = new Sequelize(config.database.database_url, {
                logging: (...msg) => console.log(msg), // Displays all log function call parameters
              });
        } else {
            sequelize = new Sequelize(config.database.db, config.database.username, config.database.password, {
                host: config.database.host,
                dialect: config.database.dialect,
                logging: function (err) {
                    if (config.database.logger) {
                        console.log(err);
                    }
                },
                logQueryParameters: true,
                operatorsAliases: 0,
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000,
                },
                dialectOptions: {
                    multipleStatements: true
                  }
            });
        }

        fs.readdirSync(__dirname)
            .filter(file =>
                (file.indexOf('.') !== 0) &&
                (file !== basename) &&
                (file.slice(-3) === '.js'))
            .forEach((file) => {
                if (file != 'index.js') {
                    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
                    if (typeof (model) == "object") {
                        Object.keys(model).forEach((mod) => {
                            this.db[mod] = model[mod];
                        });
                    }
                    else
                        this.db[model.name] = model;
                }
            });

        Object.keys(this.db).forEach((modelName) => {
            if (this.db[modelName].associate) {
                this.db[modelName].associate(this.db);
            }
        });

        this.db.sequelize = sequelize;
        this.db.Sequelize = Sequelize;
   
        // this.db.users = require("./Users.js")(sequelize, Sequelize);
        this.db.sequelize.sync().then(() => {
            logger.info("Drop and re-sync db.");

        }).catch(err => {
            console.log(err)
            logger.error(err);
        });
    }


};

module.exports = new Models().getDB();