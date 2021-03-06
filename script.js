let horizontal = document.querySelector('.horizontal')
let vertical = document.querySelector('.vertical')
let blur = document.querySelector('.blur')
let spread = document.querySelector('.spread')
let shadow = document.querySelector('.shadow')
// let background = document.querySelector('.background')
// let box_color = document.querySelector('.box_color')
let box = document.querySelector('.box')
let boxShadowCode = document.querySelector('.box-shadow__code')
let settingsRanges = document.querySelectorAll('.settings-range input')
let currrentEffect

settingsRanges.forEach(input => {
    input.addEventListener('input', () => {
        generateShadow()
    })
})

function generateShadow() {
    const property = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${shadow.value}`
    box.style.boxShadow = property
    boxShadowCode.textContent = `box-shadow: ${property};`
}

generateShadow()
// let range = document.getElementById("horizontal");
// let base = window.getComputedStyle(document.body).getPropertyValue("--base");
// let second = window.getComputedStyle(document.body).getPropertyValue("--second");

// let init = (value) => {
//     document.getElementById("value").innerHTML = value;
//     document.documentElement.style.setProperty("--horizontal", value + "%");
// }
// let updateValue = (value) => {
//     document.getElementById("value").innerHTML = Math.floor(value);
// }
// let updateVar = (value) => {
//     document.documentElement.style.setProperty("--deg", value * 3.6 + "deg");
//     document.documentElement.style.setProperty("--horizontal", value + "%");
//     if(value >= 100) {
//         document.documentElement.style.setProperty("--trackball", second);
//     } else {
//         document.documentElement.style.setProperty("--trackball", base);
//     }
//
// }
//
// init(range.value);
// range.addEventListener("input", () => {
//     let deg = range.value * 3.6;
//     updateVar(range.value);
//     updateValue(range.value);
// });