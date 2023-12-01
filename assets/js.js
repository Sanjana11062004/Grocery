document.write("hii");
let p= fetch('country.json')
p.then((value1)=>{
    console.log(value1);
    console.log(value1.status)
    console.log(value1.ok)
    return value1.json();
})
.then((value2)=>{
    console.log(value2);
    value2.forEach(elemet => {
        const vari=  `<li>${elemet.country_id}</li>`;
        document.querySelector("ul").insertAdjacentHTML("beforeend",vari);
    });
})
.catch(error => console.log(error));