//setting up DOMContentLoaded event with fLoad
document.addEventListener('DOMContentLoaded', fLoad);

// setting up two click events for reset and login button
function fLoad() {
    document.getElementById('loginButton').addEventListener('click', fValidate);
    document.getElementById('resetButton').addEventListener('click', fReset);
}

//validating that if value property of the length is zero then, red and if more, green
function fValidate() {
    let valProp = document.querySelectorAll('input[type="text"], input[type="password"]');
    
    for (let i = 0; i < valProp.length; i++) {
        let input = valProp[i];
        if (input.value.length === 0) {
            input.style.backgroundColor = 'red';
        } else {
            input.style.backgroundColor = 'green';
        }
    }
}

// removes all backgrounds and entries
function fReset() {
    let valProp = document.querySelectorAll('input[type="text"], input[type="password"]');
    
    for (let i = 0; i < valProp.length; i++) {
        let input = valProp[i];
        input.style.backgroundColor = '';
        input.value = '';
    }
}

