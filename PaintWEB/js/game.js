var cnv = document.getElementById("canvas");
var ctx = cnv.getContext("2d");
var slider = document.getElementById("range");
var pickColor = document.getElementById("nowUseColor");
var thickText = document.getElementById("thicknessText");
var thickDiv =  document.getElementById("thickness");

var color = "green";
var thickness = 1;

var isMouseDown =false;
cnv.width = window.innerWidth-80;
cnv.height = window.innerHeight-200;
//--- draw ---
cnv.addEventListener("mousedown", function() {
    isMouseDown = true;
});

cnv.addEventListener("mouseup", function(){
    isMouseDown = false;
    ctx.beginPath();
});
//--- /draw ---
//--- change thickness ---
slider.oninput = function() {
    thickness = this.value;
    thickText.textContent = thickness + "px";
    thickDiv.style.height = thickness + "px";
}
//--- /change thickness ---
//--- clear wiewport ---
function clear(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.beginPath();
    ctx.fillStyle = "white";
};
//--- /clear wiewport ---
//--- quik color ---
function toBlack(){
    color = "black";
    pickColor.style.backgroundColor = color;
}
function toGreen() {
    color = "green";
    pickColor.style.backgroundColor = color;
}
function toRed() {
    color ="red";
    pickColor.style.backgroundColor = color;
}
function toBlue() {
    color = "blue";
    pickColor.style.backgroundColor = color;
}
//--- /quik color ---
//--- pencil ---
function toPencil(){
    thickness = 1;
    slider.value = thickness;
    thickText.textContent = thickness + "px";
    color = "green";
    pickColor.style.backgroundColor = color;
    cnv.style.cursor = "default";
}
//--- /pencil ---
//--- rubber ---
function toErase() {
    color = "white";
    pickColor.style.backgroundColor = color;
    thickness = 50;
    slider.value = thickness;
    thickText.textContent = thickness + "px";
    cnv.style.cursor = "grab";
}
//--- /rubber ---
//--- save to image ---
function getImage(canvas){
    var imageData = canvas.toDataURL();
    var image = new Image();
    image.src = imageData;
    return image;
}
function toImage() {
    var image = getImage(document.getElementById("canvas"));
    var link = document.createElement("a");
 
    link.setAttribute("href", image.src);
    link.setAttribute("download", "canvasImage");
    link.click();
}
//--- /save to image ---
//--- clean ---
function toClean(){
    clear();
}
//--- /clean ---
//--- randomColor ---
function toNextColor(){
    color = '#' + Math.floor(Math.random()*16777215).toString(16);
    pickColor.style.backgroundColor = color;
}
//--- /randomColor ---
//--- paste screen ---
/*
function toScreen() {
    html2canvas(document.getElementById("content")).then(function(canvas) {
    var my_screen = canvas;
    document.getElementById("result").appendChild(my_screen);
}
*/
//--- /paste screen ---
cnv.addEventListener("mousemove", function(e) {
    if(isMouseDown){
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness * 2;
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(e.clientX, e.clientY, thickness , 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

});

