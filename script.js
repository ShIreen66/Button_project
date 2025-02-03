let btn = document.querySelector("button")

let images = ["https://images.unsplash.com/photo-1738236013982-9449791344de?q=80&w=1873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1728334477274-416f443f004e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1675826927352-e99efbab36d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]

function randomImages(){
    return Math.floor(Math.random()*images.length)
}
function getRandom(){
    let X = Math.floor(Math.random()*100)
    let Y = Math.floor(Math.random()*100)
    let rotate = Math.floor(Math.random()*360)
    return {X, Y, rotate}
}


btn.addEventListener("click", () => {

    let img = document.createElement("img")
    img.src = images[randomImages()]
    // console.log(img)
    let {X, Y, rotate} =getRandom()
    img.style.height = "100px"
    img.style.width = "100px"
    img.style.objectFit = "cover"
    img.style.objectFit = "cover"
    img.style.position ="absolute"
    img.style.top = Y+'%'
    img.style.left = X+'%'
    img.style.rotate = rotate+'deg'
    img.style.borderRadius = '50%' 
    document.body.appendChild(img)

})