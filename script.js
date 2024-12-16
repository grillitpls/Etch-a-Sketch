let size = 16

const container = document.querySelector('.container')

container.style.cssText = 'display:flex; flex-wrap: wrap; width: 1000px; height: 1000px;'


for (i = 0; i < (size * size); i++) {
    const div = document.createElement('div')
    div.style.cssText = `height: calc(1000px / ${size} - 2px); width: calc(1000px / ${size} - 2px); border: 1px solid black;`
    div.addEventListener('mouseenter', () => div.style.cssText += `background-color: rgb(${Math.floor(Math.random() * 254 + 1)}, ${Math.floor(Math.random() * 254 + 1)}, ${Math.floor(Math.random() * 254 + 1)})`)
    container.appendChild(div)
}

const button = document.createElement('button')
button.textContent = "Custom size"
button.style.cssText = 'padding: 10px; margin-bottom: 10px;'
document.querySelector('body').prepend(button)

button.addEventListener('click', () => {
    let number = prompt("Enter number of square per side for your sketch board")
    
    while (number < 0 || number > 100) {
        number = prompt("Please enter number from 0 to 100!")
    }

    size = number

    container.innerHTML = ''

    for (i = 0; i < (size * size); i++) {
        const div = document.createElement('div')
        div.style.cssText = `height: calc(1000px / ${size} - 2px); width: calc(1000px / ${size} - 2px); border: 1px solid black;`
        div.addEventListener('mouseenter', () => div.style.cssText += `background-color: rgb(${Math.floor(Math.random() * 254 + 1)}, ${Math.floor(Math.random() * 254 + 1)}, ${Math.floor(Math.random() * 254 + 1)})`)
        container.appendChild(div)
    }
})






