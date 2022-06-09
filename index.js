const receivesAFunction =callback => callback();
//const returnsANamedFunction = () => function myFunction(){};
function returnsANamedFunction(){
    return function myFunction(){};
}
function returnsAnAnonymousFunction(){
    return function(){};
}
