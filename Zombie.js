class Zombie{
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x, y, width, height);

        this.width = width;
        this.height = height;

        World.add(world, this.body);



    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y, this.width, this.height);
        rotate(this.body.angle);

        rectMode(CENTER);
        rect(0, 0, this.width, this.height);

        pop();
    }
}