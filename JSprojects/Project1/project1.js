let borderRange = document.getElementById("border-range")
let paddingRange = document.getElementById("padding-range")
let contentRange = document.getElementById("content-range")

let borderColor = document.getElementById("border-color")
let paddingColor = document.getElementById("padding-color")
let contentColor = document.getElementById("content-color")

let borderRadius = document.getElementById("border-radius")
let paddingRadius = document.getElementById("padding-radius")
let contentRadius = document.getElementById("content-radius")

let borderBox = document.querySelector(".border")
let paddingBox = document.querySelector(".padding")
let contentBox = document.querySelector(".content")


borderRange.addEventListener("change",function(){
    borderBox.style.padding = borderRange.value + "px"
})
paddingRange.addEventListener("change",function(){
    paddingBox.style.padding = paddingRange.value + "px"
})
contentRange.addEventListener("change",function(){
    contentBox.style.padding = contentRange.value + "px"
})


borderColor.addEventListener("change",function(){
    borderBox.style.backgroundColor = borderColor.value
})
paddingColor.addEventListener("change",function(){
    paddingBox.style.backgroundColor = paddingColor.value
})
contentColor.addEventListener("change",function(){
    contentBox.style.backgroundColor = contentColor.value
})

borderRadius.addEventListener("change",function(){
    borderBox.style.borderRadius = borderRadius.value + "px"
})
paddingRadius.addEventListener("change",function(){
    paddingBox.style.borderRadius = paddingRadius.value + "px"
})
contentRadius.addEventListener("change",function(){
    contentBox.style.borderRadius = contentRadius.value + "px"
})