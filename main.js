window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = new Image();
    img.src = "Assets/images/DJI_0055.jpg"
    img.onload = function (){
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, c.width, c.height);
    }
    
  };