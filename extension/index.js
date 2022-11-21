// index.js
const h = document.getElementById("hora");
if (!!h) {
    const localeOptions = {
        locales: 'en-CA',
        options:
            {
                timeStyle: 'short',
            }
    }
    const horario_de_agora_int = new Date().getTime();
    const hora_agora = new Date(horario_de_agora_int).toLocaleTimeString(localeOptions.locales, localeOptions.options);
    h.innerText = hora_agora;
} else {
    alert("ID: hora not found");
}

// get the value of the input field with id="moeda_base" and store it in a variable
const moeda_base = document.getElementById("moeda_base");
// add listener to the input field with id="moeda_base"
moeda_base.addEventListener("change", evaluateCurrency);
// get the value of the input field with id="moeda_destino" and store it in a variable
const moeda_destino = document.getElementById("moeda_destino");
// fetch the value from the API and store it in a variable
// const currency = fetch("https://api.exchangeratesapi.io/latest?base=" + moeda_base + "&symbols=" + moeda_destino)
const fetchCurrency = async () => {
    // const currency = fetch("https://anyapi.io/api/v1/exchange/convert?apiKey=gs84ema5c26vcvl6852co14loisu4r6oetrhp4oasr8362i5liso");
    // return await currency.json();
    return {
        rate: 4
    }
}
 const moeda = document.getElementById("moeda");

evaluateCurrency();

function evaluateCurrency () {
    // alert(foo)
    // return foo;
    fetchCurrency().then((conversion) => {
        moeda_destino.value = (conversion.rate * moeda_base.value).toFixed(2);
        moeda.innerText = "R$ " + (conversion.rate).toFixed(2) + " /CAD";
    })
}
