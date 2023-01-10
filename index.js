function randomizeCase(text) {
    for (const i in text) {
        if (Math.random() > 0.5) {
            text += text[i].toUpperCase()
        } else {
            text += text[i].toLowerCase()
        }
    }
    return text.slice(text.length / 2);
}



console.log(randomizeCase());