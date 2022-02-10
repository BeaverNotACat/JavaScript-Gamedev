Plates()
Square()

function Plates()
{
    let can = document.createElement('canvas');
    can.className = "Plates";
    can.width = 600;
    can.height = 600;
    can.style.backgroundColor = 'blue';
    document.body.append(can)

    const canvas = document.querySelector(".Plates")
    const cnv = canvas.getContext('2d')

    let x = Number(prompt("Координаты по x", 1))
    x = 300 + x
    let y = Number(prompt("Координаты по x", 1))
    y = 300 - y

    cnv.beginPath()
    cnv.strokeStyle ='magenta'
    cnv.lineWidth = 10
    cnv.lineDashOffset = 10;

    cnv.moveTo(0, 300);
    cnv.lineTo(600, 300);
    cnv.stroke();

    cnv.moveTo(300, 0);
    cnv.lineTo(300, 600);
    cnv.stroke();

    cnv.fillStyle = "magenta"
    if (x < 300 && y < 300)
    {
        cnv.fillRect(0,0,300,300)
    }
    if (x < 300 && y > 300)
    {   
        cnv.fillRect(0,300,300,300)
    }
    if (x > 300 && y < 300)
    {
        cnv.fillRect(300,0,300,300)
    }
    if (x > 300 && y > 300)
    {
        cnv.fillRect(300,300,300,300)
    }
}

function Square()
{
    let can = document.createElement('canvas');
    can.className = "Square";
    can.width = 600;
    can.height = 600;
    can.style.backgroundColor = 'blue';
    document.body.append(can)

    const canvas = document.querySelector(".Square")
    const cnv = canvas.getContext('2d')

    let x = Number(prompt("Координаты по x", 250));
    let y = Number(prompt("Координаты по x", 250));
    let z = y-300

    cnv.beginPath();
    cnv.strokeStyle ='magenta';
    cnv.fillStyle = "magenta";
    cnv.lineWidth = 10;
    cnv.lineDashOffset = 10;

    cnv.moveTo(0, 300);cnv.stroke();
    cnv.lineTo(600, 300);
    cnv.stroke();

    cnv.strokeRect(x, y, 80, 80);

    if (y+80 >= 300 && y < 300)
    {
        cnv.fillRect(x,300,80,z);
    }
}