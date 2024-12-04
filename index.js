function receivesAFunction(callback){
    callback()
}
function returnsANamedFunction(){
    return function name(){
        console.log("Jess")
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log("blank")
    }
}