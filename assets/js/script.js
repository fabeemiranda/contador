// verificar para que serve exatamente essa função.
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


adiciona.addEventListener("click", increment); 
subtrai.addEventListener("click", decrement); 


function decrement() {
    if (currentNumber == 0) {
        document.getElementById("currentNumber").style.color = "red";
        subtrai.removeEventListener("click");  
           
    } else {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        document.getElementById("currentNumber").style.color = "#aaaaaa"
    }    
}

function increment() {
    if (currentNumber == 10) {
        document.getElementById("currentNumber").style.color = "red";
        adiciona.removeEventListener("click");
        
    } else {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        document.getElementById("currentNumber").style.color = "#aaaaaa"
    }
}



    // document.getElementById("adiciona").disabled = true;
