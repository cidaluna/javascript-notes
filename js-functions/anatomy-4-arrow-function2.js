// Anonymous function
(function (a,b,c){
    console.log(`Result: ${a+b+c}`)
})(1,2,3);

(function(){
    let x = 300
    console.log(x)
})();

(()=> {
    console.log('arrow 1')
})();

(()=> console.log('arrow 2'))();
