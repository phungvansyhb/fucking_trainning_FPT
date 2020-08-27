function increase(event) {
    let oldquantity = event.previousElementSibling.textContent;
    let decreaseBtn = event.previousElementSibling.previousElementSibling;
    event.previousElementSibling.textContent = parseInt(oldquantity) + 1;
    decreaseBtn.classList.remove("opacity");
    decreaseBtn.setAttribute("onclick", "decrease(this)");
    update();
}
function decrease(event) {
    let oldquantity = event.nextElementSibling.textContent;
    event.nextElementSibling.textContent = parseInt(oldquantity) - 1;
    if (oldquantity == 2) {
        event.classList.add("opacity");
        event.setAttribute("onclick", "");
    }
    update();
}
function create() {
    let body = document.getElementById("tbody");
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td scope="row" class="id">${body.children.length + 1}</td>
    <td class="name">
        <span contenteditable="true">Enter name product</span>
    </td>
    <td class="cost">
        <span contenteditable="true" oninputchange="edit()">0</span>
        <span>$</span>
    </td>
    <td>
        <i
            class="fa fa-angle-double-left decreaseBtn opacity"
            aria-hidden="true"
            title="giam so luong"
            onclick=""
        ></i>
        <span
            class="quantity"
            contenteditable="true"
            style="
                display: inline-block;
                width: 20px;
                text-align: center;
            "
        >
            1
        </span>
        <i
            class="fa fa-angle-double-right increaseBtn"
            aria-hidden="true"
            title="tang so luong"
            onclick="increase(this)"
        ></i>
    </td>
    <td class="subtotal">
        <span>0</span>
        <span>$</span>
    </td>
    <td>
        <span
            ><i
                class="fa fa-trash remove"
                aria-hidden="true"
                title="xoa product"
                onclick="remove(this)"
            ></i
        ></span>
    </td>`;
    body.appendChild(tr);
    handleEnter();
}
function edit(event) {
    update();
}
handleEnter();
function handleEnter() {
    $("[contenteditable]")
        .on("paste", function (e) {
            var $self = $(this);
            setTimeout(function () {
                $self.html($self.text());
            }, 0);
        })
        .on("keypress", function (e) {
            return e.which != 13;
        });
}
function remove(event) {
    event.parentElement.parentElement.parentElement.innerHTML = null;
}

function update() {
    let rows = Array.from(document.getElementById("tbody").rows);
    let total = 0;
    rows.forEach((elm) => {
        elm.cells[4].innerText =
            parseInt(elm.cells[2].innerText.trim()) *
                parseInt(elm.cells[3].innerText.replace("$", " ").trim()) +
            "$";
        total += parseInt(elm.cells[4].innerText.replace("$", ""));
    });
    document.getElementById("total").innerText = total;
}
window.addEventListener("load", update);
