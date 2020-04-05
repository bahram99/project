class car {
    constructor(make,model){
        this.make=make;
        this.model=model;
    }
}

class car1 extends car{
    constructor(make,model,color){
        super(make,model)
        this.color=color;
    }
}

let car2 = new car1('ford','z4','red')
console.log(car2)



class advance extends Array{
    find(value){
        let val = this.fi(a=> a===value);
        if(val.length==0){
            return 'errore'
        }
        else
        {
            return val[0]
        }
    }
}

let list = new advance('ali','amir')
console.log(list.find('ali'))
