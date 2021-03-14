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
    try {
        return new Triangle(a, b, c);
    }
    catch(error) {
       return new EmptyObject;
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
        return (this.a + this.b + this.c);
    } 
        
    getArea() {
        const halfPerimetr = this.getPerimeter() / 2;
        const result = (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c) * halfPerimetr;
        return (+Math.sqrt(result).toFixed(3));
        }
    } 

class   EmptyObject extends Triangle {
	
	getPerimeter() {
        return ("Ошибка! Треугольник не существует");
        }
     
    getArea() {
       return ("Ошибка! Треугольник не существует");
        }
}

