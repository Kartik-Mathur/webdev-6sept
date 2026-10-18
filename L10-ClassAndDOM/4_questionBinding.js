function hello(){
    console.log("Binding in hello", this)
    let world = ()=>{
        console.log("Binding in world", this)
    }
    world();
}

let obj = {
    name : "CB"
}

hello.apply(obj);
// hello.call(obj);
// hello();

