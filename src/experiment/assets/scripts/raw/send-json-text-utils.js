/*recebe um elemento e substitui o texto dele*/
function replaceText(el, text) {
    if (el != null) {
        clearText(el);
        var newNode = document.createTextNode(text);
        el.appendChild(newNode);
    }
}
// removeá todos os nós filhos do elemento que você passar no parâmetro
function clearText(el) {
    if (el != null) {
        if (el.childNodes) {
            for (var i = 0; i < el.childNodes.length; i++) {
                var childNode = el.childNodes[i];
                el.removeChild(childNode);
            }
        }
    }
}

//retorna o texto do elemento passado por parâmentro
function getText(el) {
    var text = "";
    if (el != null) {
        if (el.childNodes) {
            for (var i = 0; i < el.childNodes.length; i++) {
                var childNode = el.childNodes[i];
                if (childNode.nodeValue != null) {
                    text = text + childNode.nodeValue;
                }
            }
        }
    }
    return text;
}
