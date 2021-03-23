const dolarToReal  = 5.51;
const dolarToLibra = 0.72;
const dolarToEuro  = 0.84;
const dolarToBtc   = 0.000018;

const realToDolar  = 0.18;
const realToLibra  = 0.13;
const realToEuro   = 0.15;
const realToBtc    = 0.0000033;

const libraToDolar = 1.39;
const libraToEuro  = 1.16;
const libraToReal  = 7.64;
const libraToBtc   = 0.000025;

const euroToDolar  = 1.19;
const euroToLibra  = 0.86;
const euroToReal   = 6.58;
const euroToBtc    = 0.000022;

const btcToDolar   = 55161.00;
const btcToEuro    = 46190.76;
const btcToLibra   = 39784.87;
const btcToReal    = 303788.18;

function conversion() {
    
    var cash         = parseFloat(document.getElementById("moneyInput").value).toFixed(2)
    var firstOption  = document.getElementById("from-currency-cbox").value
    var secondOption = document.getElementById("to-currency-cbox").value

    console.log("Cash: " + cash)
    if (firstOption !== "" && secondOption !== "" && cash !== "NaN") {

        var final_money;
        switch(firstOption){
            case 'dol':
                console.log("oi") 
                final_money = dolarTo(secondOption, cash);
                break;
            
            case 'eu': 
                final_money = euroTo(secondOption, cash);
                break;
            
            case 'lb': 
                final_money = libraTo(secondOption, cash);
                break;
                
            case 'real': 
                final_money = realTo(secondOption, cash);
                break;

            case 'btc': 
                final_money = bitcoinTo(secondOption, cash);
                break;

            default: return;
        }

        document.getElementById("conversionOutput").innerHTML = final_money
    }
    else {
        document.getElementById("conversionOutput").innerHTML = ''
    }

}

function dolarTo(secondOption, cash){

    var final_money;
    console.log(cash)
    switch(secondOption){
        
        case 'dol': 
            final_money = cash * 1;
            symbol = ' $'
            break;
            
        case 'eu':
            console.log("oi 2")
            final_money = cash * dolarToEuro;
            symbol = ' €'
            break;
        
        case 'lb': 
            final_money = cash * dolarToLibra;
            symbol = " £"
            break;
            
        case 'real': 
            final_money = cash * dolarToReal;
            symbol = " R$"
            break;

        case 'btc': 
            final_money = cash * dolarToBtc;
            symbol = " BTC"
            break;

        default: return;
    }

    
    return 'Patrimônio em dólar: ' + final_money + symbol
}

function realTo(secondOption, cash){

    var final_money;

    switch(secondOption){
        
        case 'dol': 
            final_money = cash * realToDolar;
            symbol = ' $'
            break;
            
        case 'eu': 
            final_money = cash * realToEuro;
            symbol = ' €'
            break;
        
        case 'lb': 
            final_money = cash * realToLibra;
            symbol = " £"
            break;
            
        case 'real': 
            final_money = cash * 1;
            symbol = " R$"
            break;

        case 'btc': 
            final_money = cash * realToBtc;
            symbol = " BTC"
            break;

        default: return;
    }

    return 'Patrimônio em real: ' + final_money + symbol
}

function euroTo(secondOption, cash){

    var final_money;

    switch(secondOption){
        
        case 'dol': 
            final_money = cash * euroToDolar;
            symbol = ' $'
            break;
            
        case 'eu': 
            final_money = cash * 1;
            symbol = ' €'
            break;
        
        case 'lb': 
            final_money = cash * euroToLibra;
            symbol = " £"
            break;
            
        case 'real': 
            final_money = cash * euroToReal;
            symbol = " R$"
            break;

        case 'btc': 
            final_money = cash * euroToBtc;
            symbol = " BTC"
            break;

        default: return;
    }

    return 'Patrimônio em euro: ' + final_money + symbol
}

function libraTo(secondOption, cash){

    var final_money;

    switch(secondOption){
        
        case 'dol': 
            final_money = cash * libraToDolar;
            symbol = ' $'
            break;
            
        case 'eu': 
            final_money = cash * libraToEuro;
            symbol = ' €'
            break;
        
        case 'lb': 
            final_money = cash * 1;
            symbol = " £"
            break;
            
        case 'real': 
            final_money = cash * libraToReal;
            symbol = " R$"
            break;

        case 'btc': 
            final_money = cash * libraToBtc;
            symbol = " BTC"
            break;

        default: return;
    }
    
    return 'Patrimônio em libra: ' + final_money + symbol
}

function bitcoinTo(secondOption, cash){

    var final_money;

    switch(secondOption){
        
        case 'dol': 
            final_money = cash * btcToDolar;
            symbol = ' $'
            break;
            
        case 'eu': 
            final_money = cash * btcToEuro;
            symbol = ' €'
            break;
        
        case 'lb': 
            final_money = cash * btcToLibra;
            symbol = " £"
            break;
            
        case 'real': 
            final_money = cash * btcToReal;
            symbol = " R$"
            break;

        case 'btc': 
            final_money = cash * 1;
            symbol = " BTC"
            break;

        default: return;
    }

    return 'Patrimônio em bitcoin: ' + final_money + symbol
}