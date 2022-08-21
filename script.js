// REGLER:

// Inget får ändras inom "outer" taggen i html-filen
// Endast en variabel för skapas, gäller även i funktioner
// Får ej använda cookies eller liknande
// Variabeln får inte användas för att spara flera variabler (du fattar vad jag menar)

let variabel = new Audio();

document.getElementsByClassName("outer")[0].onclick = () => {
    if (window.event.target.className == "outer") return;
    console.log('Div med index ' + Array.from(document.getElementsByClassName("outer")[0].getElementsByClassName("content")).indexOf(window.event.target)+" blev klickad");
    confetti({angle: 45, origin: {x: 0, y: 1}});
    confetti({angle: 135, origin: {x: 1, y: 1}});
    new Audio("/assets/tada.mp3").play();
};

setTimeout(()=>{
    document.getElementById("credits").style.opacity = "0%";
},0);
setTimeout(()=>{
    document.getElementById("credits").style.display = "none";
} ,5000);

// gör en till gif så att vi har från 0-9 och använd sedan en random grej

setInterval(() => {
    document.querySelector("#azul img").setAttribute("src", `/assets/slideshow/${Date.now().toString().slice(-3).charAt(0)}.gif`)
}, 2100);