// Open close principle

class Shape {
    area(){
        throw new Error('Area method shout be implemented');
    }
}


 class Square extends Shape{
     constructor(size) {
         super()

         this.size = size
     }
        area() {
            return this.size ** 2
        }
 }

 class Circle extends Shape{
     constructor(radius) {
         super();
         this.radius = radius
     }
     area() {
         return (this.radius ** 2) * Math.PI
     }
 }

class Rect extends Shape{
    constructor(width,height) {
        super()
        this.height = height;
        this.width = width;
    }
    area() {
        return this.width * this.height
    }
}


class Triangle extends Shape{
    constructor(a,b) {
        super();
        this.a = a;
        this.b = b
    }

    area() {
        return (this.a * this.b) /2
    }

}

class AreaCanclutator {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum(){
        return this.shapes.reduce((acc,shape)=>{
            acc += shape.area()
            return acc
        },0)
    }
}




const  calc = new AreaCanclutator([
    new Square(10),
    new Circle(1),
    new Circle(5),
    new Rect(10,20),
    new Triangle(10,15)
])

console.log(calc.sum())