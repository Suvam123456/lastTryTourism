document.getElementById("menu").addEventListener("click",()=>{
    document.getElementById("menuPage").style.cssText="display:flex;"
    document.body.style.overflow="hidden";
    document.getElementById("menuPageClose").style.display="block";
    document.getElementById("home").style.height="600px";
})
document.getElementById("menuPageClose").addEventListener("click",()=>{
    document.body.style.overflow="visible";
    document.getElementById("menuPage").style.cssText="display:none;"
    document.getElementById("menuPageClose").style.display="none";
})

document.getElementById("forestBtn").addEventListener("click",()=>{
    console.log("this is forest");
    
     document.getElementById("forestDes").innerHTML="rs 3000";
     document.getElementById("forestBackBtn").style.display="block";
     document.getElementById("forestBtn").style.display="none";
})
document.getElementById("forestBackBtn").addEventListener("click",()=>{
    document.getElementById("forestDes").innerHTML="<li>7 day tour</li><hr> <li>upto 20 people</li><hr> <li> 4 tour guid</li><hr> <li> sleep in tent</li><hr> <li>difficulty:medium</li><hr>";
    document.getElementById("forestBackBtn").style.display="none";
    document.getElementById("forestBtn").style.display="block";
})


document.getElementById("beachBtn").addEventListener("click",()=>{
    console.log("this is beach");
    document.getElementById("beachDes").innerHTML="rs 5000";
    document.getElementById("beachBackBtn").style.display="block";
    document.getElementById("beachBtn").style.display="none";
})
document.getElementById("beachBackBtn").addEventListener("click",()=>{
    document.getElementById("beachDes").innerHTML="<li>7 day tour</li><hr> <li>upto 20 people</li><hr> <li> 4 tour guid</li><hr> <li> sleep in tent</li><hr> <li>difficulty:medium</li><hr>";
    document.getElementById("beachBackBtn").style.display="none";
    document.getElementById("beachBtn").style.display="block";
})

document.getElementById("mountainBtn").addEventListener("click",()=>{
    console.log("this is mountain");
    document.getElementById("mountainDes").innerHTML="rs 7000";
    document.getElementById("mountainBackBtn").style.display="block";
    document.getElementById("mountainBtn").style.display="none";
})
document.getElementById("mountainBackBtn").addEventListener("click",()=>{
    document.getElementById("mountainDes").innerHTML="<li>7 day tour</li><hr> <li>upto 20 people</li> <hr><li> 4 tour guid</li> <hr><li> sleep in tent</li><hr> <li>difficulty:medium</li><hr>";
    document.getElementById("mountainBackBtn").style.display="none";
    document.getElementById("mountainBtn").style.display="block";
})

document.querySelector("video").playbackRate=0.5;
