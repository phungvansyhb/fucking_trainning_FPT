import {data} from "./data.js";
let question = document.getElementById("question");
let ListOpption = document.querySelectorAll(".option");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let leftbtn = document.getElementById("left-btn");
let rightbtn = document.getElementById("right-btn");
let submitbtn = document.getElementById("submit-btn");
let resultMsg = document.getElementById("result");
let errorMsg = document.getElementById("msg");
let returnbtn = document.getElementById("return");
let checkbtn = document.getElementById("check");
let msgcheck = document.getElementById("msgcheck");
// let submit = document.querySelector(".submit");
let cout = data.length;
let currentQS = parseInt(window.location.search.replace("?q=", " "));
if (!currentQS) currentQS = 1;

// save data when reload
let listAns = localStorage.getItem("ansArr") || "{}";
listAns = JSON.parse(listAns);
let err = false;
for (const key in listAns) {
    if (listAns[key].length == 0) err = true;
}
// check for render button
if (currentQS === 1) {
    leftbtn.classList.add("hide");
}
if (Object.keys(listAns).length === data.length && !err) {
    submitbtn.classList.add("show");
}
if (currentQS === data.length) {
    rightbtn.classList.add("hide");
    submitbtn.classList.add("show");
}

// fill data
let ansArr = JSON.parse(localStorage.getItem("ansArr"));
let ansForQS = [];
for (const key in ansArr) {
    if (key == currentQS) {
        ansForQS = ansArr[key];
    }
}
for (const option of ListOpption) {
    for (const ans of ansForQS) {
        if (option.attributes.value.nodeValue == ans) {
            option.checked = true;
        }
    }
}
question.innerHTML = data[currentQS - 1].question;
option1.firstElementChild.innerHTML = data[currentQS - 1].option1;
option2.firstElementChild.innerHTML = data[currentQS - 1].option2;
option3.firstElementChild.innerHTML = data[currentQS - 1].option3;
option4.firstElementChild.innerHTML = data[currentQS - 1].option4;
msgcheck.innerText = `Correct : ${data[currentQS - 1].answer.join(" ")}`;
// save data to localStorage
function save() {
    let AnsElm = document.querySelectorAll(".option:checked");
    let ans = [];
    AnsElm.forEach((elm) => {
        ans.push(elm.value);
    });
    listAns[`${currentQS}`] = ans;
    //if (AnsElm.length !== 0)
    localStorage.setItem("ansArr", JSON.stringify(listAns));
}

// hande next
document.getElementById("right-btn").addEventListener("click", (event) => {
    save();
    if (currentQS < data.length && currentQS > 0) {
        window.location.search = `?q=${currentQS + 1}`;
    }
});
// hande previous
document.getElementById("left-btn").addEventListener("click", () => {
    save();
    if (currentQS <= data.length && currentQS > 1) {
        window.location.search = `?q=${currentQS - 1}`;
    }
});

// handle submit
submitbtn.addEventListener("click", () => {
    save();
    let ans = JSON.parse(localStorage.getItem("ansArr")) || {};
    if (Object.keys(ans).length !== data.length) {
        errorMsg.innerText = "Please complete all question before submit";
    } else {
        let err = false;
        for (const key in ans) {
            if (ans[key].length == 0) err = true;
        }
        if (err) {
            errorMsg.innerText = "Please complete all question before submit";
        } else {
            let trueAns = 0;
            for (const key in ans) {
                if (
                    JSON.stringify(ans[key]) ==
                    JSON.stringify(data[parseInt(key) - 1].answer)
                )
                    trueAns += 1;
            }
            errorMsg.innerText = "";
            resultMsg.innerText = `Your result is : ${trueAns}/${data.length}.`;
            document.getElementById("wrap").classList.add("endbackGround");
            document.getElementById("form").classList.add("hide");
            checkbtn.classList.add("show");
            returnbtn.classList.add("show");
        }
    }
});

// handle Action return
returnbtn.addEventListener("click", () => {
    document.getElementById("wrap").classList.remove("endbackGround");
    document.getElementById("form").classList.remove("hide");
    checkbtn.classList.remove("show");
    returnbtn.classList.remove("show");
    msgcheck.classList.add("hide");
    localStorage.removeItem("ansArr");
    window.location.search = "?q=1";
});

// //hande Action check
// checkbtn.addEventListener("click", () => {
//     document.getElementById("wrap").classList.remove("endbackGround");
//     document.getElementById("form").classList.remove("hide");
//     checkbtn.classList.remove("show");
//     returnbtn.classList.remove("show");
//     msgcheck.classList.add("show");
//     resultMsg.innerText = ``;
//     window.location.search = "?check";
// });
