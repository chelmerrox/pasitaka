import { hamburger, openMenu, closeMenu } from './modules/navbar-hamburger.js';
import './style.css';

// Define character set
const lowerCase = 'abcdefghijklmnopqrstuvxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
const numbers = '0123456789';
const symbols = '£$&()*+[]@#^-_!?';
const charCategories = 4;

let password = '';

let password_length_ctrl = document.getElementById('range-slider');
let passwordLength = document.getElementById('passwordLength');
let enter_ctrl = document.querySelector('.enter-btn');

let uppercase_ctrl = document.getElementById('uppercase');
let lowercase_ctrl = document.getElementById('lowercase');
let numbers_ctrl = document.getElementById('numbers');
let symbols_ctrl = document.getElementById('symbols');

let uppercase_selected = true;
let lowercase_selected = true;
let numbers_selected = true;
let symbols_selected = true;

let checkBoxChecked = 4;
const minimumChecked = 2;

// ID matches with the Bootstrap class used for the input field
let password_ctrl = document.getElementById('form-control');

let copy_ctrl = document.querySelector('.copy-btn');

let copied_password_message = document.querySelector('.copied-password-message');

let create_btn = document.querySelector('.create-btn');

// Open Nav Menu for click
hamburger.addEventListener('click', openMenu);

// Close Nav Menu for click
document.querySelectorAll('.nav-link-mobile').forEach((n) => n.addEventListener('click', closeMenu));
  
// For mobile & tablet screens
copy_ctrl.addEventListener('touchstart', copyPassword);
copy_ctrl.addEventListener('touchend', copyPassword);
create_btn.addEventListener('touchstart', generate);
create_btn.addEventListener('touchend', generate);
enter_ctrl.addEventListener('touchstart', (e) => {
  changePasswordLength(e);
});
enter_ctrl.addEventListener('touchend', (e) => {
	changePasswordLength(e);
});
passwordLength.addEventListener('touchstart', (e) => {
	if (e.key === "Enter") {
		changePasswordLength(e);
	}
});
passwordLength.addEventListener('touchend', (e) => {
	if (e.key === "Enter") {
		changePasswordLength(e);
	}
});

// For laptop & desktop screens
copy_ctrl.addEventListener('click', copyPassword);
create_btn.addEventListener('click', generate);
enter_ctrl.addEventListener('click', (e) => {
	changePasswordLength(e);
});
passwordLength.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
  	changePasswordLength(e);
  }
});

uppercase_ctrl.addEventListener('change', (e) => {
    if (e.target.checked) {
        checkBoxChecked++;
        uppercase_selected = true;
    } else {
        if (checkBoxChecked === minimumChecked) {
            uppercase_ctrl.checked = true;
        } else {
            checkBoxChecked--;
            uppercase_selected = false;
        }
    }

    generate();
});

lowercase_ctrl.addEventListener('change', (e) => {
    if (e.target.checked) {
        checkBoxChecked++;
        lowercase_selected = true;
    } else {
        if (checkBoxChecked === minimumChecked) {
            lowercase_ctrl.checked = true;
        } else {
            checkBoxChecked--;
            lowercase_selected = false;
        }
    }

    generate();
});

numbers_ctrl.addEventListener('change', (e) => {
    if (e.target.checked) {
        checkBoxChecked++;
        numbers_selected = true;
    } else {
        if (checkBoxChecked === minimumChecked) {
            numbers_ctrl.checked = true;
        } else {
            checkBoxChecked--;
            numbers_selected = false;
        }
    }

    generate();
});

symbols_ctrl.addEventListener('change', (e) => {
    if (e.target.checked) {
        checkBoxChecked++;
        symbols_selected = true;
    } else {
        if (checkBoxChecked === minimumChecked) {
            symbols_ctrl.checked = true;
        } else {
            checkBoxChecked--;
            symbols_selected = false;
        }
    }

    generate();
});


/*uppercase_ctrl.addEventListener('change', (e) => { uppercase_selected = (e.target.checked) ? true : false; console.log('lower: ' + uppercase_selected); });

lowercase_ctrl.addEventListener('change', (e) => { lowercase_selected = (e.target.checked) ? true : false; console.log('lower: ' + lowercase_selected); });

numbers_ctrl.addEventListener('change', (e) => { numbers_selected = (e.target.checked) ? true : false; console.log('numbers: ' + numbers_selected); });

symbols_ctrl.addEventListener('change', (e) => { symbols_selected = (e.target.checked) ? true : false; console.log('symbols: ' + symbols_selected); });*/

