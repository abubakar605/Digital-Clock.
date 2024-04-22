function displayTime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    document.getElementById("clock").innerHTML = h +":" + m + ":" + s;
}
setInterval(displayTime,1000)