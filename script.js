let horizontal = document.querySelector('.horizontal')
let vertical = document.querySelector('.vertical')
let blur = document.querySelector('.blur')
let spread = document.querySelector('.spread')
let shadow = document.querySelector('.shadow')
let background = document.querySelector('.background')
let section = document.querySelector('.section')
let box_color = document.querySelector('.box_color')
let box = document.querySelector('.box')
let boxShadowCode = document.querySelector('.box-shadow-value')
let boxBgCode = document.querySelector('.box-bg-value')
let boxColorCode = document.querySelector('.box-color-value')
let settingsRanges = document.querySelectorAll('.settings-range input')
let inputValue = document.querySelector('.input-value')
let inputVertical = document.querySelector('.vertical-value')
let inputBlur = document.querySelector('.blur-value')
let inputSpread = document.querySelector('.spread-value')

settingsRanges.forEach(input => {
    input.addEventListener('input', () => {
        generateShadow()
    })
})

background.addEventListener('input', () => {
    generateBackground()
})

box_color.addEventListener('input', () => {
    generateBoxBackground()
})

function generateShadow() {
    const property = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${shadow.value}`
    box.style.boxShadow = property
    boxShadowCode.textContent = `box-shadow: ${property};`
    console.log(123)
}

function generateBackground() {
    const property = `${background.value}`
    section.style.background = property
    boxBgCode.textContent = `background: ${property};`
}

function generateBoxBackground() {
    const property = `${box_color.value}`
    box.style.backgroundColor = property
    boxColorCode.textContent = `background-color: ${property};`
}

generateShadow()
generateBackground()
generateBoxBackground()

let init = (value) => {
    inputValue.innerHTML = value;
    document.documentElement.style.setProperty("--range", value + "%");
}
let updateValue = (value) => {
    inputValue.innerHTML = Math.floor(value);
}
let updateVar = (value) => {
    document.documentElement.style.setProperty("--range", value + "%");
}
init(horizontal.value)
horizontal.addEventListener("input", () => {
    updateVar(horizontal.value)
    updateValue(horizontal.value)
})

let initVertical = (value) => {
    inputVertical.innerHTML = value;
    document.documentElement.style.setProperty("--vertical", value + "%");
}
let verticalValue = (value) => {
    inputVertical.innerHTML = Math.floor(value);
}
let verticalVar = (value) => {
    document.documentElement.style.setProperty("--vertical", value + "%");
}
initVertical(vertical.value)
vertical.addEventListener("input", () => {
    verticalVar(vertical.value)
    verticalValue(vertical.value)
})

let initBlur = (value) => {
    inputBlur.innerHTML = value;
    document.documentElement.style.setProperty("--blur", value + "%");
}
let blurValue = (value) => {
    inputBlur.innerHTML = Math.floor(value);
}
let blurVar = (value) => {
    document.documentElement.style.setProperty("--blur", value + "%");
}
initBlur(blur.value)
blur.addEventListener("input", () => {
    blurVar(blur.value)
    blurValue(blur.value)
})
let initSpread = (value) => {
    inputSpread.innerHTML = value;
    document.documentElement.style.setProperty("--spread", value + "%");
}
let spreadValue = (value) => {
    inputSpread.innerHTML = Math.floor(value);
}
let spreadVar = (value) => {
    document.documentElement.style.setProperty("--spread", value + "%");
}
initSpread(spread.value)
spread.addEventListener("input", () => {
    spreadVar(spread.value)
    spreadValue(spread.value)
})