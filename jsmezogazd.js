
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
        "ágaprító": {
            "1": 2500,  
            "2": 4800,  
            "3": 12000  
        },
        "fűnyírótraktor": {
            "1": 3000,
            "2": 5500,
            "3": 14000
        },
        "hátipermetező":{
            "1": 2800,
            "2": 5500,
            "3": 13000
        },
        "láncfűrész": {
            "1": 2500,  
            "2": 4800,  
            "3": 12000  
        },
        "rotációskapa": {
            "1": 2800,
            "2": 5500,
            "3": 13000
        }
    };

    berlesSelect.addEventListener("change", function osszegfv() {
        const kivalasztottIdotartam = berlesSelect.value;
        const kivalasztottGep = termekInput.value;

        const ar = arak[kivalasztottGep][kivalasztottIdotartam];
        osszegInput.value = ar;
    });
});
