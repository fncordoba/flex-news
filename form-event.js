var form = document.getElementById('form-wrapper');
var inputs = document.querySelectorAll('#form-wrapper input');

function validateForm(e) {
	switch (e.target.name) {
		case "full-name":
            validateName(e.target);
            if (validateName) {
                console.log("guenas");
            }
        break;
        case "email":
            validateEmail(e.target);
            if (validateEmail) {
                console.log("guenas");
            }
		break;
		case "pass":
			console.log("guenas");
        break;
        case "re-pass":
			validarCampo(validatePass, e.target, 're-pass');
        break;
        case "age":
			validarCampo(validateAge, e.target, 'age');
        break;
        case "phone":
			validarCampo(validatePhone, e.target, 'phone');
        break;
        case "address":
			validarCampo(validateName, e.target, 'address');
        break;
        case "city":
			validarCampo(validateName, e.target, 'city');
        break;
        case "postal":
			validarCampo(validateName, e.target, 'postal');
        break;
        case "dni":
			validarCampo(validateName, e.target, 'dni');
		break;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validateForm);
	input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

});