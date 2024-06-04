const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();
prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});

/* date 
let n=new Date();
let varun=n.getDate();
let varu=varun+1;
let rishitha=n.getMonth();
document.getElementById("date1").innerHTML=rishitha+1+"/"+varun;
document.getElementById("date2").innerHTML=rishitha+1+"/"+varu;
document.getElementById("date2-1").innerHTML=rishitha+1+"/"+varun;
document.getElementById("date2-2").innerHTML=rishitha+1+"/"+varu;*/

/* click */
let lion=document.querySelector('li.active + li');
let lion2=document.querySelector('li.active + li + li');
let lion3=document.querySelector('li.active + li + li + li');
let lion4=document.querySelector('li.active + li + li + li + li');
let lion5=document.querySelector('li.active + li + li + li + li + li');
let lion6=document.querySelector('li.active + li + li + li + li + li + li');/*
let lion7=document.querySelector('li.active + li + li + li + li + li + li + li');*/

let mrng=document.querySelector(".mrng");
let mrng1=document.querySelector(".mrng1");
let mrng2=document.querySelector(".mrng2");
let mrng3=document.querySelector(".mrng3");
let mrng4=document.querySelector(".mrng4");
let mrng5=document.querySelector(".mrng5");
let mrng6=document.querySelector(".mrng6");
let mrng7=document.querySelector(".mrng7");

/* night declaration */
let night=document.querySelector(".night");
let night1=document.querySelector(".night1");
let night2=document.querySelector(".night2");
let night3=document.querySelector(".night3");
let night4=document.querySelector(".night4");
let night5=document.querySelector(".night5");
let night6=document.querySelector(".night6");
let night7=document.querySelector(".night7");

lion.addEventListener('click',function(){
    mrng.classList.toggle('hide');
    mrng1.classList.toggle('show1');
    mrng2.classList.toggle('hide2');
    mrng3.classList.toggle('hide3');
    mrng4.classList.toggle('hide4');
    mrng5.classList.toggle('hide5');
    mrng6.classList.toggle('hide6');
    mrng7.classList.toggle('hide7');
    night.classList.toggle('nhide');
    night1.classList.toggle('nshow1');
    night2.classList.toggle('nhide2');
    night3.classList.toggle('nhide3');
    night4.classList.toggle('nhide4');
    night5.classList.toggle('nhide5');
    night6.classList.toggle('nhide6');
    night7.classList.toggle('nhide7');
});
lion2.addEventListener('click',function(){
    mrng.classList.toggle('hide');
    mrng1.classList.toggle('hide1');
    mrng2.classList.toggle('show2');
    mrng3.classList.toggle('hide3');
    mrng4.classList.toggle('hide4');
    mrng5.classList.toggle('hide5');
    mrng6.classList.toggle('hide6');
    mrng7.classList.toggle('hide7');

    night.classList.toggle('nhide');
    night1.classList.toggle('nhide1');
    night2.classList.toggle('nshow2');
    night3.classList.toggle('nhide3');
    night4.classList.toggle('nhide4');
    night5.classList.toggle('nhide5');
    night6.classList.toggle('nhide6');
    night7.classList.toggle('nhide7');
});
lion3.addEventListener('click',function(){
    mrng.classList.toggle('hide');
    mrng1.classList.toggle('hide1');
    mrng2.classList.toggle('hide2');
    mrng3.classList.toggle('show3');
    mrng4.classList.toggle('hide4');
    mrng5.classList.toggle('hide5');
    mrng6.classList.toggle('hide6');
    mrng7.classList.toggle('hide7');

    night.classList.toggle('nhide');
    night1.classList.toggle('nhide1');
    night2.classList.toggle('nhide2');
    night3.classList.toggle('nshow3');
    night4.classList.toggle('nhide4');
    night5.classList.toggle('nhide5');
    night6.classList.toggle('nhide6');
    night7.classList.toggle('nhide7');
  });
