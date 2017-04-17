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
    var url = "../app/modules/headrushajax/getupdatedBoardSales-ajax.php";
    /*o valor de entrada final não deixa a página travado enquanto espera resposta, assíncrono */
    request.open("GET", url, true);
    /* navegador deve executar sempre que o estado de prontidão da solicitação mudar */
    request.onreadystatechange = updatePage;

    /*significa que não está enviando nenhum dado */
    request.send(null);

}

function updatePage() {
    if (request.readyState == 4) {
        var newTotal = request.responseText;
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

        /* Atualiza o lucro do formulário */
        cash = Math.round(cash * 100) / 100;
        replaceText(cashEl, cash);
    }
}