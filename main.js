let request = new XMLHttpRequest();

let usd = document.getElementById('usd');
let uzs = document.getElementById('uzs');
let icon = document.getElementById('icon');
let select1 = document.getElementById('select1');
let select2 = document.getElementById('select2');
let text = document.querySelector('.text');

    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4) {
            let data = JSON.parse(request.responseText);
            console.log(data);
        }
    });

icon.addEventListener('click', () => {
    let val = usd.value;
    usd.value = uzs.value;
    uzs.value = val;

    let sel = select1.value;
    select1.value = select2.value;
    select2.value = sel;

    let place = usd.placeholder;
    usd.placeholder = uzs.placeholder;
    uzs.placeholder = place;
});

usd.addEventListener('input', () => {
    if (request.readyState == 4) {
        let data = JSON.parse(request.responseText);
        let kurs = data[0].Rate;

        let val = usd.value;
        let natija = val * kurs;
        uzs.value = natija;
    }
});

uzs.addEventListener('input', () => {
    if (request.readyState == 4) {
        let data = JSON.parse(request.responseText);
        let kurs = data[0].Rate;

        let val = uzs.value;
        let natija = val / kurs;
        usd.value = natija;
    }
});

select1.addEventListener('change', () => {
    if (select1.value == 'USD') {
        usd.placeholder = 'USD';
    } else if (select1.value == 'EUR') {
        usd.placeholder = 'EUR';
    } else if (select1.value == 'RUB') {
        usd.placeholder = 'RUB';
    } else if (select1.value == 'UZS') {
        usd.placeholder = 'UZS';
    }
});

select2.addEventListener('change', () => {
    if (select2.value == 'USD') {
        uzs.placeholder = 'USD';
    } else if (select2.value == 'EUR') {
        uzs.placeholder = 'EUR';
    } else if (select2.value == 'RUB') {
        uzs.placeholder = 'RUB';
    } else if (select2.value == 'UZS') {
        uzs.placeholder = 'UZS';
    }
});

request.open('GET', 'https://cbu.uz/oz/arkhiv-kursov-valyut/json/');
request.send();