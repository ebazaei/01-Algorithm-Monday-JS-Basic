//6 Get Average
X = [2,1,3];
var boxNm = 0;

for(var i=0; i < X.length ; i++){
    boxNm = boxNm + X[i];
    console.log(boxNm)
}

var average = boxNm / X.length;
console.log(average)
document.getElementById("box6").innerHTML += `Average is: ${average} <br/>`;