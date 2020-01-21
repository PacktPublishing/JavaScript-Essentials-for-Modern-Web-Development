const {exec} = require("child_process");

console.log("Spawning worker...");

exec("node ./worker.js", (err, stdout, stderr) => {
    if (err) {
        console.error("Oops! Something went wrong");
    }
    else {
        console.log("WORKER OUTPUT: ", stdout);
        exec("wc -l countries.csv", (err, stdout) => {
            let lines = stdout.split(" ")[0];
            console.log(`${lines} countries found`);
        });
    }
});