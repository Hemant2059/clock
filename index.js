
setInterval(() => {
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
   
   let hrotation=30*htime+mtime/2;
   let mrotation=6*mtime;
   let srotation=6*stime;

    hours.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
}, 1000);