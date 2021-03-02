"use strict";
// Задача №1. Корни квадратного уравнения
function getSolutions(a, b, c) {
    let D; 
    let roots = []; 
    D = Math.pow(b, 2) - 4 * a * c;
    if (D === 0) {
        roots.push(- b / (2 * a));
    }
    else if (D > 0) {
        roots.push((- b + Math.sqrt(D)) / (2 * a));
        roots.push((- b - Math.sqrt(D)) / (2 * a));
    }
    
    return {
        D: D,
        roots: roots
    };
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.roots.length === 0) {
        console.log("Уравнение не имеет вещественных корней");
    }
    else if (result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X1=${result.roots[0]}`); 
    }
    else if (result.roots.length === 2) {
        console.log(`Уравнение имеет два корня. X1=${result.roots[0]}, X2=${result.roots[1]}`); 
    }
}

// Задача №2. Журнал успеваемости
function getAverageMark(marks) {
    let quantity = marks.length;
    let count = 0;
    let result;
    
    if (quantity === 0) {
        result = 0;
        return result;
    }
   
    for (let mark of marks) {
        count = count + mark;
    }
    result = count/quantity;
    return result;   
}

function getAverageScore(data = {}) {
    let countSubjects = 0;
    let quantitySubjects = 0;
    let result = {};
    
    for (let prop in data) {
        
        let averageSubject = getAverageMark(data[prop]);
        quantitySubjects++;
        countSubjects = countSubjects + averageSubject;
        result[prop] = averageSubject;
    }

    if (quantitySubjects !== 0) {
        result["average"] = countSubjects / quantitySubjects;
    }  
    else  result["average"] = 0;
    return result;
}

// Задача №3. Расшифровка данных

function getDecodedValue(secret) {
    if (secret === 0) {
        return "Родриго";
    }
    else if (secret === 1) {
        return "Эмильо";
    }
}

function getPersonData(secretData) {
    let firstNamePirates = getDecodedValue(secretData.aaa);
    let lastNamePirates = getDecodedValue(secretData.bbb);
    return {firstName: firstNamePirates, lastName: lastNamePirates};
}

