//fibonacci por medio de un loop 
var looping = function(n) {
    var a = 0, b = 1, fibo = 1;
    for(var i = 2; i <= n; i++) {
        fibo = a + b;
        a = b;
        b = fibo;
    }
    return fibo;
    console.log(fibo)
};
