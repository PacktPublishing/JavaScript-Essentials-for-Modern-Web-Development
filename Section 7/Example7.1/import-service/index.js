const express = require("express");
const PORT = process.env.PORT;

if (!PORT) {
    console.error("Invalid Port");
    process.exit(1);
}

const app = express();

app.listen(PORT, () => {
    console.log(`Importer Service listening on port ${PORT}`);
});