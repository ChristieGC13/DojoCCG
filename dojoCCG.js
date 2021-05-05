class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        if( target instanceof Unit ) {
            target.res -= this.power;
        } else {
            throw new Error( "Nah, dude. Target must be a unit!" );
        }
    }
}

class Effect extends Card {
    constructor(name, cost, stat, mag){
        super(name, cost);
        this.stat = stat;
        this.mag = mag;
        mag > 0 ? 
            this.text = `Increase target's ${this.stat} by ${this.mag}` : this.text = `Reduce target's ${this.stat} by ${this.mag}`;
    }

    play(target){
        if( target instanceof Unit ) {
            if (this.stat.toLowercase == "resilience") {
                target.res += this.mag;
            } else {
                target.power += this.mag;
            }
        } else {
            throw new Error( "Nah, dude. Target must be a unit!" );
        }
    }
}

const rbNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const bbNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgo = new Effect("Hard Algorithm", 2, "resilience", 3);
const uPromiseReg = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
const pProgramming = new Effect("Pair Programming", 3, "power", 2);

hardAlgo.play(rbNinja);
console.log(rbNinja);
uPromiseReg.play(rbNinja);
console.log(rbNinja);
pProgramming.play(rbNinja);
console.log(rbNinja);
rbNinja.attack(bbNinja);
console.log(bbNinja);
