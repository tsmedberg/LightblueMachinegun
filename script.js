// REGLER:

// Inget får ändras inom "outer" taggen i html-filen
// Endast en variabel för skapas, gäller även i funktioner
// Får ej använda cookies eller liknande
// Variabeln får inte användas för att spara flera variabler (du fattar vad jag menar)

/* 
    Ideér:

    vi har content för div
    vi kanske kan outer.children.indexOf(target)   
    confetti({origin: {x: window.event.pageX/ window.innerWidth, y: window.event.pageY/window.innerHeight}}); 
*/

document.getElementsByClassName("outer")[0].onclick = () => {if (window.event.target.className == "outer") return; console.log('Div med index '+Array.from(document.getElementsByClassName("outer")[0].getElementsByClassName("content")).indexOf(window.event.target)+" blev klickad");};