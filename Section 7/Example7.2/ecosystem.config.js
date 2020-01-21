module.exports = {
    apps: [
        {
            name: "import-service",
            script: "./import-service/index.js",
            watch: true,
            exec_mode: "cluster",
            instances: "max",
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
                PORT: 5002
            }
        }
    ]
}