let eventKey = document.getElementById("eventKey");
let eventCode = document.getElementById("eventCode");
let eventWhich = document.getElementById("eventWhich");
let pressKey = document.getElementById("pressKey")

window.addEventListener("keydown", (e)=>{
    eventKey.innerText = e.key;
    eventCode.textContent = e.code;
    eventWhich.textContent = e.which;
    pressKey.textContent = e.which;
    pressKey.style.fontSize = "150px"
    if(e.keyCode===32){
        eventKey.textContent = "Space"
    }
})