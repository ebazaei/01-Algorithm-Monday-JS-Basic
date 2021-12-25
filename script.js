//Print 1 - 135
for(var i=1;i<=35;i++){
    //Show in browser console
    console.log(i);
    //Show in HTML
    document.getElementById("box1").innerHTML += `Number: ${i} <br/>`;
}

//Print Odd Numbers 1 - 135
for(var i=1;i<=35;i = i+2){
    //Show in browser console
    console.log(i);
    //Show in HTML
    document.getElementById("box2").innerHTML += `Odd Number: ${i} <br/>`;
}

//Print 1 - 135
let sum = 0;
for(var i=0; i<=35 ; i++ ){
    //Show in browser console
    sum = sum + i;
    console.log(`Number is: ${i} Sum: ${sum} `);
    //Show in HTML
    document.getElementById("box3").innerHTML += `Number is: ${i} Sum: ${sum} <br/>`;
}

//Print the elements of an array
X = [1,4,2,12];

for(var i=0; i < X.length ; i++){
    console.log(X[i])
}