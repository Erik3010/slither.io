class Utility {
    randomInt(min, max) {
        return Math.floor(Math.random()*(max + min + 1)) + min;
    }

    getDistance(a1, a2) {
        return Math.hypot(a2.x - a1.x, a2.y - a1.y);
    }

    getAngle(head, cursor) {
        return Math.atan2(cursor.y-head.y, cursor.x-head.x);
    }

    checkCollision(x1,y1,r1,x2,y2,r2) {
        return (this.getDistance(new Store(x1,y1), new Store(x2,y2)) < (r1+r2))
    }
}