let ka=new Date;
let paul=0;
let bot=ka.getDate();
let day=ka.getDay();
let days=['SUN','MON','TUE','WED','THU','FRI','SAT']
let ar=['day1','day2','day3','day4','day5','day6','day7','day8','day9','day10','day11','day12','day13','day14']
noob=ka.getMonth()+1;
/* day */
document.getElementById('day1').innerHTML=days[0];
document.getElementById('day2').innerHTML=days[1];
document.getElementById('day3').innerHTML=days[2];
document.getElementById('day4').innerHTML=days[3];
document.getElementById('day5').innerHTML=days[4];
document.getElementById('day6').innerHTML=days[5];
document.getElementById('day7').innerHTML=days[6];
document.getElementById('day8').innerHTML=days[0];
document.getElementById('day9').innerHTML=days[1];
document.getElementById('day10').innerHTML=days[2];
document.getElementById('day11').innerHTML=days[3];
document.getElementById('day12').innerHTML=days[4];
document.getElementById('day13').innerHTML=days[5];
document.getElementById('day14').innerHTML=days[6];
/*document.getElementById('dat1').innerHTML=noob+"/"+nu[item];
document.getElementById('dat2').innerHTML=noob+"/"+nu[item+1];
document.getElementById('dat3').innerHTML=noob+"/"+nu[item+2];
document.getElementById('dat4').innerHTML=noob+"/"+nu[item+3];
document.getElementById('dat5').innerHTML=noob+"/"+nu[item+4];
document.getElementById('dat6').innerHTML=noob+"/"+bot++;
document.getElementById('dat7').innerHTML=noob+"/"+bot++;
document.getElementById('dat8').innerHTML=noob+"/"+bot++;
document.getElementById('dat9').innerHTML=noob+"/"+bot++;
document.getElementById('dat10').innerHTML=noob+"/"+bot++;
document.getElementById('dat11').innerHTML=noob+"/"+bot++;
document.getElementById('dat12').innerHTML=noob+"/"+bot++;
document.getElementById('dat13').innerHTML=noob+"/"+bot++;
document.getElementById('dat14').innerHTML=noob+"/"+bot++;
/* div declaration */
let da1=document.querySelector('.day1');
let da2=document.querySelector('.day2');
let da3=document.querySelector('.day3');
let da4=document.querySelector('.day4');
let da5=document.querySelector('.day5');
let da6=document.querySelector('.day6');
let da7=document.querySelector('.day7');
let da8=document.querySelector('.day8');
let da9=document.querySelector('.day9');
let da10=document.querySelector('.day10');
let da11=document.querySelector('.day11');
let da12=document.querySelector('.day12');
let da13=document.querySelector('.day13');
let da14=document.querySelector('.day14');
let n=days[day];
let list=['day1','day2','day3','day4','day5','day6','day7','day8','day9','day10','day11','day12','day13','day14'];
let divlist=[".day1",".day2",".day3",".day4",".day5",".day6",".day7"]
let divlist2=[".day8",".day9",".day10",".day11",".day12",".day13",".day14"];
let i=0;
let x=0;

function removediv()
{   
    if(paul==0)
    { 
      while(i<day)
      {   let c=document.querySelector(divlist[i]);
          c.style.display="none";
          i++;
      }
      while(x<day)
      {
         let jaju=document.querySelector(divlist2[x]);
         jaju.style.display="block";
         x++;
      }
         
      }
} 
