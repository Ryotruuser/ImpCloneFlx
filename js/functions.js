function myFunction() {
    var x = document.getElementById("accountMenu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function moreInfo (){
  var sinopse = document.getElementById("sinopse");
  if (sinopse.style.display === "none"){
    sinopse.style.display = "block";
    sinopse.style.transition = "all 7s";
  } else{
    sinopse.style.display = "none";
  }
};

function showTrailer(){
  var trailer = document.getElementById("trailer");
  if(trailer.style.display ==="none"){
    trailer.style.display = "block";
  }else{
    trailer.style.display = "none";
  }

}