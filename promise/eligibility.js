let E = new Promise((resolve, reject) =>{
    let age = 16
    if(age >= 18){
        resolve("Eligible to vote")
    }
    else{
        reject("Not eligible to vote")
    }
})

E.then((result) => {
    console.log( result );
}).catch((result) =>{
    console.log( result);
})