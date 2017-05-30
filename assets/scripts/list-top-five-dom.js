function addOnClickHandlers() {
    var cdsDiv = document.getElementById("cds");
    // retorna um array de todos os elementos <img>  existentes no elemento <div>
    var cdImages = cdsDiv.getElementsByTagName("img");
    for (var i=0; i<cdImages.length; i++) {
        cdImages[i].onclick = addToTop5;
    }
}

function addToTop5() {
    var imgElement = this;
    var top5Element = document.getElementById("top5");
    var numCDs = 0;

    for (var i=0; i<top5Element.childNodes.length; i++) {
        if (top5Element.childNodes[i].nodeName.toLowerCase() == "img") {
            numCDs = numCDs + 1;
        }
    }
    if (numCDs >= 5) {
        alert("You already have 5 CDs. Click \"Start Over\" to try again.");
        return;
    }

    //adicionar depois de todos os filhos de id top5
    top5Element.appendChild(imgElement);

    // evita que a imagem ja selecionada chame addToTop5
    imgElement.onclick = null;

    // cria um elemento span
    var newSpanElement = document.createElement("span");
    // adiciona uma classe a ele
    newSpanElement.className = "rank";
    // cria um no de string
    var newTextElement = document.createTextNode(numCDs + 1);
    // adiciona o no string como filho de span
    newSpanElement.appendChild(newTextElement);
    top5Element.insertBefore(newSpanElement, imgElement);
}

// adiciona os elementos img de volta a sua ordem original
function startOver() {
    var top5Element = document.getElementById("top5");
    var cdsElement = document.getElementById("cds");
    // continue trabalhando nos elementos filhos até que não haja mais nenhum
    while (top5Element.hasChildNodes()) {
        var firstChild = top5Element.firstChild;
        // se o no for um elemento img, adicione ao topo da página
        if (firstChild.nodeName.toLowerCase() == "img") {
            cdsElement.appendChild(firstChild);
        } else { // se for um elemento span ou qualquer outra coisa remova da página
            top5Element.removeChild(firstChild);
        }
    }
    //adiciona manipuladores de eventos novamente a todos os elementos img, ao qual tinha sido removido
    addOnClickHandlers();
}
