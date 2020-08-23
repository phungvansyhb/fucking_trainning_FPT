$("#addEmplink").click(() => {
    $.get("/FEE.M.L401/views/add-employee.html", (res) => {
        $(".container").html(res);
        $("#employeeName").focus();
    });
});
$("#listEmpslink").click(() => {
    $.get("/FEE.M.L401/views/list-employees.html", (res) => {
        $(".container").html(res);
    });
});
