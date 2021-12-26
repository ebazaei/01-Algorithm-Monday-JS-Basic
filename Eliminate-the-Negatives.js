//7 Eliminate the Negatives
X = [2,-1,4,-3] 
console.log("Orginal is: " + X);
document.getElementById("box7").innerHTML += ` Orginal is: ${X} <br/>`;

for(var i=0; i< X.length; i++){
    if(X[i] < 0){
        X[i] = 0;
    }
}

//Show in browser console
console.log("Result is: " + X);
//Show in browser console
document.getElementById("box7").innerHTML += ` Result is: ${X} <br/>`;