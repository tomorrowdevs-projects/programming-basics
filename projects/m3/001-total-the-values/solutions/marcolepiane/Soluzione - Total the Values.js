let factorial = (n) =>{
    if(n === 1){
        return 1;
    }else if( n == null){
    return 0.0;
    }else{
        return (n * factorial(n - 1 ));
    }
}


console.log(factorial(n));