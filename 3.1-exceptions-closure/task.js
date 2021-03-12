"use strict";
// Задача 1 Форматтер чисел

function parseCount(data) {
    const resultParse = Number.parseInt(data);
    if (isNaN(resultParse)) {
        throw new Error("Невалидное значение");
    } 
    return resultParse;
}

function validateCount(data) {
    try {
        return parseCount(data);
    }
    catch(error) {
        return error;
    }
}
//задача 2 Треугольник

function getTriangle(a, b, c) {
    const emptyTriangle = new Triangle(0, 0, 0);
    try {
        return new Triangle(a, b, c);
    }
    catch(error) {
       return emptyTriangle;
    }
}

class Triangle {
    
    constructor(a, b, c) {
        
        this.a = +a;
        this.b = +b;
        this.c = +c;

       if ((a + b) < c || (a + c) < b || (c + b) < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        } 
    }
    
    getPerimeter() {
        if ((this.a === 0) && (this.b === 0) && (this.c === 0)) {
            return ("Ошибка! Треугольник не существует");
        }
        else return (this.a + this.b + this.c);
    } 
        
    getArea() {
        if ((this.a === 0) && (this.b === 0) && (this.c === 0)) {
            return ("Ошибка! Треугольник не существует");
        }
        else {
            const halfPerimetr = this.getPerimeter() / 2;
            const result = (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c) * halfPerimetr;
            return (+Math.sqrt(result).toFixed(3));
        }
    } 
}

