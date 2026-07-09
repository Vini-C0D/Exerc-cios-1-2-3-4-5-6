function converterFahrenheit() {
    let celsius = Number(document.getElementById("celsius").value);

    let fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("resultado").innerText =
        "Resultado: " + fahrenheit + " °F";
}

function converterKelvin() {
    let celsius = Number(document.getElementById("celsius").value);

    let kelvin = celsius + 273.15;

    document.getElementById("resultado").innerText =
        "Resultado: " + kelvin + " K";
}

function limpar() {
    document.getElementById("celsius").value = "";
    document.getElementById("resultado").innerText = "Resultado: ";
}

function converterCelsius() {
    let celsius = Number(document.getElementById("celsius").value);
    document.getElementById("resultado").innerText = "Resultado: " + celsius + " °C";
}

window.addEventListener("DOMContentLoaded", () => {
    const divBotoes = document.querySelector(".botoes");
    if (divBotoes) {
        const novoBotao = document.createElement("button");
        novoBotao.innerText = "Mostrar em Celsius";
        novoBotao.onclick = converterCelsius;
        divBotoes.insertBefore(novoBotao, divBotoes.lastElementChild);
    }
});
