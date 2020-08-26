$.validator.addMethod("isValidlocalpathEmail", (value, elm) => {
    let localPath = value.split("@")[0];
    let regex = /[^0-9a-zA-Z+.+_]/;
    console.log(localPath.match(regex));
    let check = localPath.match(regex) !== null ? false : true;
    return check;
});
$.validator.addMethod("isValidDomainEmail", (value, elm) => {
    let domain = value.split("@")[1];

    let check =
        domain == "fsoft.com.vn" ||
        domain == "outlook.com" ||
        domain == "gmail.com"
            ? true
            : false;
    return check;
});
$.validator.addMethod("isValidDate", (value, elm) => {
    let check = Date.parse(value) > new Date(1990, 1, 1).getTime();
    let check2 = Date.parse(value) < new Date().getTime();
    return check && check2;
});
$.validator.addMethod("notNumber", (value, elm) => {
    let regex = /[^a-zA-Z]/;
    let check = value.match(regex) == null ? true : false;
    return check;
});
$.validator.addMethod("isvalidPhone", (value, elm) => {
    let check1 = value.startsWith("84");
    let check2 = value.startsWith("840");
    let check3 = value.length == 11;
    console.log(check1, check2);
    let check = check1 && !check2 && check3;
    return check;
});

$("#form").validate({
    rules: {
        ho: {
            required: true,
            minlength: 2,
            maxlength: 10,
            notNumber: true,
        },
        ten: {
            required: true,
            minlength: 2,
            maxlength: 20,
            notNumber: true,
        },
        diachiEmail: {
            required: true,
            email: true,
            isValidlocalpathEmail: true,
            isValidDomainEmail: true,
        },
        sdt: {
            required: true,
            number: true,
            isvalidPhone: true,
        },
        date: {
            required: true,
            isValidDate: true,
        },
    },
    messages: {
        ho: {
            required: "Bat buoc phai dien ho!",
            minlength: "Do dai cua ho toi thieu la 2 ki tu!",
            maxlength: "Do dai toi da cua ho la 10 ki tu!",
            notNumber: "ho khong duoc chua so!",
        },
        ten: {
            required: "Bat buoc phai dien ten!",
            minlength: "Do dai cua ten toi thieu la 2 ki tu!",
            maxlength: "Do dai toi da cua ten la 20 ki tu!",
            notNumber: "ten khong duoc chua so!",
        },
        diachiEmail: {
            required: "Bat buoc dien email!",
            isValidlocalpathEmail:
                "format cua localPath chi chua chu thuong chu hoa , so dau . va _ !",
            isValidDomainEmail: "domain khong hop le !",
        },
        sdt: {
            required: "bat buoc phai nhap so dien thoai!",
            number: "khong bao gom chu cai!",
            isvalidPhone: "format so dien thoai khong dung  ",
        },
        date: {
            required: "bat buoc phai nhap ngay!",
            isValidDate: "Ngay khong dung !",
        },
    },
    submitHandler: function () {},
});
