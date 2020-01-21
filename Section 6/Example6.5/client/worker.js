(async() => {
    const countriesUrl = "https://restcountries.eu/rest/v2/all";

    function fetchCountries() {
        return fetch(countriesUrl).then(response => response.json());
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

    let countries = await fetchCountries();
    countries = excludeUnwantedFields(countries);
    postMessage(countries);
})();