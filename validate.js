function isStr(str) {
   return typeof str === "string"
}

function validateName(name) {
    if (!isStr(name)) {
        return false;
    }
    name.trim();
    if (name.length < 6) {
        return false;
    }
    if (name.split(" ").length === 1) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    if (!isStr(email)) {
        return false;
    }
    email.trim();
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return !(email.match(emailRegex) == null);
}

function validatePass(pass) {
    pass = `${pass}`;
    if (Number.parseInt(pass)) {
        return false;
    }
    var passRegex = /^[\w]{8,14}$/g;
    return !(pass.match(passRegex) == null);
}

function validateAge(age) {
    if (!Number.parseInt(age)) {
        return false;
    }
    if (age < 18) {
        return false;
    }
    return true;
}

function validatePhone(phone) {
    if (!Number.parseInt(phone)) {
        return false;
    }
    var characters = /^(?:(?!\ |\-|\(|\)).)+$/g;
    if (phone.match(characters) == null) {
        return false;
    }
    var phoneRegex = /^[\d]{7,14}$/g;
    return !(phone.match(phoneRegex) == null);
}

function validateAddress(address) {
    if (!isStr(address)) {
        return false;
    }
    if (address.length < 8) {
        return false;
    }
    var addressRegex = /^[\w-\.]+ ([\w-\ ]+)$/g;
    return !(address.match(addressRegex) == null);
}

function validateCity(city) {
    if (!isStr(city)) {
        return false;
    }
    name.trim();
    var cityRegex = /^[\w-\ ]{3,}$/g;
    return !(city.match(cityRegex) == null);
}

function validatePostal(postal) {
    if (!Number.parseInt(postal)) {
        return false;
    }
    var postalRegex = /^[\d]{3,8}$/g;
    return !(postal.match(postalRegex) == null);
}

function validateDni(dni) {
    if (!Number.parseInt(dni)) {
        return false;
    }
    var dniRegex = /^[\d]{7,10}$/g;
    return !(dni.match(dniRegex) == null);
}


