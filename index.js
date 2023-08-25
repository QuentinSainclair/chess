const pieces = document.querySelectorAll('.piece');
let pieceBeingDragged = null;
let tourBlancs = true;
const piecesWhite = document.querySelectorAll('.fa-regular');
const piecesBlack = document.querySelectorAll('.fa-solid');
let carre = document.getElementsByClassName('carre')[0];
let carre2 = document.getElementsByClassName('carre2')[0];

// Fonction pour inverser l'échiquier
function colorChoice() {
    let colorWhite = true;
    const toggle = document.getElementsByClassName('toggle')[0];
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

// Fonctions de déplacement des pions
pieces.forEach(piece => {
    piece.addEventListener('dragstart', dragStart);
    piece.addEventListener('dragend', dragEnd);
});

function dragStart(event) {
    pieceBeingDragged = event.target;
    event.dataTransfer.setData('text/plain', '');
}

function dragEnd() {
    pieceBeingDragged = null;
    tourBlancs = !tourBlancs;
}

carre.addEventListener('drop', function(event) {
    console.log("un move");
    if (tourBlancs === true) {
        event.preventDefault();
    }
});

const squares = document.querySelectorAll('.case');

squares.forEach(square => {
    square.addEventListener('dragover', dragOver);
    square.addEventListener('dragenter', dragEnter);
    square.addEventListener('dragleave', dragLeave);
    square.addEventListener('drop', dragDrop);
});

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
    this.classList.add('hovered'); // Ajoute une classe pour indiquer la zone de dépôt
}

function dragLeave() {
    this.classList.remove('hovered'); // Supprime la classe lorsque la pièce quitte la zone
}

function dragDrop() {
    this.appendChild(pieceBeingDragged); // Déplace la pièce dans la nouvelle square
    this.classList.remove('hovered'); // Supprime la classe hover
}

// Fonction restart
const reloadButton = document.getElementById('restart');
reloadButton.addEventListener('click', function() {
    location.reload();
});
