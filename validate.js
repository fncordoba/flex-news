function isStr(str) {
   return typeof str === "string"
}

function isNum(number) {
    return typeof number === "number"
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
    email = email.trim();
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return !(email.match(emailRegex) == null);
}

function validatePass(pass) {
    
    var passRegex = /^[\w]{8,14}}$/g;
    return !(pass.match(passRegex) == null);
}

function validateAge(age) {
    if (typeof age !== "number") {
        return false;
    }
    if (age < 18) {
        return false;
    }
    return true;
}

function validatePhone(phone) {
    if (!isNum(phone)) {
        return false;
    }
    if (phone.length < 7) {
        return false;
    }
}

function validateAddress(address) {
    if (!isStr(address)) {
        return false;
    }
    if (address.length < 8) {
        return false;
    }
    var addressRegex = /^[\w-\.]+ ([\w-]+)$/g;
    return !(address.match(addressRegex) == null);
}

