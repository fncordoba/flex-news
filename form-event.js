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
    "re-pass": {
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
if (submitKeys.fullname.status) {
    alertMessage = `${alertMessage} \n Fullname: ${submitKeys.fullname.value}`;
}
alert(alertMessage);

function resetInput(e) {
    var element = document.getElementById(e.target.id);
    element.classList.remove('input-wrapper-wrong');
    element.classList.remove('input-wrapper-success');
}

function validateSubmit(e) {
    if (submitKeys.fullname && submitKeys.email && submitKeys.pas && submitKeys.["re-pass"] && submitKeys.age && submitKeys.phone && submitKeys.address && submitKeys.city && submitKeys.post && submitKeys.dni) {
        alert("successful submit")
    }else {
        alert("")
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
                //modificar el valor de la propiedad fullname en el objeto submitKeys
                submitKeys.fullname.status = true;
            } else {
                element.classList.remove('input-wrapper-success');
                element.classList.add('input-wrapper-wrong');
                submitKeys.fullname.status = false;
            }
            submitKeys.fullname.value = e.target.value;
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
                submitKeys.["re-pass"].status = true;
            } else {
                rePassElement.classList.remove('input-wrapper-success');
                rePassElement.classList.add('input-wrapper-wrong');
                submitKeys.["re-pass"].status = false;
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
        // case "address":
		// 	var param = validateAddress(e.target.value);
        //     var element = document.getElementById("address");
        //     if (param) {
        //         element.classList.remove('input-wrapper-wrong');
        //         element.classList.add('input-wrapper-success');
        //     } else {
        //         element.classList.remove('input-wrapper-success');
        //         element.classList.add('input-wrapper-wrong');
        //     }
        // break;
        // case "city":
		// 	var param = validateCity(e.target.value);
        //     var element = document.getElementById("city");
        //     if (param) {
        //         element.classList.remove('input-wrapper-wrong');
        //         element.classList.add('input-wrapper-success');
        //     } else {
        //         element.classList.remove('input-wrapper-success');
        //         element.classList.add('input-wrapper-wrong');
        //     }
        // break;
        // case "postal":
		// 	var param = validatePostal(e.target.value);
        //     var element = document.getElementById("postal");
        //     if (param) {
        //         element.classList.remove('input-wrapper-wrong');
        //         element.classList.add('input-wrapper-success');
        //     } else {
        //         element.classList.remove('input-wrapper-success');
        //         element.classList.add('input-wrapper-wrong');
        //     }
        // break;
        // case "dni":
		// 	var param = validateDni(e.target.value);
        //     var element = document.getElementById("dni");
        //     if (param) {
        //         element.classList.remove('input-wrapper-wrong');
        //         element.classList.add('input-wrapper-success');
        //     } else {
        //         element.classList.remove('input-wrapper-success');
        //         element.classList.add('input-wrapper-wrong');
        //     }
		// break;
	}
}

inputs.forEach(function (input) {
    input.addEventListener('focus', resetInput);
	input.addEventListener('blur', validateInput);
});

form.addEventListener('submit', validateSubmit)