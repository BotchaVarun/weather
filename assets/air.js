

const h=new Date();
let day1=h.getDate();
let month1=h.getMonth();
document.getElementById("aqp2").innerHTML=day1+"/"+month1;

let circularProgress1= document.querySelector(".circular-progress1"),
progressValue1= document.querySelector(".progress-value1");
let aqline=document.getElementById("aqline"),
co=document.getElementById("aq3");
let progressStartValue1= 0,   
progressEndValue1=  document.querySelector(".progress-value1").innerHTML;      
let speed1= 10;

let progress1= setInterval(() => {
progressStartValue1++;
progressValue1.textContent = `${progressStartValue1}AQI`
circularProgress1.style.background = `conic-gradient(#7d2ae8 ${progressStartValue1*1.6}deg, #ededed 0deg)`

if(progressStartValue1>=250)
{
progressValue1.style.color="#7d2ae8";
circularProgress1.style.background = `conic-gradient(#7d2ae8 ${progressStartValue1*1.6}deg, #ededed 0deg)`
aqline.style.backgroundColor="#7d2ae8";
document.getElementById("aqp3").innerHTML="Dangerous";
}
else if(progressStartValue1>=150&&progressStartValue1<250)
{   progressValue1.style.color="#7d2ae8";
    circularProgress1.style.background = `conic-gradient(#7d2ae8 ${progressStartValue1*1.6}deg, #ededed 0deg)`
    aqline.style.backgroundColor="#7d2ae8";
    document.getElementById("aqp3").innerHTML=" Very Unhealthy";
}
else if(progressStartValue1>=100&&progressStartValue1<150)
{   progressValue1.style.color="#e7b3ff";
    circularProgress1.style.background = `conic-gradient(#e7b3ff ${progressStartValue1*1.6}deg, #ededed 0deg)`
    aqline.style.backgroundColor="#e7b3ff";
    document.getElementById("aqp3").innerHTML="Unhealthy";
}
else if(progressStartValue1>=50&&progressStartValue1<100)
{   progressValue1.style.color="#eefd1c";
    circularProgress1.style.background = `conic-gradient(#eefd1c ${progressStartValue1*1.6}deg, #ededed 0deg)`
    aqline.style.backgroundColor="#eefd1c";
    document.getElementById("aqp3").innerHTML="Poor";
}
else if(progressStartValue1>=20&&progressStartValue1<50)
{   progressValue1.style.color="#1aff34";
    circularProgress1.style.background = `conic-gradient(#1aff34 ${progressStartValue1*1.6}deg, #ededed 0deg)`
    aqline.style.backgroundColor="#1aff34";
    document.getElementById("aqp3").innerHTML="Fair";
}   
else
{   progressValue1.style.color="#009912";
    circularProgress1.style.background = `conic-gradient(#009912 ${progressStartValue1*1.6}deg, #ededed 0deg)`
    aqline.style.backgroundColor="#009912";
    document.getElementById("aq3").innerHTML="Excellent";
}
if(progressStartValue1== progressEndValue1){
    clearInterval(progress1);
}    
}, speed1);


const currentpollutant=document.querySelector('#currentpollutant');
const toggleaq1=document.getElementById("aqhead1");
const toggleaq2=document.getElementById("aqhead2");
const aqscale=document.querySelector("#aqscale");
const cursor=document.getElementById("cursor");
toggleaq1.addEventListener("click",function(){
     currentpollutant.style.visibility="visible";
     aqscale.style.visibility="hidden";
     cursor.style.left="25px";
     toggleaq1.style.color="black";
     toggleaq2.style.color="#606060";
});
toggleaq2.addEventListener("click",function(){
    aqscale.style.visibility="visible";
    currentpollutant.style.visibility="hidden";
    cursor.style.left="210px";
    toggleaq2.style.color="black";
    toggleaq1.style.color="#606060";
});
