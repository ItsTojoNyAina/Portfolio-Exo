var tablinks = document.getElementsByClassName('tablink');
var tabcontents = document.getElementsByClassName('tabcontent');
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("bob");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("activetab");
    }
    event.currentTarget.classList.add("bob");
    document.getElementById(tabname).classList.add("activetab");
}
var side = document.getElementById("side")
function openmenu(){
    side.style.right = "0";
}
function closemenu(){
    side.style.right = "-200px";
}
    