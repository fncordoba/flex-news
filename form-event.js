var form = document.getElementById('form-wrapper');
var inputs = document.querySelectorAll('#form-wrapper input');

var submitKeys = {
	fullname: {
        status: false,
        value: null,
        errorMessage: 'It must have more than 6 letters and at least one space in between.'
    },
	email: {
        status: false,
        value: null,
        errorMessage: 'it must be in a valid email format.'
    },
	pass: {
        status: false,
        value: null,
        errorMessage: 'Must be at least 8 characters and count of letters and numbers.'
    },
    repass: {
        status: false,
        value: null,
        errorMessage: 'Both passwords must be the same.'
    },
    age: {
        status: false,
        value: null,
        errorMessage: 'Whole number greater than or equal to 18.'
    },
    phone: {
        status: false,
        value: null,
        errorMessage: 'Number of at least 7 digits, do not accept spaces, hyphens or parentheses.'
    },
    address: {
        status: false,
        value: null,
        errorMessage: 'At least 5 characters, with letters, numbers and a space in between.'
    },
    city: {
        status: false,
        value: null,
        errorMessage: 'At least 3 characters.'
    },
    post: {
        status: false,
        value: null,
        errorMessage: 'At least 3 characters.'
    },
    dni: {
        status: false,
        value: null,
        errorMessage: '7 or 8 digit number.'
    },
}

var alertMessage = ``;

function resetInput(e) {
    var element = document.getElementById(e.target.id);
    element.classList.remove('input-wrapper-wrong');
    element.classList.remove('input-wrapper-success');
}

function validateSubmit(e) {
    e.preventDefault();
    if (submitKeys.fullname.status && submitKeys.email.status && submitKeys.pass.status && submitKeys.repass.status && submitKeys.age.status && submitKeys.phone.status && submitKeys.address.status && submitKeys.city.status && submitKeys.post.status && submitKeys.dni.status) {
        alert("Successful Submit");
    }else {
        var alertMessage = ``;
        if (!submitKeys.fullname.status) {
            alertMessage = `${alertMessage} \n Fullname: ${submitKeys.fullname.errorMessage}`;
        }
        if (!submitKeys.email.status) {
            alertMessage = `${alertMessage} \n Email: ${submitKeys.email.errorMessage}`;
        }
        if (!submitKeys.pass.status) {
            alertMessage = `${alertMessage} \n Password: ${submitKeys.pass.errorMessage}`;
        }
        if (!submitKeys.repass.status) {
            alertMessage = `${alertMessage} \n Repeat Password: ${submitKeys.repass.errorMessage}`;
        }
        if (!submitKeys.age.status) {
            alertMessage = `${alertMessage} \n Age: ${submitKeys.age.errorMessage}`;
        }
        if (!submitKeys.phone.status) {
            alertMessage = `${alertMessage} \n Phone: ${submitKeys.phone.errorMessage}`;
        }
        if (!submitKeys.address.status) {
            alertMessage = `${alertMessage} \n Address: ${submitKeys.address.errorMessage}`;
        }
        if (!submitKeys.city.status) {
            alertMessage = `${alertMessage} \n City: ${submitKeys.city.errorMessage}`;
        }
        if (!submitKeys.post.status) {
            alertMessage = `${alertMessage} \n Postal Code: ${submitKeys.post.errorMessage}`;
        }
        if (!submitKeys.dni.status) {
            alertMessage = `${alertMessage} \n DNI: ${submitKeys.dni.errorMessage}`;
        }
        alert(alertMessage);
    }
}

