var timedisplay=document.getElementById("timedisplay")
var start=document.getElementById("start")
var reset=document.getElementById("reset")
var pause=document.getElementById("pause")

let starttime=0;
let elapsedtime=0;
let currenttime=0;
let intervalId ;
let paused=true;
let hrs=0;
let mins=0;
let secs=0;

start.addEventListener("click",()=>{
    if(paused){
        paused=false;
        start = Date.now()-elapsedtime;
        intervalId=setInterval(updatetime,75);
    }
});

reset.addEventListener("click",()=>{
   paused=true;
   clearInterval(intervalId)
   starttime=0;
   elapsedtime=0;
   currenttime=0;
   secs=0;
   mins=0;
   hrs=0;
   timedisplay.textContent="00:00:00";

});
pause.addEventListener("click",()=>{
    if(!paused){
        paused=true;
        elapsedtime=Date.now()-start;
        clearInterval(intervalId);
    }
});

function updatetime(){
    elapsedtime=Date.now()- start;
    secs=Math.floor((elapsedtime / 1000)% 60);
    mins=Math.floor((elapsedtime /(1000 * 60)) % 60);
    hrs=Math.floor((elapsedtime /(1000 * 60 * 60)) % 60);
   
    secs=pad(secs);
    mins=pad(mins);
    hrs=pad(hrs);
timedisplay.textContent=`${hrs}:${mins}:${secs}`;
function pad(unit){
    return(("0")+unit).length>2 ? unit:"0"+unit;
}
}