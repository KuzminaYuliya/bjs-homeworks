
function getResult(a,b,c) {
    "use strict";
    let discriminant; 
    let x1;  
    let x2; 
    let x = []; 
    discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant === 0) {
        x1 = - b / (2 * a);
        x.push(x1);
    }
    else if (discriminant > 0) {
        x1 = (- b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (- b - Math.sqrt(discriminant)) / (2 * a); 
        x.push(x1);
        x.push(x2);
    }
    return x;
}

function getAverageMark(marks) {
    "use strict";
    let quantity = marks.length;
    let count = 0;
    let result;
    
    if (quantity === 0) {
        result = 0;
        return result;
    }
    else if (quantity > 5) {
        console.log("Для подсчета среднего бала, берем только первые 5 оценок");
        marks = marks.slice(0, 5);
        quantity = marks.length;
    }
    
    for (let mark of marks) {
        count = count + mark;
    }
    result = count/quantity;
    return result;
}

function askDrink(name,dateOfBirthday) {
    "use strict";
    let result;
    let today = new Date();
    let age = today.getFullYear() - dateOfBirthday.getFullYear();
    let month = today.getMonth() - dateOfBirthday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dateOfBirthday.getDate())) {
        age--;
    }

    if (age >= 18) { 
        result = `Не желаете ли олд-фэшн, ${name}?`
    }
    else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!` 
    }
    return result;
}