function validateInput(e) {

	switch (e.target.name) {
		case "fullname":
            var param = validateName(e.target.value);
            var element = document.getElementById("full-name");
            if (param) {
                element.classList.remove('input-wrapper-wrong');
                element.classList.add('input-wrapper-success');
                submitKeys.fullname.status = true;
            } else {
                element.classList.remove('input-wrapper-success');
                element.classList.add('input-wrapper-wrong');
                submitKeys.fullname.status = false;
            }
        break;
        case "email":
            var param = validateEmail(e.target.value);
            var element = document.getElementById("email");
            if (param) {
                element.classList.remove('input-wrapper-wrong');
                element.classList.add('input-wrapper-success');
                submitKeys.email.status = true;
            } else {
                element.classList.remove('input-wrapper-success');
                element.classList.add('input-wrapper-wrong');
                submitKeys.email.status = false;
            }
		break;
		case "pass":
			var param = validatePass(e.target.value);
            var element = document.getElementById("pass");
            if (param) {
                element.classList.remove('input-wrapper-wrong');
                element.classList.add('input-wrapper-success');
                submitKeys.pass.status = true;
            } else {
                element.classList.remove('input-wrapper-success');
                element.classList.add('input-wrapper-wrong');
                submitKeys.pass.status = false;
            }
        break;
        case "re-pass":
            var element = document.getElementById("pass");
            var rePassElement = document.getElementById("re-pass");
            if(element.value === rePassElement.value) {
                rePassElement.classList.remove('input-wrapper-wrong');
                rePassElement.classList.add('input-wrapper-success');
                submitKeys.repass.status = true;
            } else {
                rePassElement.classList.remove('input-wrapper-success');
                rePassElement.classList.add('input-wrapper-wrong');
                submitKeys.repass.status = false;
            }
        break;
        case "age":
			var param = validateAge(e.target.value);
            var element = document.getElementById("age");
            if (param) {
                element.classList.remove('input-wrapper-wrong');
                element.classList.add('input-wrapper-success');
                submitKeys.age.status = true;
            } else {
                element.classList.remove('input-wrapper-success');
                element.classList.add('input-wrapper-wrong');
                submitKeys.age.status = false;
            }
        break;
        case "phone":
			var param = validatePhone(e.target.value);
            var element = document.getElementById("phone");
            if (param) {
                element.classList.remove('input-wrapper-wrong');
                element.classList.add('input-wrapper-success');
                submitKeys.phone.status = true;
            } else {
                element.classList.remove('input-wrapper-success');
                element.classList.add('input-wrapper-wrong');
                submitKeys.phone.status = false;
            }
        break;
        case "address":
			var param = validateAddress(e.target.value);
            var element = document.getElementById("address");
            if (param) {
                element.classList.remove('input-wrapper-wrong');
                element.classList.add('input-wrapper-success');
                submitKeys.address.status = true;
            } else {
                element.classList.remove('input-wrapper-success');
                element.classList.add('input-wrapper-wrong');
                submitKeys.address.status = false;
            }
        break;
        case "city":
			var param = validateCity(e.target.value);
            var element = document.getElementById("city");
            if (param) {
                element.classList.remove('input-wrapper-wrong');
                element.classList.add('input-wrapper-success');
                submitKeys.city.status = true;
            } else {
                element.classList.remove('input-wrapper-success');
                element.classList.add('input-wrapper-wrong');
                submitKeys.city.status = false;
            }
        break;
        case "postal":
			var param = validatePostal(e.target.value);
            var element = document.getElementById("postal");
            if (param) {
                element.classList.remove('input-wrapper-wrong');
                element.classList.add('input-wrapper-success');
                submitKeys.post.status = true;
            } else {
                element.classList.remove('input-wrapper-success');
                element.classList.add('input-wrapper-wrong');
                submitKeys.post.status = false;
            }
        break;
        case "dni":
			var param = validateDni(e.target.value);
            var element = document.getElementById("dni");
            if (param) {
                element.classList.remove('input-wrapper-wrong');
                element.classList.add('input-wrapper-success');
                submitKeys.dni.status = true;
            } else {
                element.classList.remove('input-wrapper-success');
                element.classList.add('input-wrapper-wrong');
                submitKeys.dni.status = false;
            }
		break;
	}
}

inputs.forEach(function (input) {
    input.addEventListener('focus', resetInput);
	input.addEventListener('blur', validateInput);
});

form.addEventListener('submit', validateSubmit)