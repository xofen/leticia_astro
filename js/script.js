function myFunction() {
  var x = document.getElementById("menu");
  var y = document.getElementById("burger");
  var z = document.getElementById("main");
  var f = document.getElementById("footer");
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.innerHTML = '<i class="fa-solid fa-plus"></i>';
    z.style.display = "block";
    f.style.display = "flex";
  } else {
    x.style.display = "flex";
    y.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    z.style.display = "none";
    f.style.display = "none";
  }
}

var width, height;
window.onresize = window.onload = function() {
    width = this.innerWidth;
    height = this.innerHeight;

    var detailsElements = document.getElementsByTagName("details");

    for (var i = 0; i < detailsElements.length; i++) {
        if (width > 1000) {
            detailsElements[i].setAttribute("open", "");
        } else {
            detailsElements[i].removeAttribute("open");
        }
    }
}