function changePasswordLength(e){
  password_length_ctrl.value = passwordLength.value;
}

function all(password, passwordLength, categories) {

    for (let i=0; i < passwordLength; i++) {
        let charType = Math.round(Math.abs((Math.random()*categories-1)));

        let index = 0;

        switch (charType) {
            case 0:
                index = Math.round(Math.abs((Math.random()*lowerCase.length-1)));
                password += lowerCase[index];
                break;
            case 1:
                index = Math.round(Math.abs((Math.random()*upperCase.length-1)));
                password += upperCase[index];
                break;
            case 2:
                index = Math.round(Math.abs((Math.random()*numbers.length-1)));
                password += numbers[index];
                break;
            default:
                index = Math.round(Math.abs((Math.random()*symbols.length-1)));
                password += symbols[index];
                break;
        }
    }

    return password;
}

function upper_lower_numbers(password, passwordLength, categories) {

    for (let i=0; i < passwordLength; i++) {
        let charType = Math.round(Math.abs((Math.random()*categories-1)));

        let index = 0;

        switch (charType) {
            case 0:
                index = Math.round(Math.abs((Math.random()*lowerCase.length-1)));
                password += lowerCase[index];
                break;
            case 1:
                index = Math.round(Math.abs((Math.random()*upperCase.length-1)));
                password += upperCase[index];
                break;
            default:
                index = Math.round(Math.abs((Math.random()*numbers.length-1)));
                password += numbers[index];
                break;
        }
    }

    return password;
}

function upper_lower_symbols(password, passwordLength, categories) {

    for (let i=0; i < passwordLength; i++) {
        let charType = Math.round(Math.abs((Math.random()*categories-1)));

        let index = 0;

        switch (charType) {
            case 0:
                index = Math.round(Math.abs((Math.random()*lowerCase.length-1)));
                password += lowerCase[index];
                break;
            case 1:
                index = Math.round(Math.abs((Math.random()*upperCase.length-1)));
                password += upperCase[index];
                break;
            default:
                index = Math.round(Math.abs((Math.random()*symbols.length-1)));
                password += symbols[index];
                break;
        }
    }

    return password;
}

function lower_numbers_symbols(password, passwordLength, categories) {

    for (let i=0; i < passwordLength; i++) {
        let charType = Math.round(Math.abs((Math.random()*categories-1)));

        let index = 0;

        switch (charType) {
            case 0:
                index = Math.round(Math.abs((Math.random()*lowerCase.length-1)));
                password += lowerCase[index];
                break;
            case 1:
                index = Math.round(Math.abs((Math.random()*numbers.length-1)));
                password += numbers[index];
                break;
            default:
                index = Math.round(Math.abs((Math.random()*symbols.length-1)));
                password += symbols[index];
                break;
        }
    }

    return password;
}

function upper_numbers_symbols(password, passwordLength, categories) {

    for (let i=0; i < passwordLength; i++) {
        let charType = Math.round(Math.abs((Math.random()*categories-1)));

        let index = 0;

        switch (charType) {
            case 0:
                index = Math.round(Math.abs((Math.random()*upperCase.length-1)));
                password += upperCase[index];
                break;
            case 1:
                index = Math.round(Math.abs((Math.random()*numbers.length-1)));
                password += numbers[index];
                break;
            default:
                index = Math.round(Math.abs((Math.random()*symbols.length-1)));
                password += symbols[index];
                break;
        }
    }

    return password;
}

function upper_lower(password, passwordLength, categories) {

    for (let i=0; i < passwordLength; i++) {
        let charType = Math.round(Math.abs((Math.random()*categories-1)));

        let index = 0;

        switch (charType) {
            case 0:
                index = Math.round(Math.abs((Math.random()*lowerCase.length-1)));
                password += lowerCase[index];
                break;
            default:
                index = Math.round(Math.abs((Math.random()*upperCase.length-1)));
                password += upperCase[index];
                break;
        }
    }

    return password;
}

