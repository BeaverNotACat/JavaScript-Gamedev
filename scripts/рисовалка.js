//LetterT()
// LetterX()
// LetterH()
// DownedLine()
// Cross()
//Square()
HeightTriangle()


function LetterT()
{
    const canvas = document.querySelector('.LetterT')
    const cnv = canvas.getContext('2d')
    
    cnv.beginPath()
    cnv.strokeStyle ='magenta'
    cnv.lineWidth = 10
    
    cnv.moveTo(50, 50)
    cnv.lineTo(550, 50)
    cnv.stroke()
    
    cnv.moveTo(300, 50)
    cnv.lineTo(300, 500)
    cnv.stroke()
    
    cnv.closePath()
}

function LetterX()
{
    const canvas = document.querySelector('.LetterX')
    const cnv = canvas.getContext('2d')
    
    cnv.beginPath()
    cnv.strokeStyle ='magenta'
    cnv.lineWidth = 10
    
    cnv.moveTo(50, 50)
    cnv.lineTo(550, 550)
    cnv.stroke()
    
    cnv.moveTo(550, 50)
    cnv.lineTo(50, 550)
    cnv.stroke()
    
    cnv.closePath()
}

function LetterH()
{
    const canvas = document.querySelector('.LetterH')
    const cnv = canvas.getContext('2d')
    
    cnv.beginPath()
    cnv.strokeStyle ='magenta'
    cnv.lineWidth = 10
    
    cnv.moveTo(150, 50)
    cnv.lineTo(150, 550)
    cnv.stroke()
    
    cnv.moveTo(450, 50)
    cnv.lineTo(450, 550)
    cnv.stroke()

    cnv.moveTo(150, 300)
    cnv.lineTo(450, 300)
    cnv.stroke()
    
    cnv.closePath()
}

function DownedLine()
{
    const canvas = document.querySelector('.DownedLine')
    const cnv = canvas.getContext('2d')

    let DownedLineArr = prompt('Длинна линии(4 картинка)', 100);

    cnv.beginPath()
    cnv.strokeStyle ='magenta'
    cnv.lineWidth = 10
    
    cnv.moveTo(300, 600)
    cnv.lineTo(300, 600 - DownedLineArr)
    cnv.stroke()
    
    cnv.closePath()
}

function Cross()
{
    const canvas = document.querySelector('.Cross')
    const cnv = canvas.getContext('2d')

    let CrossXArr = prompt('Координаты по x (4 картинка)', 300);
    let CrossYArr = prompt('Длинна линии по y (4 картинка)', 300);

    cnv.beginPath()
    cnv.strokeStyle ='magenta'
    cnv.lineWidth = 10
    
    cnv.moveTo(CrossXArr, CrossYArr + 30) //ПОЧЕМУ БЛЯЯЯЯЯТЬ ВТФФФФФЛОЦУФАИОЛЙФВОДЙУЫАОЙУЛФВЦ
    cnv.lineTo(CrossXArr, CrossYArr - 30)
    cnv.stroke()

    cnv.moveTo(CrossXArr + 30, CrossYArr)
    cnv.lineTo(CrossXArr - 30, CrossYArr)
    cnv.stroke()
    
    cnv.closePath()
}

function Cross()
{
    const canvas = document.querySelector('.Cross')
    const cnv = canvas.getContext('2d')

    let CrossXArr = prompt('Координаты по x (5 картинка)', 300);
    let CrossYArr = prompt('Длинна линии по y (5 картинка)', 300);

    cnv.beginPath()
    cnv.strokeStyle ='magenta'
    cnv.lineWidth = 10
    
    cnv.moveTo(CrossXArr, CrossYArr - -30)
    cnv.lineTo(CrossXArr, CrossYArr - 30)
    cnv.stroke()

    cnv.moveTo(CrossXArr - -30, CrossYArr)
    cnv.lineTo(CrossXArr - 30, CrossYArr)
    cnv.stroke()
    
    cnv.closePath()
}

function Square()
{
    const canvas = document.querySelector('.Square')
    const cnv = canvas.getContext('2d')

    let SquareSide = prompt('Длинаа стороны квадрата (картинка 6)', 300);

    cnv.beginPath()
    cnv.strokeStyle ='magenta'
    cnv.lineWidth = 10
    
    cnv.moveTo(50, 50) 
    cnv.lineTo(SquareSide, 50)
    cnv.stroke()

    cnv.moveTo(SquareSide, 50) 
    cnv.lineTo(SquareSide, SquareSide)
    cnv.stroke()

    cnv.moveTo(50, 50) 
    cnv.lineTo(50, SquareSide)
    cnv.stroke()

    cnv.moveTo(50, SquareSide) 
    cnv.lineTo(SquareSide, SquareSide)
    cnv.stroke()
    
    cnv.closePath()
}

function HeightTriangle()
{
    const canvas = document.querySelector('.HeightTriangle')
    const cnv = canvas.getContext('2d')

    let Height = prompt('высота треугольника (картинка 7)', 300);

    cnv.beginPath()
    cnv.strokeStyle ='magenta'
    cnv.lineWidth = 10

    cnv.moveTo(300, 50) 
    cnv.lineTo(300, 50 - -Height)
    cnv.stroke()

    cnv.moveTo(300, 50) 
    cnv.lineTo(200, 50 - -Height)
    cnv.stroke()

    cnv.moveTo(300, 50) 
    cnv.lineTo(400, 50 - -Height)
    cnv.stroke()

    cnv.moveTo(200, 50 - -Height) 
    cnv.lineTo(400, 50 - -Height)
    cnv.stroke()
}