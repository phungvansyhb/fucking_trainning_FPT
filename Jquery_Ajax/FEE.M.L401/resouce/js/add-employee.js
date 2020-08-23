$(function () {
    $.validator.addMethod(
        "maxDate",
        function (value, elm) {
            let curDate = new Date();
            var inputDate = new Date(value);
            if (inputDate < curDate) return true;
            return false;
        },
        "Invalid date of birth"
    );
    $("#addEmpForm").validate({
        rules: {
            eplName: {
                required: true,
                minlength: 5,
            },
            dateOfBirth: {
                required: true,
                maxDate: true,
            },
            dept: {
                required: true,
            },
        },
        messages: {
            empName: {
                required: "Please enter employee name",
                minlength: "Employee name must contain ar least 5 characters",
            },
            dateOfBirth: {
                required: "Please choose a date",
            },
            dept: {
                required: "Please choose a department",
            },
        },
        submitHandler: function (form) {
            $.get({
                url: "/FEE.M.L401/views/list-employees.html",
                success: function (res) {
                    $(".container").html(res);
                },
            });
        },
    });
});
