
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
"háromfázisú áramfejlesztő": {
    "1": 2500,  
    "2": 4800,  
    "3": 12000  
},
"hegesztő áramfejlesztő": {
    "1": 2800,
    "2": 5500,
    "3": 13000
},
"inverteres áramfejlesztő":{
    "1": 2800,
    "2": 5500,
    "3": 13000
},
"kétfázisú áramfejlesztő": {
    "1": 2500,  
    "2": 4800,  
    "3": 12000  
},
"csavarbehajtó": {
    "1": 2300,
    "2": 4500,
    "3": 11000
},
"dekopírfűrész":{
    "1": 2500,
    "2": 4800,
    "3": 12000
},
"deltacsiszoló":{
    "1": 2800,
    "2": 5500,
    "3": 13000
},
"excentercsiszoló": {
    "1": 2300,  
    "2": 4500,  
    "3": 11000  
},
"kezigyalu": {
    "1": 2800,
    "2": 5500,
    "3": 13000
},
"körfűrész":{
    "1": 2800,
    "2": 5500,
    "3": 13000
},
"sarokcsiszoló": {
    "1": 2300,  
    "2": 4500,  
    "3": 11000  
},
"szablyafűrész": {
    "1": 2000,
    "2": 3800,
    "3": 10000
},
"szalagcsiszoló":{
    "1": 2300,
    "2": 4500,
    "3": 11000
},
"bontókalapács":{
    "1": 2500,  
    "2": 4800,  
    "3": 12000 
},
"fúró": {
    "1": 2300,  
    "2": 4500,  
    "3": 11000  
},
"fúróvéső": {
    "1": 2800,
    "2": 5500,
    "3": 13000
},
"vésőkalapács":{
    "1": 2800,
    "2": 5500,
    "3": 13000
},
"csempevágó": {
    "1": 2300,  
    "2": 4500,  
    "3": 11000  
},
"vizescsempevágó": {
    "1": 2000,
    "2": 3800,
    "3": 10000
},
"áramos hőlégbefúvó":{
    "1": 2300,
    "2": 4500,
    "3": 11000
},
"gázolajos hőlégbefúvó":{
    "1": 2500,  
    "2": 4800,  
    "3": 12000 
},
"gázpalackoss hőlégbefúvó": {
    "1": 2300,  
    "2": 4500,  
    "3": 11000  
},
"betonsimitó": {
    "1": 2800,
    "2": 5500,
    "3": 13000
},
"döngölőbéka":{
    "1": 2800,
    "2": 5500,
    "3": 13000
},
"lapvibrátor": {
    "1": 2300,  
    "2": 4500,  
    "3": 11000  
},
"padkahenger": {
    "1": 2000,
    "2": 3800,
    "3": 10000
},
"tűvibrátor":{
    "1": 2300,
    "2": 4500,
    "3": 11000
}
};

berlesSelect.addEventListener("change", function osszegfv() {
const kivalasztottIdotartam = berlesSelect.value;
const kivalasztottGep = termekInput.value;

const ar = arak[kivalasztottGep][kivalasztottIdotartam];
osszegInput.value = ar;
});
});
