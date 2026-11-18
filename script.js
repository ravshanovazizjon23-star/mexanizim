
let odamlar = JSON.parse(localStorage.getItem("odamlar")) || [];

let form = document.getElementById("myForm");
let royhat = document.getElementById("royhat");

function chiqar() {
    royhat.innerHTML = "";

    odamlar.forEach((odam, index) => {
        let tr = document.createElement("tr");

        [index + 1, odam.ism, odam.familiya, odam.yosh, odam.shahar].forEach(matn => {
            let td = document.createElement("td");
            td.textContent = matn;
            tr.appendChild(td);
        });

        royhat.appendChild(tr);
    });
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let odam = {
        ism: document.getElementById("ism").value,
        familiya: document.getElementById("familiya").value,
        yosh: document.getElementById("yosh").value,
        shahar: document.getElementById("shahar").value
    };

    odamlar.push(odam);

    localStorage.setItem("odamlar", JSON.stringify(odamlar));

    chiqar();
    form.reset();
});

chiqar();
