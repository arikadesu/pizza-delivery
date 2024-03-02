// mengelola hasil inputan form
function handleGetFormData() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone-number").value;
    let status = document.getElementById("status").checked;

    return {
        name: name,
        address: address,
        email: email,
        phoneNumber: phoneNumber,
        status: status
    };
}

// phone number hanya boleh diisi dengan angka
function isNumber(str) {
    return !isNaN(str);
}

// checkbox submit
function checkboxIsChecked() {
    let status = document.getElementById("status").checked;
    return status;
}

// validasi inputan user
function validateFormData(data) {
    // Memeriksa apakah semua field yang wajib diisi telah terisi
    if (data.name.trim() === "" || data.address.trim() === "" || data.email.trim() === "" || data.phoneNumber.trim() === "") {
        return false;
    }

    // Memeriksa apakah phoneNumber hanya berisi angka
    if (!isNumber(data.phoneNumber)) {
        return false;
    }

    // Memeriksa apakah checkbox dicentang
    if (!data.status) {
        return false;
    }

    return true;
}

// proses submit inputan 
function submit(event) {
    const formData = handleGetFormData()
    if (!validateFormData(formData)) {
        document.getElementById("warning").innerHTML = "Periksa form anda sekali lagi";
    } else {
        document.getElementById("warning").innerHTML = "";
        alert("Data sudah sesuai dan benar. Terima kasih!");
    }
}

document.getElementById('submit-form').addEventListener('click', (event) => {
    event.preventDefault();
    submit()
});
