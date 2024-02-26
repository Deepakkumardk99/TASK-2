



class circle {

    constructor(
        radius = 1.0,
        color = "Red"
    ) {
        this.radius= radius;
        this.color = color;
        this.area = +(Math.PI * radius * radius).toFixed(2);;
        this.circumference = +(2 * Math.PI * radius).toFixed(2);
    }
}

const circle1 = new circle('5.6', "blue")
console.log(circle1)
console.log(circle1.area)