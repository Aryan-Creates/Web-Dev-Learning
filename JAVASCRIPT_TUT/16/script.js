let button = document.getElementById("button")

button.addEventListener("dblclick", ()=>{
    // alert("I WAS CLICKED WHOOOO!!!")
    document.querySelector(".box").innerHTML = "HURRAYYY !!"
})

button.addEventListener("contextmenu", ()=>{
    alert("I WAS CLICKED WHOOOO!!!")
})

button.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})