// var css = '.card:hover{ transform: rotate(${Math.random()*6 - 3}deg) }';
// var style = document.createElement('style');

// if (style.styleSheet) {
//     style.styleSheet.cssText = css;
// } else {
//     style.appendChild(document.createTextNode(css));
// }

// document.getElementsByTagName('head')[0].appendChild(style);

// const cards = document.getElementsByClassName("card");
// for (let i=0; i < cards.length; i++) {
//     console.log(i)
// }

var isViewing = false
var currentCardIndex = 0

const cards = [
    {
        imageURL : "./img/art/DoodleArtVertical.png",
        title : "epic doodle",
        description : "wow epic doodle",
    }, 
    {
        imageURL : "./img/art/dino_sleeping17.gif",
        title : "cool dino",
        description : "indeed cool dino",
    }
]

function getHTMLofCard(card, index) {
    var div = document.createElement("div")
    div.innerHTML = `
        <div class="card artCard" onclick="openImageViewer(${index})">
            <div class="cardImageContainer">
                <img src="${card.imageURL}">
            </div>
            <h2>${card.title}</h2>
            <p>${card.description}</p>
        </div>`
    return div
}

function openImageViewer(index) {
    isViewing = true
    var element = document.getElementById("cardViewerId")
    element.style.display = "flex"

    currentCardIndex = index
    updateImage()
}

function closeImageViewer() {
    isViewing = false
    var element = document.getElementById("cardViewerId")
    element.style.display = "none"
}

function previousImage() {
    currentCardIndex = Math.max(currentCardIndex-1, 0)
    console.log(currentCardIndex)

    updateImage()
}
function nextImage() {
    currentCardIndex = Math.min(currentCardIndex+1, cards.length-1)
    console.log(currentCardIndex)

    updateImage()
}

function updateImage() {
    var img = document.getElementById("imageViewerImageId")
    var title = document.getElementById("imageViewerTitleId")
    var description = document.getElementById("imageViewerDescriptionId")
    var currentCard = cards[currentCardIndex]

    img.src = currentCard.imageURL
    title.innerText = currentCard.title
    description.innerText = currentCard.description
}

function fillBodyWithCards() {
    var grid = document.getElementById("cardGridId")
    
    for (var i=0; i<cards.length; i++) {
        grid.append(getHTMLofCard(cards[i], i))
    }
}


fillBodyWithCards()