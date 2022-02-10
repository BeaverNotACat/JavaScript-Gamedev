LetterT()
LetterX()
LetterH()
DownedLine()
Cross()
Square()
HeightTriangle()
SideTriangle()
Cube()
D4()
AngleTriangle()
Chlen()


function LetterT()
{
    let can = document.createElement('canvas');
    can.className = "LetterT";
    can.width = 600;
    can.height = 600;
    can.style.backgroundColor = 'blue';
    document.body.append(can)

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
    let can = document.createElement('canvas');
    can.className = "LetterX";
    can.width = 600;
    can.height = 600;
    can.style.backgroundColor = 'blue';
    document.body.append(can)

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
    let can = document.createElement('canvas');
    can.className = "LetterH";
    can.width = 600;
    can.height = 600;
    can.style.backgroundColor = 'blue';
    document.body.append(can)

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
    let can = document.createElement('canvas');
    can.className = "DownedLine";
    can.width = 600;
    can.height = 600;
    can.style.backgroundColor = 'blue';
    document.body.append(can)

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
    let can = document.createElement('canvas');
    can.className = "Cross";
    can.width = 600;
    can.height = 600;
    can.style.backgroundColor = 'blue';
    document.body.append(can)

    const canvas = document.querySelector('.Cross')
    const cnv = canvas.getContext('2d')

    let CrossXArr = Number(prompt('Координаты по x (4 картинка)', 300));
    let CrossYArr = Number(prompt('Длинна линии по y (4 картинка)', 300));

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

function Square()
{
    let can = document.createElement('canvas');
    can.className = "Square";
    can.width = 600;
    can.height = 600;
    can.style.backgroundColor = 'blue';
    document.body.append(can)

    const canvas = document.querySelector('.Square')
    const cnv = canvas.getContext('2d')

    let SquareSide = Number(prompt('Длинаа стороны квадрата (картинка 6)', 300));

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
    let can = document.createElement('canvas');
    can.className = "HeightTriangle";
    can.width = 600;
    can.height = 600;
    can.style.backgroundColor = 'blue';
    document.body.append(can)

    const canvas = document.querySelector('.HeightTriangle')
    const cnv = canvas.getContext('2d')

    let Height = Number(prompt('высота треугольника (картинка 7)', 300));

    cnv.beginPath()
    cnv.strokeStyle ='magenta'
    cnv.lineWidth = 10

    cnv.moveTo(300, 50) 
    cnv.lineTo(300, 50 + Height)
    cnv.stroke()

    cnv.moveTo(300, 50) 
    cnv.lineTo(200, 50 + Height)
    cnv.stroke()

    cnv.moveTo(300, 50) 
    cnv.lineTo(400, 50 + Height)
    cnv.stroke()

    cnv.moveTo(200, 50 + Height) 
    cnv.lineTo(400, 50 + Height)
    cnv.stroke()
}

function SideTriangle()
{
    let can = document.createElement('canvas');
    can.className = "SideTriangle";
    can.width = 600;
    can.height = 600;
    can.style.backgroundColor = 'blue';
    document.body.append(can)

    const canvas = document.querySelector('.SideTriangle')
    const cnv = canvas.getContext('2d')

    cnv.beginPath()
    cnv.strokeStyle ='magenta'
    cnv.lineWidth = 10

    let Katet = Number(prompt('сторону основнаия треугольника (картинка 8)', 300));
    let Gipo = Number(prompt('сторону гипотенузы треугольника (картинка 8)', 500));
    let Katet1 = Math.sqrt(Gipo * Gipo - Katet * Katet)


    cnv.moveTo(50, 550)
    cnv.lineTo(50 + Katet, 550)

    cnv.moveTo(50 + Katet, 550)
    cnv.lineTo(50 + Katet, 550 - Katet1)    

    cnv.moveTo(50, 550)
    cnv.lineTo(50 + Katet, 550 - Katet1)

    cnv.stroke()
}

function Cube()
{
    let can = document.createElement('canvas');
    can.className = "Cube";
    can.width = 600;
    can.height = 600;
    can.style.backgroundColor = 'blue';
    document.body.append(can)

    const canvas = document.querySelector(".Cube")
    const cnv = canvas.getContext('2d')

    cnv.beginPath()
    cnv.strokeStyle ='magenta'
    cnv.lineWidth = 10
    cnv.lineDashOffset = 10;

    cnv.moveTo(50, 550)
    cnv.lineTo(250, 550)

    cnv.moveTo(250, 550)
    cnv.lineTo(250, 350)

    cnv.moveTo(50, 550)
    cnv.lineTo(50, 350)

    cnv.moveTo(50, 350)
    cnv.lineTo(250, 350) 

    cnv.moveTo(350, 450)
    cnv.lineTo(350, 250)

    cnv.moveTo(150, 250)
    cnv.lineTo(350, 250)

    cnv.moveTo(250, 550)
    cnv.lineTo(350, 450)

    cnv.moveTo(50, 350)
    cnv.lineTo(150, 250)

    cnv.moveTo(250, 350)
    cnv.lineTo(350, 250)

    cnv.stroke()
    cnv.setLineDash([15, 14])

    cnv.moveTo(50, 550)
    cnv.lineTo(150, 450)

    cnv.moveTo(150, 450)
    cnv.lineTo(150, 250)

    cnv.moveTo(150, 450)
    cnv.lineTo(350, 450)

    cnv.stroke()
}

function D4()
{
    let can = document.createElement('canvas');
    can.className = "D4";
    can.width = 600;
    can.height = 600;
    can.style.backgroundColor = 'blue';
    document.body.append(can)

    const canvas = document.querySelector(".D4")
    const cnv = canvas.getContext('2d')

    cnv.beginPath()
    cnv.strokeStyle ='magenta'
    cnv.lineWidth = 10
    cnv.lineDashOffset = 10;

    let X = Number(prompt('Координаты по x (9 картинка)', 300));
    let Y = Number(prompt('Длинна линии по y (9 картинка)', 300));

    cnv.moveTo(X, Y)
    cnv.lineTo(X + 150, Y + 250)

    cnv.moveTo(X, Y)
    cnv.lineTo(X - 100, Y + 250)

    cnv.moveTo(X, Y)
    cnv.lineTo(X - 50, Y + 300  )

    cnv.moveTo(X + 150, Y + 250)
    cnv.lineTo(X - 50, Y + 300  )

    cnv.moveTo(X - 50, Y + 300  )
    cnv.lineTo(X - 100, Y + 250)

    cnv.stroke()
    cnv.setLineDash([15, 14])

    cnv.moveTo(X + 150, Y + 250)
    cnv.lineTo(X - 100, Y + 250)

    cnv.stroke()
}

function AngleTriangle()
{
    let can = document.createElement('canvas');
    can.className = "AngleTriangle";
    can.width = 600;
    can.height = 600;
    can.style.backgroundColor = 'blue';
    document.body.append(can)

    const canvas = document.querySelector(".AngleTriangle")
    const cnv = canvas.getContext('2d')

    cnv.beginPath()
    cnv.strokeStyle ='magenta'
    cnv.lineWidth = 10
    cnv.lineDashOffset = 10;

    let A = Number(prompt('Угол треугольника (10 картинка)', 30));
    A = A * Math.PI / 180;

    let kat1 = 500
    let kat2 = kat1 * Math.tan(A)

    cnv.moveTo(50, 550)
    cnv.lineTo(50 + kat1, 550)

    cnv.moveTo(50 + kat1, 550)
    cnv.lineTo(50 + kat1, 550 - kat2)

    cnv.moveTo(50, 550)
    cnv.lineTo(50 + kat1, 550 - kat2)

    cnv.stroke()
}

function Chlen()
{
    let can = document.createElement('canvas');
    can.className = "Chlen";
    can.width = 600;
    can.height = 600;
    can.style.backgroundColor = 'blue';
    document.body.append(can)

    const canvas = document.querySelector(".Chlen")
    const cnv = canvas.getContext('2d')

    cnv.beginPath()
    cnv.strokeStyle ='magenta'
    cnv.lineWidth = 10
    
    cnv.moveTo(300, 400)
    cnv.arc(250, 400, 50, 0, 20)
    cnv.moveTo(400, 400)
    cnv.arc(350, 400, 50, 0, 20)
    cnv.stroke()

    cnv.moveTo(270, 350)
    cnv.lineTo(270, 100)
    cnv.stroke()

    cnv.moveTo(330, 350)
    cnv.lineTo(330, 100)
    cnv.stroke()

    cnv.moveTo(330, 100)
    cnv.arc(300, 100, 30, 0, 3,14159)
    cnv.stroke()


}