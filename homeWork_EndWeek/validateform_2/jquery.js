//alert('hello')
let countries = $("#countries");
let positions = $("#positions");

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
        // let option = document.createElement("option");
        // option.innerHTML = `${elm}`;
        // option.value = `${ind}`;
        countries.append(`<option value='${ind}'>${elm}</option>`);
    });

    //fill postion
    dataPositions.forEach((elm, ind) => {
        // let option = document.createElement("option");
        // option.innerHTML = `${elm}`;
        // option.value = `${ind}`;
        // positions.appendChild(option);
        positions.append(`<option value='${ind}'>${elm}</option>`);
    });
});

// validate form
let form = document.forms["form"];
let resetBtn = $("#reset");
let sendBtn = $("#send");

console.log(form, resetBtn, sendBtn);

resetBtn.click((event) => {
    event.preventDefault();
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

sendBtn.click((event) => {
    event.preventDefault();
    //validate last-name
    if (form["last-name"].value == "") {
        $("#last-name-err").html("The last name should not be blank");
    } else {
        $("#last-name-err").html("");
    }

    // validate first-name
    if (form["first-name"].value == "") {
        $("#first-name-err").html("The first name shoule not be blank");
    } else {
        $("#first-name-err").html(" ");
    }

    //validate email

    if (form["email"].value == "") {
        $("#email-err").html("The email should not be blank");
    } else if (!form["email"].value.includes("@")) {
        $("#email-err").html("Please input the correct email address");
    } else {
        $("#email-err").html(" ");
    }

    // validate tel
    //let regex = /[0-9]{3}-[0-9]{3}-[0-9]{7}}/;
    if (!form["tel"].value.match(/\d{3}-\d{3}-\d{7}$/)) {
        $("#tel-err").html("Please input your correct phone number");
    } else {
        $("#tel-err").html(" ");
    }

    //validate select countey
    if (form["countries"].value == "") {
        $(".countries-err").html("Please select your contry");
    } else {
        $(".countries-err").html(" ");
    }

    //validate seclt position
    if (form["positions"].value == "") {
        $(".positions-err").html("Please select the position");
    } else {
        $(".positions-err").html(" ");
    }
});
