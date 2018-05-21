function Calculation(x){
		document.getElementById("text1").value+=x;
}
function result(){
		var x = document.getElementById("text1").value;
		document.getElementById("text1").value = eval(x);
}

function inverse()
{

var y = document.getElementById("text1").value;

	document.getElementById("text1").value = 1 / y ;
}

function squareRoot()
{
var a = document.getElementById("text1").value;
 document.getElementById("text1").value = Math.sqrt(a);

}

function Reset()
{

document.getElementById("text1").value = "";

}