function random() {
    return Math.random();
  }

  function getshape() {
    start = new Date().getTime();
    var top = random() * 200;
    var left = random() * 800;
    var width = random() * 200 ;
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    if (Math.random() > 0.5) var shape = 0;
    else var shape = 50;
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.backgroundColor =
      "#" + randomColor;
    document.getElementById("shape").style.borderRadius = shape + "%";
    document.getElementById("shape").style.display = "block";
  }
  var start = new Date().getTime();
  document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    end = new Date().getTime();
    var time = end - start;
    document.getElementById("time").innerHTML = " " + time / 1000 + "s";

    setTimeout(getshape, random() * 2000);
  };