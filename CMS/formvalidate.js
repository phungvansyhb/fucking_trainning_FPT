$("#login-form").validate({
    rules: {
        email: {
            required: true,
            minlength: 5,
            maxlength: 50,
        },
        password: {
            required: true,
            minlength: 8,
            maxlength: 30,
        },
    },
    messages: {
        email: {
            required: "Fill email pls",
            minlength: "email must have at lest 5 character",
            maxlength: "email must have max 50 character",
        },
        password: {
            required: "Fill password pls",
            minlength: "password must have at lest 8 character",
            maxlength: "password must have max 30 character",
        },
    },
    submitHandler: function () {
        window.location.href = "/";
        localStorage.setItem("username", "test");
    },
});

$("#register-form").validate({
    rules: {
        username: {
            required: true,
            minlength: 3,
            maxlength: 30,
        },
        email: {
            required: true,
            minlength: 5,
            maxlength: 50,
        },
        password: {
            required: true,
            minlength: 8,
            maxlength: 30,
        },
        repassword: {
            required: true,
            minlength: 8,
            maxlength: 30,
            equalTo: "#password",
        },
    },
    messages: {
        username: {
            required: "Fill username pls",
            minlength: "email must have at lest 3 character",
            maxlength: "email must have max 30 character",
        },
        email: {
            required: "Fill email pls",
            minlength: "email must have at lest 5 character",
            maxlength: "email must have max 50 character",
        },
        password: {
            required: "Fill password pls",
            minlength: "password must have at lest 8 character",
            maxlength: "password must have max 30 character",
        },
        repassword: {
            required: "Fill password pls",
            equalTo: "Don't match",
        },
    },
});
$("#edit-form").validate({
    rules: {
        firstname: {
            required: true,
            minlength: 3,
            maxlength: 30,
        },
        lastname: {
            required: true,
            minlength: 5,
            maxlength: 50,
        },
        email: {
            required: true,
            minlength: 8,
            maxlength: 30,
        },
        phone: {
            required: true,
            minlength: 9,
            maxlength: 13,
            digits: true,
        },
        description: {
            maxlength: 200,
        },
    },
    messages: {
        firstname: {
            required: "Fill first name pls",
            minlength: "first name must have at lest 3 character",
            maxlength: "firse name have max 30 character",
        },
        lastname: {
            required: "Fill lastname  pls",
            minlength: "lastname must have at lest 3 character",
            maxlength: "lastname have max 30 character",
        },
        email: {
            required: "Fill email pls",
            minlength: "email must have at lest 5 character",
            maxlength: "email must have max 50 character",
        },
        phone: {
            required: "Fill phone pls",
            minlength: "phone must have at lest 9 character",
            maxlength: "phone must have max 13 character",
            digits: "Phone wrong type",
        },
        description: {
            maxlength: "Description qua dai",
        },
    },
});
