canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
lastTouchX="";
lastTouchY="";
pencolour="red";
penwidth=3;

if(screen.width<992){
    canvas.width=screen.width-70;
    canvas.height=screen.height-300;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
    lastTouchX=e.touches[0].clientX-canvas.offsetLeft;
    lastTouchY=e.touches[0].clientY-canvas.offsetTop;
pencolour=document.getElementById("pen_colour").value;
penwidth=document.getElementById("line_width").value;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
    current_TouchX=e.touches[0].clientX-canvas.offsetLeft;
    current_TouchY=e.touches[0].clientY-canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=pencolour;
        ctx.lineWidth= penwidth;
        ctx.moveTo(lastTouchX ,lastTouchY);
        ctx.lineTo(current_TouchX ,current_TouchY);
        ctx.stroke();
    
    lastTouchX=current_TouchX;
    lastTouchY=current_TouchY;
}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
lastmouseX="";
lastmouseY="";
mousevalue="";
pencolour="red";
penwidth=3;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mousevalue="md";
    console.log("mousedown");
pencolour=document.getElementById("pen_colour").value;
penwidth=document.getElementById("line_width").value;
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mousevalue="mu";
    console.log("mouseup");
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mousevalue="ml";
    console.log("mouseleave");
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    current_mouseX=e.clientX-canvas.offsetLeft;
    current_mouseY=e.clientY-canvas.offsetTop;
    if(mousevalue=="md"){
        ctx.beginPath();
        ctx.strokeStyle=pencolour;
        ctx.lineWidth= penwidth;
        ctx.moveTo(lastmouseX ,lastmouseY);
        ctx.lineTo(current_mouseX ,current_mouseY);
        ctx.stroke();
    }
    lastmouseX=current_mouseX;
    lastmouseY=current_mouseY;
}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}