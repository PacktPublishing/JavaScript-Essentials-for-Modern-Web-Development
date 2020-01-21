const axios = require("axios");
const OS = require("os");
const promisify = require("util").promisify;
const fs = require("fs");

const countriesUrl = "https://restcountries.eu/rest/v2/all";

function fetchCountries() {
    return axios.default.get(countriesUrl).then(res => res.data);
}

function excludeUnwantedFields(countries) {
    return countries.map(c => {
        return {
            name: c.name,
            region: c.region,
            subregion: c.subregion
        }
    });
}

function generateCsv(countries) {
    if (!countries || countries.length == 0) {
        return "";
    }
    return Object.keys(countries[0]).join(",") + OS.EOL + countries.map(c => { 
        return Object.values(c).join(",");
    }).join(OS.EOL);
}

(async() => {
    let countries = await fetchCountries();
    countries = excludeUnwantedFields(countries);
    let csv = generateCsv(countries);
    await promisify(fs.writeFile)("countries.csv", csv, "utf8");
})();