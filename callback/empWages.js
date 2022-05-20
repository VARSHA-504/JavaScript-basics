function dailyWage (workingHours,monthlyWage){
    wage = workingHours*50;
    console.log("daily wage of an Employee " + wage);
    monthlyWage(wage);
}

function monthlyWage(wage){
    num = wage*30;
    console.log("Montly wage of an Employee " + num);
    yearlyWage(num);
}

function yearlyWage(wage){
    num = wage*12;
    console.log("yearly wage of an Employee " + num);
}

dailyWage(8,monthlyWage);