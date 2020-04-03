class Snake {
    constructor() {
        this.status = 0;

        this.pos = {x: game.SCREEN_SIZE.x/2, y:game.SCREEN_SIZE.y/2}
        this.angle = utility.randomInt(0, Math.PI);
        this.speed = 5;
        this.velocity = {x: 0, y: 0};

        this.length = 10;
        this.size = 8;
        this.maxSize = 18;

        // this.color = '#C0392B';
        this.color = '#F05E5E';
        this.snakeArr = [];

        for(let i=0;i<this.length;i++) {
            this.snakeArr.push({x: this.pos.x, y: this.pos.y});
        }
    }

    drawSnake(x,y) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(x,y, this.size, 0, 2*Math.PI);
        ctx.strokeStyle = '#A51A3C'
        ctx.fill();
        ctx.stroke();
    }

    update() {
        this.velocity.x = this.speed*Math.cos(this.angle);
        this.velocity.y = this.speed*Math.sin(this.angle);


        let half = this.size/2;
        for(let i=this.length-1;i>=1;i--) {
            this.snakeArr[i].x = this.snakeArr[i-1].x - half * Math.cos(this.angle);
            this.snakeArr[i].y = this.snakeArr[i-1].y - half * Math.sin(this.angle);
            this.drawSnake(this.snakeArr[i].x, this.snakeArr[i].y)
        }
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;

        // draw head
        this.drawSnake(this.snakeArr[0].x, this.snakeArr[0].y)

        this.checkFood();
        this.checkCollision();
        this.checkBound();
    }

    checkFood() {
        let head = {x: this.snakeArr[0].x, y: this.snakeArr[0].y};

        for(let i=0;i<game.foods.length;i++) {
            let food = game.foods[i];
            if(utility.checkCollision(head.x, head.y, this.size, food.pos.x, food.pos.y, food.size)) {
                food.die();
                this.addSize();
            }
        }

    }

    checkCollision() {
        let head = {x: this.snakeArr[0].x, y: this.snakeArr[0].y};

        // for(let i=0;i<game.foods.length;i++) {
        //     let food = game.foods[i];

        //     if(utility.checkCollision(head.x, head.y, this.size, food.pos.x, food.pos.y, food.size)) {
        //         food.die();
        //     }
        // }
    }

    checkBound() {
        let head = {x: this.snakeArr[0].x, y: this.snakeArr[0].y};

        // left
        if(head.x < game.WORLD_START.x) this.die();
        // right
        else if(head.x > game.WORLD_START.x + game.WORLD_SIZE.x) this.die();
        // top
        else if(head.y < game.WORLD_START.y) this.die();
        // bottom
        else if(head.y > game.WORLD_START.y + game.WORLD_SIZE.y) this.die();
    }

    addSize() {
        this.length++;
        this.snakeArr.push({x: -100, y: -100})

        if(this.length % 3 == 0) this.size++;
        if(this.size > this.maxSize) this.size = this.maxSize;
    }

    die() {
        this.status = 1;
        for(let i=0;i<this.snakeArr.length;i+=3) game.foods.push(new Food(this.snakeArr[i].x, this.snakeArr[i].y))

        alert('You lose')
    }
}