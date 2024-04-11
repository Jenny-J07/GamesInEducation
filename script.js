// ------- Nav bar dropdown ---------

function myFunction() {
    var x = document.getElementById("Menu");
    if (x.className === "menu") {
        x.className += " responsiveMenu";
    } else {
        x.className = "menu";
    }

    var y = document.getElementById("menuTop");
    if (y.className === "menutop") {
        y.className += " responsive";
    } else {
        y.className = "menutop";
    }

    var icon = document.getElementById("icon");
    if (icon.className === "fa fa-bars") {
        icon.className = "fa fa-close";
    } else {
        icon.className = "fa fa-bars";
    }
}


// ---------- How To Box ------------

function cardFlip(card) {
    if (card.className === "info-box info-card-front") {
        card.className = "info-box info-card-back";
    } else {
        card.className = "info-box info-card-front";
    }
}






// ------- Games Page Slideshow ---------


var slidePosition = 1; 
SlideShow(slidePosition);

function plusSlides(n){
    SlideShow(slidePosition += n);
}

function currentSlide(n){
    SlideShow(slidePosition = n);
}

function SlideShow(n){
    var i;
    var slides = document.getElementsByClassName("slide-image");
    var circles = document.getElementsByClassName("dots");
    if (n > slides.length) {slidePosition = 1}
    if (n < 1) {slidePosition = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display  = "none"
    }
    for (i = 0; i < circles.length; i++){
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    
    slides[slidePosition-1].style.display = "block";
    circles[slidePosition-1].className += " enable";
}


// ------- Games Page Sorted Games ---------
// Different links that helped me when writing the javascript:
// resizing function - https://www.w3schools.com/jsref/event_onresize.asp
// screen width - https://www.w3schools.com/jsref/prop_screen_width.asp
// refresh when screen resized - https://stackoverflow.com/questions/14915653/refresh-page-on-resize-with-javascript-or-jquery



function execute(){

    if (window.innerWidth > 600) {
        GameCardsDisplay(englishGames);
        GameCardsDisplay(mathGames);
        GameCardsDisplay(computingGames);
        GameCardsDisplay(geographyGames);
    } else if (window.innerWidth <= 600) {
        GameCards(englishGames, englishGamesPosition);
        GameCards(mathGames, mathGamesPosition);
        GameCards(computingGames, computingGamesPosition);
        GameCards(geographyGames, geographyGamesPosition);
    }

 }





 function GameCardsDisplay(card_set){
    var i;
    var slides = document.getElementsByClassName(card_set);

    for (i = 0; i < slides.length; i++){
        slides[i].style.display  = "block"
    }

    if (card_set == "math-games"){slides[mathGamesPosition-1].style.display = "block";}
    if (card_set == "english-games"){slides[englishGamesPosition-1].style.display = "block";}
    if (card_set == "computing-games"){slides[computingGamesPosition-1].style.display = "block";}
    if (card_set == "geography-games"){slides[geographyGamesPosition-1].style.display = "block";}
}



var mathGamesPosition = 1; 
var mathGames = "math-games"
var englishGamesPosition = 1;
var englishGames = "english-games"
var computingGamesPosition = 1;
var computingGames = "computing-games"
var geographyGamesPosition = 1;
var geographyGames = "geography-games"


GameCards(mathGames, mathGamesPosition);
GameCards(englishGames, englishGamesPosition);
GameCards(computingGames, computingGamesPosition);
GameCards(geographyGames, geographyGamesPosition);


function plusMathCard(n){GameCards(mathGames, mathGamesPosition += n);}
function currentMathCard(n){GameCards(mathGames, mathGamesPosition= n);}


function plusEnglishCard(n){GameCards(englishGames, englishGamesPosition += n);}
function currentEnglishCard(n){GameCards(englishGames, englishGamesPosition = n);}


function plusComputingCard(n){GameCards(computingGames, computingGamesPosition += n);}
function currentComputingCard(n){GameCards(computingGames, computingGamesPosition = n);}


function plusGeographyCard(n){GameCards(geographyGames, geographyGamesPosition += n);}
function currentGeographyCard(n){GameCards(geographyGames, geographyGamesPosition = n);}


function GameCards(card_set, n){
    var i;
    var slides = document.getElementsByClassName(card_set);
    if (n > slides.length) {
        if (card_set == "math-games"){mathGamesPosition = 1}
        if (card_set == "english-games"){englishGamesPosition = 1}
        if (card_set == "computing-games"){computingGamesPosition = 1}
        if (card_set == "geography-games"){geographyGamesPosition = 1}
    }

    if (n < 1) {
        if (card_set == "math-games"){mathGamesPosition = slides.length}
        if (card_set == "english-games"){englishGamesPosition = slides.length}
        if (card_set == "computing-games"){computingGamesPosition = slides.length}
        if (card_set == "geography-games"){geographyGamesPosition = slides.length}
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display  = "none"
    }

    if (card_set == "math-games"){slides[mathGamesPosition-1].style.display = "block";}
    if (card_set == "english-games"){slides[englishGamesPosition-1].style.display = "block";}
    if (card_set == "computing-games"){slides[computingGamesPosition-1].style.display = "block";}
    if (card_set == "geography-games"){slides[geographyGamesPosition-1].style.display = "block";}
}







docuent.addEventListener('DOMContentLoader', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.benefit-zoom').forEach(section => {
        observer.observe(section);
    });
});






