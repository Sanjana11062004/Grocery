console.log("hiii");
let p = fetch('country.json');
p.then((value1) => {
    console.log(value1);
    console.log(value1.status);
    console.log(value1.ok);
    return value1.json();
})
.then((value2) => {
    console.log(value2);
    value2.forEach(element => {
        if (element.country_id === "US" || element.country_id === "INDIA" || element.country_id === "EUROPE") {
            const vari = `<li>${element.country_id}</li>`;
            document.querySelector("ul").insertAdjacentHTML("beforeend", vari);
        }
    });
})
.catch(error => console.log(error));