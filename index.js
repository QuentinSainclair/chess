//Fonction du choix de la couleur
function colorChoice() {
    let colorWhite = true;
    const toggle = document.getElementsByClassName('toggle')[0];
    let carre = document.getElementsByClassName('carre')[0];
    let carre2 = document.getElementsByClassName('carre2')[0];

    toggle.addEventListener("click", function() {
        if (colorWhite === true) {
            colorWhite = false;
            carre.classList.add("masquerEchiquier");
            carre2.classList.remove("carre2")
        } else {
            colorWhite = true;
            carre.classList.remove("masquerEchiquier");
            carre2.classList.add("carre2")
        }
        console.log(colorWhite)
    });
}

colorChoice();
