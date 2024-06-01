let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h1");
    let randomcolor = generateRandom();
    h3.innerText = randomcolor;
    h3.style.color = randomcolor;
    btn.style.color = randomcolor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomcolor;
    console.log("Random color genrated")

});

function generateRandom() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`
    return color;
}

let input = document.querySelector("#check");
let p = document.querySelector("p");

input.addEventListener("scroll", function() {
    console.log(input.value);
    p.innerText = input.value; 
})

let button = document.createElement("button");
button.innerText = "Click Me"
button.addEventListener("click", function () {
    
    button.style.backgroundColor = "green";
});

document.querySelector("body").append(button);

let assign = document.querySelector("#assign");
let header = document.querySelector("h3");

assign.addEventListener("input", function() {
    console.log(assign.value);
    header.innerText = assign.value;
    
})