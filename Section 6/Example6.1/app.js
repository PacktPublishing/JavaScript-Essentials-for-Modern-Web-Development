const {exec} = require("child_process");

console.log("Spawning worker...");

exec("node ./worker.js", (err) => {
    console.log("Worker finished");
});