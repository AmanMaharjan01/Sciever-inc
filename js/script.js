function inworks()
{
	document.querySelector('.works').style.display = "block";
}

function outworks()
{
	document.querySelector('.works').style.display = "none";
}

function insoln()
{
	document.querySelector('#support').style.display = "block";
}

function outsoln()
{
	document.querySelector('#support').style.display = "none";
}

function showsidebar()
{
	document.querySelector(".sidebar").style.flex = "1";
	document.querySelector(".sidebar").style.width = "230px";
	document.querySelector(".sidebar").style.transition = "0.1s";
	document.querySelector("#ham-menu").style.display = "none";

}

function hidesidebar()
{  
	document.querySelector(".sidebar").style.width = "0px";
	document.querySelector(".sidebar").style.flex = "0";
	document.querySelector("#ham-menu").style.display = "inline";
}
