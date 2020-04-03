class Food {
    constructor(x,y) {
        this.pos = {x: x, y: y};
        this.minSize = 3;
        this.maxSize = 5;

        this.size = utility.randomInt(this.minSize, this.maxSize);

        this.color = '#138D75';
    }

    draw(snake) {
        this.pos.x -= snake.velocity.x;
        this.pos.y -= snake.velocity.y;

        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.pos.x, this.pos.y, this.size, 0, 2*Math.PI);
        ctx.fill();
    }

    die() {
        let index = game.foods.indexOf(this);
        game.foods.splice(index,1);
    }
}