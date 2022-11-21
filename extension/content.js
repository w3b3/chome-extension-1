// content.js
const b = document.getElementsByTagName("h1");
if (!!b) {
    const localeOptions = {
        locales: 'en-CA',
        options:
            {
                timeStyle: 'short',
            }
    }
    const horario_de_agora_int = new Date().getTime();
    const horario_daqui_a_5min_int = horario_de_agora_int + 5 * 60 * 1000;
    const hora_agora = new Date(horario_de_agora_int).toLocaleTimeString(localeOptions.locales, localeOptions.options);
    const hora_5min = new Date(horario_daqui_a_5min_int).toLocaleTimeString(localeOptions.locales, localeOptions.options);
    Array.from(b).forEach((item) => {
        item.innerText = "It's " + hora_agora + " ✨ " + item.innerText + "✨ by " + hora_5min;
    });
} else {
    alert("No H1's found");
}
