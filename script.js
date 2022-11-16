// REGLER:

// Inget får ändras inom "outer" taggen i html-filen
// Endast en variabel för skapas, gäller även i funktioner
// Får ej använda cookies eller liknande
// Variabeln får inte användas för att spara flera variabler (du fattar vad jag menar)

let variabel;
document.designMode = 'on';

document.getElementsByClassName("outer")[0].onclick = () => {
    if (window.event.target.className == "outer") return;
    console.log('Div med index ' + Array.from(document.getElementsByClassName("outer")[0].getElementsByClassName("content")).indexOf(window.event.target)+" blev klickad");
    confetti({angle: 45, origin: {x: 0, y: 1}});
    confetti({angle: 135, origin: {x: 1, y: 1}});
    new Audio("/assets/tada.mp3").play();
};

document.getElementsByClassName("dataContainer")[0].onclick = () => {
    if (window.event.target.className == "dataContainer" || window.event.target.id == "reset-button") return;
    if (window.event.target.dataset.id === undefined) {
        console.error("Inget data-id för div-en som blev klickad");
        return window.event.target.innerText = "Denna div har inte ett data-id attribut";
    } 
    window.event.target.innerText = window.event.target.dataset.id;
    confetti({angle: 315, origin: {x: 0, y: 0}});
    confetti({angle: 225, origin: {x: 1, y: 0}});
    new Audio("/assets/tada.mp3").play(); 
}

document.getElementById("reset-button").onclick = () => {
    for (variabel = 0; variabel < document.getElementsByClassName("dataContainer")[0].getElementsByTagName("div").length; variabel++)
    {
        document.getElementsByClassName("dataContainer")[0].getElementsByTagName("div")[variabel].innerText = "a div";
    }
}


setTimeout(()=>{
    document.getElementById("credits").style.opacity = "0%";
}, 0);

setTimeout(()=>{
    document.getElementById("credits").style.display = "none";
}, 5000);

setInterval(() => {
    document.querySelector("#azul img").setAttribute("src", `/assets/slideshow/${Date.now().toString().slice(-3).charAt(0)}.gif`)
}, 2100);


onscroll = ($event) => {
    scroll(window.scrollX - 2, window.scrollY - 2)
}
