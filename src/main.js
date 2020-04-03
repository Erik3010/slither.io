const canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    w = canvas.width,
    h = canvas.height;

let utility = new Utility();
let game = new Game(w,h);

canvas.addEventListener('mousemove', function(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    let angle = utility.getAngle(game.snakes[0].snakeArr[0], {x: x, y: y});
    game.snakes[0].angle = angle;
    // game.snakes[0].changeAngle(angle);
})

game.init();

function update() {
    setTimeout(update, 35);
    ctx.clearRect(0,0,w,h);

    game.draw();
}
setTimeout(update, 35);