//5 Find Max

X = [0,2,-3,-1,8,14];
var max = X[0];
var min = X[0];

for(var i=0; i < X.length ; i++){
    if(max < X[i]){
        var max = X[i];
    } else if(min > X[i]){
        var min = X[i];
    }
}

//Show in browser console
console.log(max);console.log(min);
//Show in HTML
document.getElementById("box5").innerHTML += `Max is: ${max} Min is: ${min} <br/>`;