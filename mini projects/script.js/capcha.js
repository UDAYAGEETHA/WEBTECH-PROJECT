var btn=document.getElementById('btn');
var text=document.getElementById('text');
let capcha=['"ASD234V"','"HGDTYUEJ5"','"KWUEDIWEY"','"JHDWWD"']
btn.addEventListener('click',function(){
    let randomNum =capcha [Math.floor(Math.random() *capcha.length)];
    text.innerHTML=randomNum;
})