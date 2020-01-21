module.exports = {
    apps: [
        {
            name: "import-service",
            script: "./import-service/index.js",
            watch: true,
            exec_mode: "cluster",
            instances: "1",
            env: {
                NODE_ENV: "development",
                PORT: 5001
            }
        },
        {
            name: "auth-service",
            script: "./auth-service/index.js",
            watch: true,
            exec_mode: "cluster",
            instances: "1",
            env: {
                NODE_ENV: "development",
                AUTH_SECRET: "ASFAS9D8FYAFGASLID",
                PORT: 5002,
                MONGO_HOST: "localhost",
                MONGO_PORT: 27017,
                MONGO_USERNAME: "root",
                MONGO_PASSWORD: "123456789",
                MONGO_DATABASE: ""
            }
        },
        {
            name: "main-gateway",
            script: "./main-gateway/server.js",
            watch: false,
            env: {
                
            }
        }
    ]
}