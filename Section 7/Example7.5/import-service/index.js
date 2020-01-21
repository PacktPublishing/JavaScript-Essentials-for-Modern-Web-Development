const express = require("express");
const PORT = process.env.PORT;

const ImportController = require("./controllers/import-controller");

if (!PORT) {
    console.error("Invalid Port");
    process.exit(1);
}

const app = express();
app.use("import", ImportController);

app.listen(PORT, () => {
    console.log(`Importer Service listening on port ${PORT}`);
});