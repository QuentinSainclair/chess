function colorChoice() {
    let colorWhite = true;
    const toggle = document.getElementsByClassName('toggle')[0];
    let carre = document.getElementsByClassName('carre')[0];
    let carre2 = document.getElementsByClassName('carre2')[0];
    let isProcessingClick = false;

    toggle.addEventListener("click", function() {
        if (isProcessingClick) {
            return;
        }
        isProcessingClick = true;
        if (colorWhite === true) {
            colorWhite = false;
            carre.classList.add("masquerEchiquier");
            carre2.classList.remove("carre2");
        }  else {
            colorWhite = true;
            carre.classList.remove("masquerEchiquier");
            carre2.classList.add("carre2");
        }
        setTimeout(function() {
            isProcessingClick = false;
        }, 100);
    });
}

colorChoice();
