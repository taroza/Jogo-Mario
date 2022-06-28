
const mario = document.querySelector('.mario') // Colocando a imagem do mario dentro da variavel pare se utilizada na logica. 
const  pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump') //a função jump vai ser adicionada na class mario quando uma tecla for pressionada
    setTimeout(() => { //setTimeout recebe 2 parametros, uma função e um tempo, espera o tempo depois executa a função
        mario.classList.remove('jump')
    }, 500)
}
const loop = setInterval(() => {

   // console.log('loop')

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '') //esse + na frente de tudo , é usado para tudo q for numero ser convertido paa number, para podermos fazer a logica do pulo
    //window.getComputedStyle(mario) pega o estilo que foi computadona imagem mario, pega qualquer propriedade css que esteja aplicada no mario 
    //, exemplo o bottom, essa propriedade retorna o valor como stringo replace substitui o 'px que retorna o valor em string para nada

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {//se o pipe chegar a 120px left e o pipeposition for maior que zero quer dizer
        // q o mario nao passou ainda pelo pipe, e se o pulo do mario na hr q o pipe passar for menor do que 80px encerra o game
        pipe.style.animation = 'none' //caso o if retorn true aqui era pra animação parar mas parece q nao ta funcionando
        pipe.style.left = `${pipePosition}px` //aqui aciona a propriedade css dinamicamente pelo js, pra animaçãoparar exatamente onde encostar no tubo

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px` //altura do pulo

        mario.src = './images/game-over.png' //quando o jogo acaba esse comando muda a imagem dele
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }



}, 10)

document.addEventListener("keydown", jump)




