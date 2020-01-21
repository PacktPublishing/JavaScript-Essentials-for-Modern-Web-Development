function wait(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, amount);
    });
}

var heartbeatEnabled = false;

process.on("message", () => heartbeatEnabled = true);

(async() => {
    for(let i = 0; i < 10; i++) {
        await wait(1000);
        if (heartbeatEnabled) {
            process.send(`Heartbeat ${i + 1}`);
        }
    }
    process.exit(0);
})();