


//to je za barvne nav gumbe
var btnContainer = document.getElementById("navigation");

var btns = btnContainer.getElementsByClassName("navbutton");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
