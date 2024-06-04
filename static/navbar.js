
var menu=document.getElementById("menu");
var submenu=document.querySelector(".submenu");
var movebar=document.querySelector(".move-bar");
var page1=document.querySelector(".page1");
var page2=document.querySelector(".page2");
var page3=document.querySelector(".page3");
var page4=document.querySelector(".page4");
var page5=document.querySelector(".page5");
menu.addEventListener('click',function(){
   submenu.classList.toggle('open-menu');
});
page1.addEventListener('click',function(){
    movebar.style.left="4%";
    movebar.style.width="90px";
});
page2.addEventListener('click',function(){
    movebar.style.left="21%";
    movebar.style.width="105px";
});
page3.addEventListener('click',function(){
    movebar.style.left="42%";
    movebar.style.width="85px";
});
page4.addEventListener('click',function(){
    movebar.style.left="62%";
    movebar.style.width="105px";
});
page5.addEventListener('click',function(){
    movebar.style.left="82%";
    movebar.style.width="115px";
});
/* Time */
const der=new Date();
let hours=der.getHours();
let hour=hours;
let minutes=der.getMinutes();
let min=minutes<10? '0'+minutes:minutes;
let ampm=hours>=12? "pm":"am";
document.getElementById("time").innerHTML=hour+":"+min + ampm;







