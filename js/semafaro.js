const img = document.querySelector('img')
const btns = document.querySelector('#buttons')
let colorIndex = 0
let intervalId = null

const trocaImg = (e) => {
    stopInterval() 
    ligar[e.target.id]()
   
}

const stopInterval = () => {
    clearInterval(intervalId)
} 


const trocaCor = () => {
    const cores = ['red', 'yellow', 'green']
    const color = cores[colorIndex]
    ligar[color]()
    if(colorIndex < 2) {
        colorIndex++
    } else {
        colorIndex = 0
    }
}

const ligar = {
    'red':      () => img.src = './img/vermelho.png',
    'yellow':   () => img.src = './img/amarelo.png',
    'green':    () => img.src = './img/verde.png',
    'auto':     () => intervalId = setInterval(trocaCor, 1000) 
}

btns.addEventListener('click', trocaImg)