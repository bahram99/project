function nam(name , age , last)
{
    document.write("<TR><TD>",name,"</TD><TD>",age,"</TD><TD>",last,"</TD></TR>")
}

//many input for argument

var arr =["ali","omid","saman","nima"]

function x()
{
    for(var i=0;i<arr.length;i++)
    {
        document.write(arr[i]+"<br>");
     
    }
    document.write(arr[arr.length-1])     

    //create FORM   
}
//===================================================
let esm = (first,last) =>
{   return{
        first:first,
        last:last,
        fullName : function() {
            return this.first + ' ' + this.last
}
};
};
var ss = esm('ali','testi');
console.log(ss.fullName());