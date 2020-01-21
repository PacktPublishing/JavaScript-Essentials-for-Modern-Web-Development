const { fork } = require("child_process");

const child = fork("./worker.js", [], {
    stdio: ["pipe", "pipe", "pipe", "ipc"]
});

child.on("message", msg => {
    console.log("Message from child: ", msg);
});

setTimeout(() => {
    child.send("heartbeat");
}, 4000);
