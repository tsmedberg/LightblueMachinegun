// REGLER:

// Inget får ändras inom "outer" taggen i html-filen
// Endast en variabel för skapas, gäller även i funktioner
// Får ej använda cookies eller liknande
// Variabeln får inte användas för att spara flera variabler (du fattar vad jag menar)

let variabel;
document.designMode = "on";

document.getElementsByClassName("outer")[0].onclick = () => {
    if (window.event.target.className == "outer") return;
    console.log(
        "Div med index " +
        Array.from(
            document
                .getElementsByClassName("outer")[0]
                .getElementsByClassName("content")
        ).indexOf(window.event.target) +
        " blev klickad"
    );
    confetti({ angle: 45, origin: { x: 0, y: 1 } });
    confetti({ angle: 135, origin: { x: 1, y: 1 } });
    new Audio("/assets/tada.mp3").play();
};

document.getElementsByClassName("dataContainer")[0].onclick = () => {
    if (
        window.event.target.className == "dataContainer" ||
        window.event.target.id == "reset-button"
    )
        return;
    if (window.event.target.dataset.id === undefined) {
        consoleError("Inget data-id för div-en", "div-en som blev klickad");
        return (window.event.target.innerText =
            "Denna div har inte ett data-id attribut");
    }
    window.event.target.innerText = window.event.target.dataset.id;
    confetti({ angle: 315, origin: { x: 0, y: 0 } });
    confetti({ angle: 225, origin: { x: 1, y: 0 } });
    new Audio("/assets/tada.mp3").play();
};

document.getElementById("reset-button").onclick = () => {
    for (
        variabel = 0;
        variabel <
        document
            .getElementsByClassName("dataContainer")[0]
            .getElementsByTagName("div").length;
        variabel++
    ) {
        document
            .getElementsByClassName("dataContainer")[0]
            .getElementsByTagName("div")[variabel].innerText = "a div";
    }
};

setTimeout(() => {
    document.getElementById("credits").style.opacity = "0%";
}, 0);

setTimeout(() => {
    document.getElementById("credits").style.display = "none";
}, 5000);

setInterval(() => {
    document
        .querySelector("#azul img")
        .setAttribute(
            "src",
            `/assets/slideshow/${Date.now().toString().slice(-3).charAt(0)}.gif`
        );
}, 2100);

// inte ens ett skämt, denna måste vara indenterad såhär för att funktionen ska fungera
        onscroll = ($event) => {
            autoScroll();
        };

function autoScroll() {
    scroll(window.scrollX - 2, window.scrollY - 2);
}

function randomizeCase(text) {
    console.log(text);
    for (variabel in text) {
        if (Math.random() > 0.5) {
            text += text[variabel].toUpperCase()
        } else {
            text += text[variabel].toLowerCase()
        }
    }
    return text.slice(text.length / 2);
}

function getInsideOfHTMLTags(text) {
    if (text.indexOf('>') == -1) {
        return text;
    }
    if (text.indexOf('>', text.indexOf('>') + 1) != text.length - 1) {
        return getInsideOfHTMLTags(text.substring(text.indexOf('>') + 1, text.lastIndexOf('<')));
    }
    return text.substring(text.indexOf('>') + 1, text.lastIndexOf('<'));
}

function dissleksi() {
    document.querySelectorAll('body *').forEach(x => {
        console.log(getInsideOfHTMLTags(x.innerHTML))
    })
}

function ʇɹǝʌuᴉ() {
    if (document.querySelector("body").style.rotate == "180deg")
        document.querySelector("body").style.rotate = "0deg";
    else document.querySelector("body").style.rotate = "180deg";
}

function lowContrast() {
    if (
        document.querySelector("#contrast").innerText.toLowerCase() ==
        "high contrast"
    ) {
        document.documentElement.style.setProperty("--BESTcOLOR", "#BADA55");
        document.documentElement.style.setProperty("--text-color", "#1e90ff");
        document.documentElement.style.setProperty("--contrast", "#f00");
        document.documentElement.style.setProperty("--nice-color", "#50442c");
    } else {
        console.log("%clow contrast enabled", "color: #333");
        document.documentElement.style.setProperty("--BESTcOLOR", "#ABFF2E");
        document.documentElement.style.setProperty("--text-color", "#c1Fe2e");
        document.documentElement.style.setProperty("--contrast", "transparent");
        document.documentElement.style.setProperty("--nice-color", "#aCef12");
    }
}

function toggleAutoscroll() {
    if (
        onscroll + [] == (($event) => {
            autoScroll();
        }) + []
    ) { 
        onscroll = () => { };
    } else {
        onscroll = ($event) => {
            autoScroll();
        };
        scroll(window.scrollX - 2, window.scrollY - 2);
    }
}
