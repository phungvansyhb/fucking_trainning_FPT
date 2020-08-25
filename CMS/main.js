//------------------ check authennication--------------------------------
const username = localStorage.getItem("username");
if (!username) {
    window.location.href = "/login/loginPage.html";
} else {
    $("#username").html(username);
}

//-------------------------- handle choose menu----------------------------
$("#view-content").click(() => {
    $("#content-switch").html("");
    $.get("/response-content/viewContent.html", (data, err) => {
        console.assert(data, {err: "loi get request"});
        $(".loader").show();
        setTimeout(() => {
            $("#content-switch").html(data);
            $(".loader").hide();
        }, 5000);
        if (err) {
            $("#content-switch").html = " Page not Found 404!";
        }
    });
});
$("#form-content").click(() => {
    $("#content-switch").html("");
    $.get("/response-content/formContent.html", (data, err) => {
        $(".loader").show();
        setTimeout(() => {
            $("#content-switch").html(data);
            $(".loader").hide();
        }, 5000);
        if (err) {
            $("#content-switch").html = " Page not Found 404!";
        }
    });
});
$("#edit-form").click(() => {
    $("#content-switch").html("");
    $.get("/response-content/editProfile.html", (data, err) => {
        $(".loader").show();
        setTimeout(() => {
            $("#content-switch").html(data);
            $(".loader").hide();
        }, 5000);
        if (err) {
            $("#content-switch").html = " Page not Found 404!";
        }
    });
});
$("#logout").click(() => {
    localStorage.removeItem("username");
    window.location.href = "/login/loginPage.html";
});
