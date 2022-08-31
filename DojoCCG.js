class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost)
        this.power = power;
        this.res = res; 
    }

    attack(target){
        if( target instanceof Unit){
            console.log(`${this.name} has attacked ${target.name}`);
            target.res -= this.power; 
        }else{
            throw new Error ("Target must be a unit!");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, magnitude, stat){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        if(target instanceof Unit){
            if(this.stat == "power"){
                target.power += this.magnitude;
            }
            target.res += this.magnitude;
        }else{
            throw new Error ("Target must be a unit!");
        }
    }
}

const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3,4);
const HardAlgo = new Effect("Hard Algorithm", 2, "increase target's resillience by 3", +3, "resillience");
HardAlgo.play(RedBeltNinja);
console.log(RedBeltNinja);

const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5,4);
const UnhandedPromise = new Effect("Unhanded Promise Rejection", 1, "reduce target's resillience by 2", -2 ,"resillience");
UnhandedPromise.play(RedBeltNinja);
console.log(RedBeltNinja);

const PairProgramming = new Effect('Pair Programming', 3, "increase target's power by 2", +2, "power");
RedBeltNinja.attack(BlackBeltNinja);

