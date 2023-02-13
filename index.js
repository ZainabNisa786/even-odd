
function test(){
    let num= Number(document.getElementById("num-el").value)

if (num %2 == 0){
    
    document.getElementById("mess").textContent= num + " is even number"
}
else{
    document.getElementById("mess").textContent= num + " is odd number"
}
}

function reset(){
    num=0
    document.getElementById("num-el").value = 0
    document.getElementById("mess").textContent="guess even odd"
}