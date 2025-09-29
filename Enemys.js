class Enemy {
    constructor(name) {
        this.name = name;
        this.speed = 2;
        this.attack = 5;
        this.health = 100;
        this.defend = 2;
    }

    attackEnemy() {
        return `${this.name} attack! attack = ${this.attack}`;
    }

    walk() {
        return `${this.name} walk, speed = ${this.speed}`;
    }

    dash() {
        return `${this.name} dash, speed = 5`;
    }

    getInformation() {
        return `${this.name} memiliki speed=${this.speed}, attack=${this.attack}, health=${this.health}, dan defend=${this.defend}`;
    }
}

const stiche = new Enemy("Stiche");
console.log(stiche.attackEnemy());
console.log(stiche.walk());
console.log(stiche.dash());
console.log(stiche.getInformation());


