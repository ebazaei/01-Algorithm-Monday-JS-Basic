//8 Number to String
X = [1,-4,0,-1] 
console.log("Orginal is: " + X);
document.getElementById("box8").innerHTML += ` Orginal is: ${X} <br/>`;

for(var i=0; i< X.length; i++){
    if(X[i] < 0){
        X[i] = "Turing";
    }
}

//Show in browser console
console.log("Result is: " + X);
//Show in browser console
document.getElementById("box8").innerHTML += ` Result is: ${X} <br/>`;