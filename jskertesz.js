
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.gepekbutton');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const termekInput = document.querySelector('input[name="termek"]');
            termekInput.value = button.getAttribute('name');

            const berlesForm = document.querySelector('form');
            berlesForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});

document.addEventListener("DOMContentLoaded", function osszegfv () {
const berlesSelect = document.querySelector('select[name="berles"]');
const osszegInput = document.querySelector('input[name="összeg"]');
const termekInput = document.querySelector('input[name="termek"]');

const arak = {
"fűkasza": {
    "1": 2300,  
    "2": 4500,  
    "3": 11000  
},
"fűnyíró": {
    "1": 2800,
    "2": 5500,
    "3": 13000
},
"fűszegélynyíró":{
    "1": 2800,
    "2": 5500,
    "3": 13000
},
"fűszellőztető": {
    "1": 2300,  
    "2": 4500,  
    "3": 11000  
},
"lombfúvó": {
    "1": 2000,
    "2": 3800,
    "3": 10000
},
"lombszívó":{
    "1": 2300,
    "2": 4500,
    "3": 11000
},
"sövénynyíró":{
    "1": 2500,  
    "2": 4800,  
    "3": 12000 
}
};

berlesSelect.addEventListener("change", function osszegfv() {
const kivalasztottIdotartam = berlesSelect.value;
const kivalasztottGep = termekInput.value;

const ar = arak[kivalasztottGep][kivalasztottIdotartam];
osszegInput.value = ar;
});
});
