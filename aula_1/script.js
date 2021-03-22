var dolar = ''
var real = ''

function toReal() {
    dolar = parseFloat(document.getElementById("dolarInput").value) * 5.50
    //alert(parseFloat(dolar) * 5.50)
    //alert(document.getElementById("realOutput").innerHTML)
    document.getElementById("realOutput").innerHTML = 'Conversão: ' + dolar + " R$"
}