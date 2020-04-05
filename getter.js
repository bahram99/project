//====================================stmbol
/*let a = Symbol('first');
let b = Symbol.for('last');
 

let foo={
    name : 'bahram',
    [b] : 'farmani'
}

for(let a in foo)
{
    console.log(a.name); // پیمایش نمیشود
}

let c = Symbol.for('last')
console.log(foo[closed])  */
//=============================================iterator(اشاره گر)


/*name = ['pcar','mony','bank']

let nameit =name[Symbol.iterator]();

name[Symbol.iterator]=function(){
    let step =0;
    return{ next(){console.log(this)} }
}
console.log(nameit.next())*/
//=============================================callback

//function sleep(){
//    setTimeout(() => {
//       console.log('hello')
//    }, 5000);
//}

//console.log('salm');
//sleep();
//console.log('khobi')
//==============================================promise
/*let first =  new Promise(function(resolve,reject){
    setTimeout(() => {
        reject('opk');
    }, 4000);
})
console.log('reun 1')
first.then(function(x){console.log(x)});
first.catch(err => console.log(err))
Promise.all([])
first.race()*/

//==========================================map
let func = function(){}
let obj = {}
let list = new Map();
list.set(obj,100);
list.set(obj , 500);


console.log(list.get(obj))







