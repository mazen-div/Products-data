function transe (){
var pname1 = document.getElementById('p1name').value;
var op1 = document.getElementById('p1price').value;
var np1 = document.getElementById('p1offer').value;

var pname2 = document.getElementById('p2name').value;
var op2 = document.getElementById('p2price').value;
var np2 = document.getElementById('p2offer').value;

var pname3 = document.getElementById('p3name').value;
var op3 = document.getElementById('p3price').value;
var np3 = document.getElementById('p3offer').value;

var pname4 = document.getElementById('p4name').value;
var op4 = document.getElementById('p4price').value;
var np4 = document.getElementById('p4offer').value;

localStorage.setItem("pname1",pname1);
localStorage.setItem("op1",op1);
localStorage.setItem("np1",np1);

localStorage.setItem("pname2",pname2);
localStorage.setItem("op2",op2);
localStorage.setItem("np2",np2);

localStorage.setItem("pname3",pname3);
localStorage.setItem("op3",op3);
localStorage.setItem("np3",np3);

localStorage.setItem("pname4",pname4);
localStorage.setItem("op4",op4);
localStorage.setItem("np4",np4);
return false; 
}
{
    document.getElementById("p1name").innerHTML=localStorage.getItem("pname1");
    document.getElementById("p1oldprice").innerHTML=localStorage.getItem("op1");
    document.getElementById("p1newprice").innerHTML=localStorage.getItem("np1");
}

{
    document.getElementById("p2name").innerHTML=localStorage.getItem("pname2");
    document.getElementById("p2oldprice").innerHTML=localStorage.getItem("op2");
    document.getElementById("p2newprice").innerHTML=localStorage.getItem("np2");
}
{
    document.getElementById("p3name").innerHTML=localStorage.getItem("pname3");
    document.getElementById("p3oldprice").innerHTML=localStorage.getItem("op3");
    document.getElementById("p3newprice").innerHTML=localStorage.getItem("np3");
}{
    document.getElementById("p4name").innerHTML=localStorage.getItem("pname4");
    document.getElementById("p4oldprice").innerHTML=localStorage.getItem("op4");
    document.getElementById("p4newprice").innerHTML=localStorage.getItem("np4");
}