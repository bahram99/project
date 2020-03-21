document.write("<strong> welcome to crono day )): </strong><br> ")
document.write("<u> salam agha </u><br>")

var a ="bahram"
var b = "salam"
var c=" nomrat barabar ba"
var d = "14"

var t1 = a.fontcolor("blue").strike().fontsize("20pt")
var t2 = c.fontcolor("red").fontsize("15pt")
var t3 = d.fontsize("20pt").fontcolor("gren")
document.write(t1+t2+t3+"<br>")

var arr =["nima","noshin","negar","akbar"]

document.write(arr[1].fontcolor("perpol")+"<br>");

document.write(arr.sort())



function getnumber(number)
{
    switch (number) {
        case 1:
            document.form2.tex.value="https://yjc.ir/"
            break;
        case 2:
            document.form2.tex.value="https://google.com/"
            break;
    }    
}

function check()
{
    if(event.keyCode==13)
    {
        document.form.pass.focus()
    }
}

var a =1;
function hello()
{

    document.counter.value=a++;
    window.setTimeout("hello()",2000)    
}