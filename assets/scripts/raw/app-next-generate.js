var request = null;
function createRequest() {
    try {
        request = new XMLHttpRequest();
    } catch(trymicosoft) {
        try{
            request = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (othermicrosoft){
            try{
                request = ActiveXObject("Microsoft.XMLHTTP")
            }catch (failed){
                request = null;
            }

        }
    }
    if(request == null){
        console.log("Erro ao criar um request object!")
    }
}

function getBoardsSold() {
    createRequest();
    var url = "/app/modules/appNextGererate/getUpdateSales.php";
    url = url + "?dummy=" + new Date().getTime();
    /*o valor de entrada final não deixa a página travado enquanto espera resposta, assíncrono */
    request.open("GET", url, true);
    /* navegador deve executar sempre que o estado de prontidão da solicitação mudar */
    request.onreadystatechange = updatePage;

    /*significa que não está enviando nenhum dado */
    request.send(null);

}

function updatePage() {
    if (request.readyState == 4) { /* evita que com qualquer valor os dados seja alterados*/
        var newTotal = request.responseText; // retorna uma string da consulta do servidor
        var boardsSoldEl = document.getElementById("boards-sold");
        var cashEl = document.getElementById("cash");
        replaceText(boardsSoldEl, newTotal);

        /* calcula o lucro obtido*/
        var priceEl = document.getElementById("price");
        /* assegura que o total em dinheiro tenha apesnas duas casas decimais*/
        var price = getText(priceEl);
        var costEl = document.getElementById("cost");
        var cost = getText(costEl);

        var cashPerBoard = price - cost;
        var cash = cashPerBoard * newTotal;

        /* Atualiza o lucro do formulário , pog para arrendodar para apenas duas casas decimais*/
        cash = Math.round(cash * 100) / 100;
        replaceText(cashEl, cash);
    }
}

window.onload = function() {
    document.getElementById('update-value').onclick = getBoardsSold;
};
