class streamsAPI{
    constructor(){
        this.subscriptions = [];
    }
    subscribe(fn){
        this.subscriptions.push(fn);
    }
    push(val){
        this.subscriptions.forEach(method => {
            method(val);
        })
    }
}

const z = new Stream();
z.subscribe((value) => console.log(value));
z.subscribe((value) => console.log(value * 2));
z.subscribe((value) => console.log(value * 3));
z.push(2);