module.exports = {
    jwt: {
        secret: "vova",
        options: {
            expiresIn: "7d"
        }
    },
    db: {
        database: "bee",
        username: "root",
        host: "localhost",
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
