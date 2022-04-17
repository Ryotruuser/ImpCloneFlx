function expandir(){
	x = document.getElementById("divExpand");
	icon = document.getElementById("expandIcon");
	text = document.getElementById("expandText");
	//x.style.transition = "width 1s";
	//text.style.transition = "display 0.1s"
	x.style.width = "130px";
	icon.style.display = "block";
	text.style.display = "block";
}

function fechar(){
	y = document.getElementById("divExpand");
	icon = document.getElementById("expandIcon");
	text = document.getElementById("expandText");
	//y.style.transition = "width 1s";
	//text.style.transition = "display 0.5s"
	y.style.width = "20px";
	icon.style.display = "none";
	text.style.display = "none";
}