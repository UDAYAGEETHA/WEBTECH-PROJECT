let section=document.querySelector("section"),
icons=document.querySelector(".icons");

icons.onclick=()=>{
    section.classList.toggle("dark")
}
//creating a function and calling it in every seconds
setInterval(() => {
    let date=new Date(),
    hour=date.getHours(),
    min=date.getMinutes(),
    sec=date.getSeconds();
console.log(min)
console.log(hour)

let d;
d=hour<12?"am":"pm";
hour=hour>12?hour-12:12;
hour=hour==0?hour=12:hour;
//adding 0  to all the value
hour=hour<10?"0"+hour:hour;
min=min<10?"0"+min:min;
sec=sec<10?"0"+sec:sec;



document.querySelector(".hour_num").innerText=hour;
document.querySelector(".mins_num").innerText=min;
document.querySelector(".sec_num").innerText=sec;
document.querySelector(".am_pm").innerText=d;
}, 1000);

