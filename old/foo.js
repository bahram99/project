//let sum =(a,b) => ((a+b)*2);

//console.log(sum(2,2))

//function  aa(a,b) {
  //  console.log(aa.arguments[1])
//}

/*function sum (...c){
    console.log(...c);
//    return c.reduce((a,b) =>{return a+b}) 
    return c.reduce(function(a,b){return a+b})
}
console.log(sum(3,2,5,1,3))
*/
/*
function sum(...c){
    return c.reduce(function(a,b){return a+b})}
let list = [1,2,3,9,4,5,6,6,7]
//console.log(...list)

for (a of list){
 //   console.log(a);
}

let [a1 , , ,a2, , a3]=list;
console.log(txt)

let txt = `welcome to 
new 
viros world` */

/*let req = new XMLHttpRequest();
req.open('GET','https://jsonplaceholder.typicode.com/users');

req.addEventListener('load' ,function () {
    if(this.readyState==XMLHttpRequest.DONE){
        if(this.status==200)
        {
            console.log(this.responseType)
        }
    
        else if(this.status==404)
        {
        console.log('erro')
        }
    }
});
req.send();*/


/*let post = new XMLHttpRequest();
let data ={id : 1 , name : 'bahram'};

post.open('POST','https://jsonplaceholder.typicode.com/users');
post.setRequestHeader('Content-type' , "application/json; charset=UTF-8");

post.addEventListener('load',function(){
    if(this.readyState==XMLHttpRequest.DONE){
        if(this.status==201){
            console.log('ok')
        }
        else{ console.log('error')}
    }
})

post.send(JSON.stringify(data));


var text = '{ "employees" : [' +'{ "firstName":"John" , "lastName":"Doe" },' +'{ "firstName":"Anna" , "lastName":"Smith" },' +'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
let objj = JSON.parse(text);
console.log(objj)

let a =[1,2,3,4]
for (const x of a) {
    console.log(x)
}*/

/*class car {
    constructor(id,name){
        this.id=id;
        this.name=name
    }
}
let rt = {id : 1 , name : 'name'}

let show =Reflect.construct(car,[2,'ali']);

class car2 extends car{
    constructor(last,...car){
        super(car)
        this.last = last;
    }
    static test(){
        return 'kk';
    }
    static go(){
        return this.test()
    }
}

let car22 = Reflect.construct(car2,[4,'ahmad','nori'])
let car1 = new car(3,'rt')


let car3 = new car(5 , 'ferarri');

let handeler = {
    salam(a,b){
        return b in a ? a[b] : 'error'
    }
}

let prox = new Proxy(car3,handeler)

console.log(car2.go())

class arr extends Array{
    find(value){
        let y = this.filter(a => a ==value)
        return y[0]
    }
}
let ar = new arr('ab' , 'cd' ,'ef')
console.log(ar.join('   '))

console.log(ar.find('ab'))*/



function run(){
    if(document.getElementsByClassName('.qw') !=null){
        var b = document.getElementsByClassName('.qw').value;
        console.log(b);   
    }
    else console.log('erro');
    
}


