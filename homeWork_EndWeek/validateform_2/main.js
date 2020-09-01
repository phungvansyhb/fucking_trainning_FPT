//alert('hello')
let countries = document.getElementById("countries");
let positions = document.getElementById("positions");

//console.log(countries, positions);
let dataCountries = [
    "VietNam",
    "Singapore",
    "Malaysia",
    "Indonesia",
    "Phillippine",
    "Lao",
    "Cambodia",
];

let dataPositions = ["Oparator", "Manager", "Developer", "Designer", "Tester"];

window.addEventListener("load", () => {
    //fill conutry
    dataCountries.forEach((elm, ind) => {
        let option = document.createElement("option");
        option.innerHTML = `${elm}`;
        option.value = `${ind}`;
        countries.appendChild(option);
    });

    //fill postion
    dataPositions.forEach((elm, ind) => {
        let option = document.createElement("option");
        option.innerHTML = `${elm}`;
        option.value = `${ind}`;
        positions.appendChild(option);
    });
});

// validate form
let form = document.forms["form"];
let resetBtn = document.getElementById("reset");
let sendBtn = document.getElementById("send");
let listProperties = [
    "last-name",
    "first-name",
    "firs",
    "tel",
    "email",
    "city",
    "address",
    "countries",
    "positions",
    "information",
];
//console.log(form, resetBtn, sendBtn);

resetBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // listProperties.forEach((elm) => {
    //     form[elm].value = "";
    // });
    form["last-name"].value = "";
    form["first-name"].value = "";
    form["email"].value = "";
    form["tel"].value = "";
    form["city"].value = "";
    form["address"].value = "";
    form["countries"].value = "";
    form["positions"].value = "";
    form["information"].value = "";
});

sendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    //validate last-name
    if (form["last-name"].value == "") {
        document.getElementById("last-name-err").innerHTML =
            "The last name should not be blank";
    } else {
        document.getElementById("last-name-err").innerHTML = "";
    }

    // validate first-name
    if (form["first-name"].value == "") {
        document.getElementById("first-name-err").innerHTML =
            "The first name shoule not be blank";
    } else {
        document.getElementById("first-name-err").innerHTML = "";
    }

    //validate email

    if (form["email"].value == "") {
        document.getElementById("email-err").innerHTML =
            "The email should not be blank";
    } else if (!form["email"].value.includes("@")) {
        document.getElementById("email-err").innerHTML =
            "Please input the correct email address";
    } else {
        document.getElementById("email-err").innerHTML = "";
    }

    // validate tel
    //let regex = /[0-9]{3}-[0-9]{3}-[0-9]{7}}/;
    if (!form["tel"].value.match(/\d{3}-\d{3}-\d{7}$/)) {
        document.getElementById("tel-err").innerHTML =
            "Please input your correct phone number";
    } else {
        document.getElementById("tel-err").innerHTML = "";
    }

    //validate select countey
    if (form["countries"].value == "") {
        document.getElementById("countries").nextElementSibling.innerHTML =
            "Please select your contry";
    } else {
        document.getElementById("countries").nextElementSibling.innerHTML = "";
    }

    //validate seclt position
    if (form["positions"].value == "") {
        document.getElementById("positions").nextElementSibling.innerHTML =
            "Please select the position";
    } else {
        document.getElementById("positions").nextElementSibling.innerHTML = "";
    }
});
