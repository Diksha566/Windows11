let  taskbar = document.getElementsByClassName("taskbar")[0] 
let  startmeanu = document.getElementsByClassName("startmeanu")[0]

taskbar.addEventListener("click", ()=>{
 if(startmeanu.style.bottom == "50px"){
    startmeanu.style.bottom = "-652px"

 }

 else{
    startmeanu.style.bottom = "50px"
 }

})
