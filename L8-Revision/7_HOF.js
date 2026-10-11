function callFn(fn){
    fn();
}


function hello(){
    console.log("Hello");
}

function world(){
    console.log("world");
}

callFn(hello);
callFn(world);