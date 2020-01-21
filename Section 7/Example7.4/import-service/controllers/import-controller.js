const router = require("express").Router();
const ImportService = require("../services/importer");

const importService = new ImportService();

router.post("/", async(req, res) => {
    await importService.import(req.body);
    res.sendStatus(200);
});

module.exports = router;