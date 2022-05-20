let num = 4;
function square(printSquare){
    sq = num*num;
    printSquare(sq);
}

function printSquare(num){
    console.log("square of the number : "+ num);
}

square(printSquare);