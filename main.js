const cards = document.getElementsByClassName("card");

let currentHovered;

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseenter", (event) => {cardExpand(i);});
}

function cardExpand (index) {
    if (currentHovered !=null) {cards[currentHovered].setAttribute("class", "card");}
    cards[index].setAttribute("class", "card hovered")
    currentHovered = index;
}