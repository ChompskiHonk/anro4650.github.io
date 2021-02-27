// JavaScript source code
function myFunction(){
	var n = document.getElementById("Topnav");
	if(n.className === "topnav"){
		n.className += "responsive";
	}else{
		n.className = "topnav";
	}
}
