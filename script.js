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
}