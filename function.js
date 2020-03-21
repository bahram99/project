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
window