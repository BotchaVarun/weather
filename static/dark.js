
/* circular progress*/
let condition = document.getElementById("info2");
let condition2=document.getElementById("airp3")
let condition3=document.getElementById("line")
let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");
let progressStartValue = 1,    
progressEndValue = document.querySelector(".progress-value").innerHTML;  
speed = 10;
let progress = setInterval(() => {
progressStartValue++;
progressValue.textContent = `${progressStartValue} AQI`;
if(progressStartValue>=250)
{
circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue*1.6}deg, #ededed 0deg)`;
progressValue.style.color="#7d2ae8";
condition.style.color="#7d2ae8";
document.getElementById("info2").innerHTML="Dangerous";
condition2.style.color="#7d2ae8";
document.getElementById("airp3").innerHTML="Dangerous";
condition3.style.backgroundColor="#7d2ae8";
}
else if(progressStartValue>=150&&progressStartValue<250)
{
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue*1.6}deg, #ededed 0deg)`;
    progressValue.style.color="#7d2ae8";
    condition.style.color="#7d2ae8";
    document.getElementById("info2").innerHTML="Very Unhealthy";
    condition2.style.color="#7d2ae8";
    document.getElementById("airp3").innerHTML="Very Unhealthy";
    condition3.style.backgroundColor="#7d2ae8";
}
else if(progressStartValue>=100&&progressStartValue<150)
{
    circularProgress.style.background = `conic-gradient(#e7b3ff ${progressStartValue*1.6}deg, #ededed 0deg)`;
    progressValue.style.color="#e7b3ff";
    condition.style.color="#e7b3ff";
    document.getElementById("info2").innerHTML="Unhealthy";
    condition2.style.color="#e7b3ff";
    document.getElementById("airp3").innerHTML="Unhealthy";
    condition3.style.backgroundColor="#e7b3ff";
}
else if(progressStartValue>=50&&progressStartValue<100)
{
    circularProgress.style.background = `conic-gradient(#eefd1c ${progressStartValue*1.6}deg, #ededed 0deg)`;
    progressValue.style.color="#eefd1c";
    condition.style.color="#eefd1c";
    document.getElementById("info2").innerHTML="Poor";
    condition2.style.color="#eefd1c";
    document.getElementById("airp3").innerHTML="Poor";
    condition3.style.backgroundColor="#eefd1c";
    
}
else if(progressStartValue>=20&&progressStartValue<50)
{
    circularProgress.style.background = `conic-gradient(#1aff34 ${progressStartValue*1.6}deg, #ededed 0deg)`;
    progressValue.style.color="#1aff34";
    condition.style.color="#1aff34";
    document.getElementById("info2").innerHTML="Fair";
    condition2.style.color="#1aff34";
    document.getElementById("airp3").innerHTML="Fair";
    condition3.style.backgroundColor="#1aff34";
}   
else
{
    circularProgress.style.background = `conic-gradient(#009912 ${progressStartValue*1.6}deg, #ededed 0deg)`;
    progressValue.style.color="#009912";
    condition.style.color="#009912";
    document.getElementById("info2").innerHTML="Excellent";
    condition2.style.color="#009912";
    document.getElementById("airp3").innerHTML="Excellent";
    condition3.style.backgroundColor="#009912";
}
if(progressStartValue== progressEndValue){
    clearInterval(progress);
}    
}, speed);




 /* date */
 const m=new Date();
 let day=m.getDate();
 let month=m.getMonth()+1;
 document.getElementById("airp2").innerHTML=day+"/"+month;
 
