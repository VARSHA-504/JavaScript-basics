function printPercentage(num) {
    console.log("Percentage of  student : " + num);
}

function totalMarks(maths,science,english,printPercentage) {
    sum = maths+science+english
    num = (sum * 100 ) / 300;
    printPercentage(num);
}

totalMarks(60,70,80,printPercentage);
