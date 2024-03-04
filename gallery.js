function filterFun(){
    var blur=document.getElementById("blur").value;
    var bright=document.getElementById("bright").value;
    var cont=document.getElementById("cont").value;
    var hue=document.getElementById("hue").value;
    var gray=document.getElementById("gray").value;
    var satu=document.getElementById("satu").value;
    var opa=document.getElementById("opa").value;
    var inv=document.getElementById("inv").value;
    var sep=document.getElementById("sep").value;
    document.getElementById("img").style.filter=`blur(${blur}px) 
    brightness(${bright}%)
    contrast(${cont}%)
    grayscale(${gray}%)
    hue-rotate(${hue}deg)
    invert(${inv}%)
    opacity(${opa}%)
    saturate(${satu}%)
    sepia(${sep}%)`
}
function transFun(){
    var rotatex=document.getElementById("rotatex").value;
    var rotatey=document.getElementById("rotatey").value;
    var rotatez=document.getElementById("rotatez").value;
    var scax=document.getElementById("scax").value;
    var scay=document.getElementById("scay").value;
    var skewx=document.getElementById("skewx").value;
    var skewy=document.getElementById("skewy").value;

    var transx=document.getElementById("transx").value;
    var transy=document.getElementById("transy").value;

    document.getElementById("img").style.transform=`translateX(${transx}%) 
    translatey(${transy}%)
    scaleX(${scax}) scaleY(${scay}) 
    rotateX(${rotatex}deg) 
    rotateY(${rotatey}deg) 
    rotateZ(${rotatez}deg) 
    skewX(${skewx}deg) 
    skewY(${skewy}deg)`
}   