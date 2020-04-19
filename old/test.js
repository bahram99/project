/*var result=window.confirm("do yo want use another site ??");

  if (result==true)
  {
    document.getElementById(12).innerHTML="welcome to iran )):"
  }
  else
  {
    document.write("you have good chance <br>");
  }*/

  var prom = window.prompt("please enter your name");
  if (prom=="bahram")
  {
  
    window.alert("hello bahram ")
  }
  else if(prom=="") 
  {
    window.alert("enter not null")  
  }
  else {
  window.alert("please enter currnect name")
  }

  
  function radioo()
  {
    for(i=0;i<document.radioform.length;i++)
    {
        if(document.radioform.r[i].checked)
        var res= document.radioform.r[i].value;
        return res;
    }
  }


function pass(inpu)
{   
    var ta = "true";
    st1 = new String();
    st1 = document.radioform.pas.value;
    st2 = new String();
    st2 = document.radioform.confpas.value;

    if (document.radioform.pas.length<3)
    {
      window.alert("password is too short")
      inpu.focus();
      inpu.select();
      ta="false";
      return ta;
    }
    if(st1 != st2)
    {
      window.alert("password dont match")
      ta = "false";
      return ta;
    }
}
function test()
{
  var tt=pass();
  if(tt==false)
  {
    window.alert("password dont match")
  }
}

//------------------------------------------------------

function email()
{
  em = new String();
  em = document.radioform.email.value;
  var ch = true;
  if (em.indexOf(":")>-1)
  {
    //window.alert("invalid : chracter")
    ch=false;
    return ch;
  }
  else if (em.indexOf("@")<0)
  {
     //window.alert("missed @ in email addres")
     ch = false;
     return ch; 
  }
  else
  {
    ch =true;
    return ch;
  }
}

function emaill()
{
  var emm = email();

  if (emm==false)
  {
    window.alert("email not currect")
  }  
}

//==============================================================

function checkage()
{
  var res=true;
  ag=new String();
  ag=document.radioform.age.value;
  
  for(i=0 ; i<ag.length;i++)
  {
    if(ag.charAt(i)>="0" && ag.charAt(i)<="9")
    {
      res=true
      return res;
    }
    else if(ag.length.value>2)
    {
      res=false
      return res;
    }
    if(ag.value=="")
    {
      res=false
      return res;
    }
  }
}

function checkagealert()
{
  var show = checkage();
  if(show==false)
  {
  window.alert("please enter just number")
  }
  else
  {
    window.alert(ag.length)
  }
}


function checkall()
{
  var a1=checkage()
  var a2=email()
  
  //if(a1==true )
  //{
   // window.alert("all in true age ((:")
 // }
  
  if(a2==true )
  {
    window.alert("all in true email ((:")
  }
}




















