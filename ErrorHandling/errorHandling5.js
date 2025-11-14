function handlerReferenceError(){
    try {
        console.log(some)
    }
    catch(err){
        if (err instanceof ReferenceError){
            console.log ("Reference error: variable is not defined")
        }
        else
            console.log(`Other error ${err}`)
    }
}

handlerReferenceError()