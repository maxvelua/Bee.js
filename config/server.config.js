module.exports = {
    jwt: {
        secret: "vova",
        options: {
            expiresIn: "7d"
        }
    },
    db: {
        database: "tejvjvqj",
        username: "tejvjvqj",
        password: "pM8UT8dbgNC2kkPGSxbFbQdrGAZQq3dW",
        host: "horton.elephantsql.com",
        port: "5432",
        dialect: "postgres",
        dialectOptions: {
            timeout: 2000
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        benchmark: true,
        define: {
            underscored: true,
            timestamps: false,
            freezeTableName: true
        }
    }
};
