//3 Sum of Printed Numbers
let sum = 0;
for(var i=0; i<=35 ; i++ ){
    //Show in browser console
    sum = sum + i;
    console.log(`Number is: ${i} Sum: ${sum} `);
    //Show in HTML
    document.getElementById("box3").innerHTML += `Number is: ${i} Sum: ${sum} <br/>`;
}