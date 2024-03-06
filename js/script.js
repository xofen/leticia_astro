function myFunction() {
  var x = document.getElementById("menu");
  var y = document.getElementById("burger");
  var z = document.getElementById("main");
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.innerHTML = '<i class="fa-solid fa-plus"></i>';
    z.style.display = "block";
  } else {
    x.style.display = "flex";
    y.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    z.style.display = "none";
  }
}
