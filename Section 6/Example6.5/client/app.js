const worker = new Worker("./worker.js");
console.log(worker);
worker.onmessage = msg => {
    console.log("countries fetched: ", msg);
    let countries = msg.data;
    let list = document.createElement("list");
    countries.forEach(country => {
        let li = document.createElement("li");
        li.textContent = `${country.name} - ${country.region}`;
        list.append(li);
    });
    document.getElementsByTagName("body")[0].append(list);
};