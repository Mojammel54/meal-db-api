
// function quotes() {

//     fetch('https://api.kanye.rest/')
//         .then(res => res.json())
//         .then(data => console.log(data))


// }


// quotes()


const loadQuotes = () => {

    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => display(data))


}

const display = data => {

    const quote = document.getElementById('quote')
    quote.innerText = data.quote


}



loadQuotes()