function upper_numbers(password, passwordLength, categories) {

    for (let i=0; i < passwordLength; i++) {
        let charType = Math.round(Math.abs((Math.random()*categories-1)));

        let index = 0;

        switch (charType) {
            case 0:
                index = Math.round(Math.abs((Math.random()*numbers.length-1)));
                password += numbers[index];
                break;
            default:
                index = Math.round(Math.abs((Math.random()*upperCase.length-1)));
                password += upperCase[index];
                break;
        }
    }

    return password;
}

function upper_symbols(password, passwordLength, categories) {

    for (let i=0; i < passwordLength; i++) {
        let charType = Math.round(Math.abs((Math.random()*categories-1)));

        let index = 0;

        switch (charType) {
            case 0:
                index = Math.round(Math.abs((Math.random()*symbols.length-1)));
                password += symbols[index];
                break;
            default:
                index = Math.round(Math.abs((Math.random()*upperCase.length-1)));
                password += upperCase[index];
                break;
        }
    }

    return password;
}

function lower_numbers(password, passwordLength, categories) {

    for (let i=0; i < passwordLength; i++) {
        let charType = Math.round(Math.abs((Math.random()*categories-1)));

        let index = 0;

        switch (charType) {
            case 0:
                index = Math.round(Math.abs((Math.random()*lowerCase.length-1)));
                password += lowerCase[index];
                break;
            default:
                index = Math.round(Math.abs((Math.random()*numbers.length-1)));
                password += numbers[index];
                break;
        }
    }

    return password;
}

function lower_symbols(password, passwordLength, categories) {

    for (let i=0; i < passwordLength; i++) {
        let charType = Math.round(Math.abs((Math.random()*categories-1)));

        let index = 0;

        switch (charType) {
            case 0:
                index = Math.round(Math.abs((Math.random()*lowerCase.length-1)));
                password += lowerCase[index];
                break;
            default:
                index = Math.round(Math.abs((Math.random()*symbols.length-1)));
                password += symbols[index];
                break;
        }
    }

    return password;
}

function numbers_symbols(password, passwordLength, categories) {

    for (let i=0; i < passwordLength; i++) {
        let charType = Math.round(Math.abs((Math.random()*categories-1)));

        let index = 0;

        switch (charType) {
            case 0:
                index = Math.round(Math.abs((Math.random()*numbers.length-1)));
                password += numbers[index];
                break;
            default:
                index = Math.round(Math.abs((Math.random()*symbols.length-1)));
                password += symbols[index];
                break;
        }
    }

    return password;
}

function generate() {
    password = '';

    const passwordLength = password_length_ctrl.value;

    if (uppercase_selected && lowercase_selected && symbols_selected && numbers_selected) {
        password = all('', passwordLength, 4);
    } else if (uppercase_selected && lowercase_selected && numbers_selected) {
        password = upper_lower_numbers('', passwordLength, 3);
    } else if (uppercase_selected && lowercase_selected && symbols_selected) {
        password = upper_lower_symbols('', passwordLength, 3);
    } else if (lowercase_selected && numbers_selected && symbols_selected) {
        password = lower_numbers_symbols('', passwordLength, 3);
    } else if (uppercase_selected && numbers_selected && symbols_selected) {
        password = upper_numbers_symbols('', passwordLength, 3);
    } else if (uppercase_selected && lowercase_selected) {
        password = upper_lower('', passwordLength, 2);
    } else if (uppercase_selected && numbers_selected) {
        password = upper_numbers('', passwordLength, 2);
    } else if (uppercase_selected && symbols_selected) {
        password = upper_symbols('', passwordLength, 2);
    } else if (lowercase_selected && numbers_selected) {
        password = lower_numbers('', passwordLength, 2);
    } else if (lowercase_selected && symbols_selected) {
        password = lower_symbols('', passwordLength, 2);
    } else if (numbers_selected && symbols_selected) {
        password = numbers_symbols('', passwordLength, 2);
    }

    password_ctrl.value = password;
}

function copyPassword(){
  // Select the text field
  password_ctrl.select();
  password_ctrl.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(password_ctrl.value);

  copied_password_message.textContent = "\"Copied to clipboard!\""
  copied_password_message.style.textAlign = "center";
  copied_password_message.style.color = "green";
  copied_password_message.style.fontSize = "25px";
  copied_password_message.style.marginTop = "10px";
  copied_password_message.style.marginBottom = "10px";
}

generate();