class Key {
    private signature: number = Math.random()
    getSignature(): number{
        return this.signature
    }
}
class Person {
    constructor (private key: Key) {}
    getKey(): Key {
        return this.key 
    }
}

abstract class House {
    protected door: boolean=false;
    constructor(protected key: Key) {}
    protected  tenants: Person[] = [];

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person)
            console.log("Open")
        } else {
            console.log("Close")
      }
    }
    abstract openDoor(key: Key): void;
}


class MyHouse extends House {
    openDoor(key: Key): void {
        if(key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('Open');
            
        } else {
            console.log('Close');
            
        }
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};