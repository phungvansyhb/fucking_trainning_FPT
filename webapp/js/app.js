function getUser() {
    let form = document.forms["frm-register"];
    const user = {
        firstname: form["firstname"].value,
        lastname: form["lastname"].value,
        email: form["email"].value,
        username: form["userName"].value,
        password: form["password"].value,
        cfpassword: form["cfpassword"].value,
    };
    return user;
}
function validate(user) {
    let msg = "";
    if (user.username.length < 8) {
        msg = "Ten phai dai hon 8 ky tu";
    }
    if (user.password != user.cfpassword) {
        msg = "Xac nhan mat khau khong trung khop";
    } else {
        for (const elm in user) {
            if (user.hasOwnProperty(elm)) {
                const e = user[elm];
                if (e == "") msg = "Ban khong duoc de trong cac truong input";
            }
        }
    }

    document.getElementById("msg").innerHTML = msg;
    return msg == "" ? true : false;
}

function renderResult(check, user) {
    if (!check) return;
    else {
        console.log(user);
        const navtitle = `<tr>
        <td>No</td>
        <td>First name</td>
        <td>Last name</td>
        <td>Email</td>
        <td>Username</td>
    </tr>`;
        const tr = document.createElement("tr");
        const data = `
        <td>x</td>
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.email}</td>
        <td>${user.username}</td>
    `;
        tr.innerHTML = data;

        document.getElementById("header").innerHTML = navtitle;
        document.getElementById("body").appendChild(tr);
    }
}
function test() {
    alert("heello 123");
}
