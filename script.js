//1 Print 1 - 135
for(var i=1;i<=35;i++){
    //Show in browser console
    console.log(i);
    //Show in HTML
    document.getElementById("box1").innerHTML += `Number: ${i} <br/>`;
}

//2 Print Odd Numbers 1 - 135
for(var i=1;i<=35;i = i+2){
    //Show in browser console
    console.log(i);
    //Show in HTML
    document.getElementById("box2").innerHTML += `Odd Number: ${i} <br/>`;
}

//3 Print 1 - 135
let sum = 0;
for(var i=0; i<=35 ; i++ ){
    //Show in browser console
    sum = sum + i;
    console.log(`Number is: ${i} Sum: ${sum} `);
    //Show in HTML
    document.getElementById("box3").innerHTML += `Number is: ${i} Sum: ${sum} <br/>`;
}

//4 Print the elements of an array
X = [1,4,2,12];

for(var i=0; i < X.length ; i++){
    console.log(X[i])
    //Show in HTML
    document.getElementById("box4").innerHTML += `Result is: ${X[i]} <br/>`;
}


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