window.onload=function(){
	var list=document.getElementById("listHead");
	if(localStorage.list){
		list.style.backgroundColor=localStorage.list;
	}
	ChangeYellow=function(){
	
		localStorage.list="yellow";
		list.style.backgroundColor=localStorage.list;
	}
	ChangeBlue=function(){
		
		localStorage.list="blue";
		list.style.backgroundColor=localStorage.list;
		console.log("ss");
	}
}