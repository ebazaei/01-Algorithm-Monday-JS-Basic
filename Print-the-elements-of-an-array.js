//4 Print the elements of an array
X = [1,4,2,12];

for(var i=0; i < X.length ; i++){
    console.log(X[i])
    //Show in HTML
    document.getElementById("box4").innerHTML += `Result is: ${X[i]} <br/>`;
}
