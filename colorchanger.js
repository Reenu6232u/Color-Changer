const buttons = document.querySelectorAll('.button')
// console.log(button)

const body = document.querySelector("body")
console.log(body)
buttons.forEach(function(button){
console.log(button)
button.addEventListener("click",function(e){
console.log(e);
console.log(e.target);

if(e.target.id ==="grey"){
    body.style.backgroundColor = e.target.id
}
if(e.target.id === "purple"){
    body.style.backgroundColor = e.target.id
}
if(e.target.id === "blue"){
    body.style.backgroundColor = e.target.id
}
if(e.target.id === "yellow"){
    body.style.backgroundColor = e.target.id
}

})
});

// Using swich case

buttons.forEach(function(button){
button.addEventListener('click',function(e){
        let color = e.target.id;
        console.log("Buttons clicked:", color);
        switch(color){
    case 'grey':
    body.style.backgroundColor = "grey"
    break;
    case 'purple':
    body.style.backgroundColor = "purple"
    break;
    case 'blue':
    body.style.backgroundColor = "blue"
    break;
    case 'yellow':
    body.style.backgroundColor = "yellow"

}
    })


})
