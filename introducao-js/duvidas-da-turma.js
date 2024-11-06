function x() {
    return function(){
        return 'hello world';
    }
}

console.log( x()() );
