var request = null;

try {
    request = new XMLHttpRequest();
} catch (trymicrosoft) {
    try {
        request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (othermicrosoft) {
        try {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (failed) {
            request = null;
        }
    }
}

if (request == null) alert("Error creating request object!");

document.getElementById("phone").addEventListener("change", getCustomerInfo);
document.getElementById("form-solicitation").addEventListener("submit", getSolicitation);

function getSolicitation(){
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var order = document.getElementById("order").value;

    var url = "app/modules/ajaxRequestsAddress/placeOrder.php";

    request.onreadystatechange = updatePageSolicitation;

    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("phone="+phone+"&address="+address+"&order="+order)
}

function getCustomerInfo() {
    var phone = document.getElementById("phone").value;
    var url = "app/modules/ajaxRequestsAddress/lookupCustomer.php?phone=" + encodeURIComponent(phone);
    request.open("GET", url, true);
    // informa ao navegador que a função deve ser executada quando o estado de protidão da solictição mudar
    request.onreadystatechange = updatePage;
    request.send(null);
}

function updatePage() {
    // se o servidor terminou a requisição o stado é igual a 4
    if (request.readyState == 4 && request.status == 200) {
        /* armazena a resposta do servidor */
        var customerAddress = request.responseText;

        /* atualiza o formulário */
        document.getElementById("address").value =
            customerAddress;
    }else{
        console.log("Erro" + request.status)
    }
}

function updatePageSolicitation() {
    // se o servidor terminou a requisição o stado é igual a 4
    if (request.readyState == 4 && request.status == 200) {
        /* armazena a resposta do servidor */
        var customerAddress = request.responseText;

        /* atualiza o formulário */
        document.getElementById("solicitation").value = customerAddress;
    }else{
        console.log("Erro" + request.status)
    }
}