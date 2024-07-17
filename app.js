const colorPicker=document.getElementById('colorPicker')
const canvasColor=document.getElementById('canvasColor')
const fontSize=document.getElementById('fontSize')
const myCanvas=document.getElementById('myCanvas')
const clearButton=document.getElementById('clearButton')
const saveButton=document.getElementById('saveButton')
// const retrieve=document.getElementById('retrieve')
const ctx=myCanvas.getContext('2d')

colorPicker.addEventListener("change",(e)=>{
    ctx.strokeStyle=e.target.value
    ctx.fillStyle=e.target.value
})
myCanvas.addEventListener("mousedown",(e)=>{
    isDrawing=true
    lastX=e.offsetX
    lastY=e.offsetY
})
myCanvas.addEventListener("mousemove",(e)=>{
    if(isDrawing)
    {
        ctx.beginPath()
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(e.offsetX,e.offsetY)
        ctx.stroke()
    }
    lastX=e.offsetX
    lastY=e.offsetY
})
myCanvas.addEventListener("mouseup",(e)=>{
    isDrawing=false
})
canvasColor.addEventListener("change",(e)=>
{
    ctx.fillStyle=e.target.value
    ctx.fillRect(0,0,800,400)
})
fontSize.addEventListener("change",(e)=>{
    ctx.lineWidth=e.target.value
})
clearButton.addEventListener("click",()=>{
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height)
})
saveButton.addEventListener("click",()=>{
    let link=document.createElement("a")
    link.download="my-canvasColor.png"
    link.href=myCanvas.toDataURL()
    link.click()


})