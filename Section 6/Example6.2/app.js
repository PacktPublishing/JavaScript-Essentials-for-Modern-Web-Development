const {exec} = require("child_process");

console.log("Spawning worker...");

exec("node ./worker.js", (err, stdout, stderr) => {
    console.log("Worker finished");
    console.log("WORKER OUTPUT:", stdout);
    console.log("WORKER ERRORS:", stderr);
});