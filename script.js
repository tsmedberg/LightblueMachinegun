// REGLER:

// Inget får ändras inom "outer" taggen i html-filen
// Endast en variabel för skapas, gäller även i funktioner
// Får ej använda cookies eller liknande
// Variabeln får inte användas för att spara flera variabler (du fattar vad jag menar)

let variabel;

document.getElementsByClassName("outer")[0].onmouseover = () => {
    if (window.event.target.className == "outer") return;
    console.log('Div med index ' + Array.from(document.getElementsByClassName("outer")[0].getElementsByClassName("content")).indexOf(window.event.target)+" blev klickad");
    confetti({angle: 45, origin: {x: 0, y: 1}});
    confetti({angle: 135, origin: {x: 1, y: 1}});
    new Audio("/assets/tada.mp3").play();
};

document.getElementsByClassName("dataContainer")[0].onclick = () => {
    if (window.event.target.className == "dataContainer") return;
    if (window.event.target.id == "reset-button") return;
    if (window.event.target.dataset.id === undefined) return window.event.target.innerText = "Denna div har inte ett data-id attribut";
    window.event.target.innerText = window.event.target.dataset.id;
}

document.getElementById("reset-button").onclick = () => {
    for (variabel = 0; variabel < document.getElementsByClassName("dataContainer")[0].getElementsByTagName("div").length; variabel++)
    {
        document.getElementsByClassName("dataContainer")[0].getElementsByTagName("div")[variabel].innerText = "a div";
    }
}

setTimeout(()=>{
    document.getElementById("credits").style.opacity = "0%";
},0);

setTimeout(()=>{
    document.getElementById("credits").style.display = "none";
} ,5000);

setInterval(() => {
    document.querySelector("#azul img").setAttribute("src", `/assets/slideshow/${Date.now().toString().slice(-3).charAt(0)}.gif`)
}, 2100);
