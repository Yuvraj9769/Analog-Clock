let second=document.getElementById("second");
let minute=document.getElementById("minute");
let hour=document.getElementById("hour");

setInterval(()=>{
    let date=new Date();
    let s=date.getSeconds();
    let m=date.getMinutes();
    let h=date.getHours();
    console.log(s, m, h);

    second.style.rotate=`${s *6}deg`;
    minute.style.rotate=`${m*6}deg`;
    hour.style.rotate=`${h*30}deg`;
},1000);