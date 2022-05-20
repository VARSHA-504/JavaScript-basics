let p = new Promise((resolve, reject) =>{
    let a = 50
    if(a >= 35){
        resolve("passed")
    }
    else{
        reject("Failed")
    }
})

p.then((result) => {
    console.log("the student has " + result );
}).catch((result) =>{
    console.log("the student has " + result);
})