lion4.addEventListener('click',function(){
    mrng.classList.toggle('hide');
    mrng1.classList.toggle('hide1');
    mrng2.classList.toggle('hide2');
    mrng3.classList.toggle('hide3');
    mrng4.classList.toggle('show4');
    mrng5.classList.toggle('hide5');
    mrng6.classList.toggle('hide6');
    mrng7.classList.toggle('hide7');

    night.classList.toggle('nhide');
    night1.classList.toggle('nhide1');
    night2.classList.toggle('nhide2');
    night3.classList.toggle('nhide3');
    night4.classList.toggle('nshow4');
    night5.classList.toggle('nhide5');
    night6.classList.toggle('nhide6');
    night7.classList.toggle('nhide7');
});  
lion5.addEventListener('click',function(){
    mrng.classList.toggle('hide');
    mrng1.classList.toggle('hide1');
    mrng2.classList.toggle('hide2');
    mrng3.classList.toggle('hide3');
    mrng4.classList.toggle('hide4');
    mrng5.classList.toggle('show5');
    mrng6.classList.toggle('hide6');
    mrng7.classList.toggle('hide7');

    night.classList.toggle('nhide');
    night1.classList.toggle('nhide1');
    night2.classList.toggle('nhide2');
    night3.classList.toggle('nhide3');
    night4.classList.toggle('nhide4');
    night5.classList.toggle('nshow5');
    night6.classList.toggle('nhide6');
    night7.classList.toggle('nhide7');
});  
lion6.addEventListener('click',function(){
    mrng.classList.toggle('hide');
    mrng1.classList.toggle('hide1');
    mrng2.classList.toggle('hide2');
    mrng3.classList.toggle('hide3');
    mrng4.classList.toggle('hide4');
    mrng5.classList.toggle('hide5');
    mrng6.classList.toggle('show6');
    mrng7.classList.toggle('hide7');

    night.classList.toggle('nhide');
    night1.classList.toggle('nhide1');
    night2.classList.toggle('nhide2');
    night3.classList.toggle('nhide3');
    night4.classList.toggle('nhide4');
    night5.classList.toggle('nhide5');
    night6.classList.toggle('nshow6');
    night7.classList.toggle('nhide7');
}); 
/*
lion7.addEventListener('click',function(){
    mrng.classList.toggle('hide');
    mrng1.classList.toggle('hide1');
    mrng2.classList.toggle('hide2');
    mrng3.classList.toggle('hide3');
    mrng4.classList.toggle('hide4');
    mrng5.classList.toggle('hide5');
    mrng6.classList.toggle('hide6');
    mrng7.classList.toggle('show7');

    night.classList.toggle('nhide');
    night1.classList.toggle('nhide1');
    night2.classList.toggle('nhide2');
    night3.classList.toggle('nhide3');
    night4.classList.toggle('nhide4');
    night5.classList.toggle('nhide5');
    night6.classList.toggle('nhide6');
    night7.classList.toggle('nshow7');
}); 
*/
let n=new Date();
let d=n.getDate();
let m=n.getMonth()+1;
let hourly=n.getHours;
document.getElementById("date").innerHTML=m+"/"+d++;
document.getElementById("date1").innerHTML=m+"/"+d++;
document.getElementById("date2").innerHTML=m+"/"+d++;
document.getElementById("date3").innerHTML=m+"/"+d++;
document.getElementById("date4").innerHTML=m+"/"+d++;
document.getElementById("date5").innerHTML=m+"/"+d++;
document.getElementById("date6").innerHTML=m+"/"+d++;
document.getElementById("date7").innerHTML=m+"/"+d;

/* night */
let gn=new Date();
let hr=gn.getDate();
let mr=gn.getMonth()+1;
document.getElementById("ndate").innerHTML=mr+"/"+hr++;
document.getElementById("ndate1").innerHTML=mr+"/"+hr++;
document.getElementById("ndate2").innerHTML=mr+"/"+hr++;
document.getElementById("ndate3").innerHTML=mr+"/"+hr++;
document.getElementById("ndate4").innerHTML=mr+"/"+hr++;
document.getElementById("ndate5").innerHTML=mr+"/"+hr++;
document.getElementById("ndate6").innerHTML=mr+"/"+hr;
document.getElementById("ndate7").innerHTML=mr+"/"+hr;

if(hourly==23)
{
    mrng.style.visibility="hidden";
    mrng1.style.display="block";
    night.style.visibility="hidden";
    night1.style.display="block";
}