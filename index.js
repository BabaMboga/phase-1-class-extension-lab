// Your code here
class Polygon {
    constructor (sides){
        this.sides = sides
    }

    get countsides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((a,b) => a + b);
    }
}
