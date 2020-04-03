class Game {
    constructor(width, height) {
        this.WORLD_START = new Store(-1000, -500);
        this.WORLD_SIZE = new Store(5000, 1000)
        this.SCREEN_SIZE = new Store(width,height);
        this.foods = [];
        this.snakes = [];
    }

    init() {
        this.snakes.push(new Snake());
        this.generateFood(300)
    }

    generateFood(count) {
        for(let i=0;i<count;i++) {
            // this.foods.push(new Food(utility.randomInt(this.WORLD_START.x, this.WORLD_SIZE.x), utility.randomInt(this.WORLD_START.y, this.WORLD_SIZE.y)));
            this.foods.push(new Food(utility.randomInt(-1000, 5000), utility.randomInt(-500, 1500)));
        }
        console.log(this.foods);
    }

    draw() {
        this.drawWorld();

        if(this.snakes[0].status === 0) this.snakes[0].update();

        for(let i=0;i<this.foods.length;i++) this.foods[i].draw(this.snakes[0]);
    }

    drawWorld() {
        // stroke
        ctx.fillStyle = 'white';
        ctx.fillRect(this.WORLD_START.x-2, this.WORLD_START.y-2, this.WORLD_SIZE.x+4, this.WORLD_SIZE.y+4);

        // background
        ctx.fillStyle = '#17202A';
        ctx.fillRect(this.WORLD_START.x, this.WORLD_START.y, this.WORLD_SIZE.x, this.WORLD_SIZE.y)

        this.WORLD_START.x -= this.snakes[0].velocity.x;
        this.WORLD_START.y -= this.snakes[0].velocity.y;
    }
}