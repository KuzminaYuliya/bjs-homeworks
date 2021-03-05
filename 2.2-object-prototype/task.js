"use strict";
//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function()  {
	let flag = true;
	let phrase = this.toLowerCase().replace(/\s/g, "");
	for (let i = 0; i < (phrase.length / 2); i++) {
		if (phrase[i] != phrase[phrase.length - i - 1]) {
		flag = false;}
	   }
	return flag;
}

console.log ("А роза упала на лапу Азора".isPalindrome());	

//Задача2
function getAverageMark(marks) {
    let quantity = marks.length;
    let count = 0;
    let average;
    
    if (quantity === 0) {
        average = 0;
        return average;
    }
   
    for (let mark of marks) {
        count = count + mark;
    }
    average = count / quantity;
    let roundedAverage = Math.round(average);
    return roundedAverage;   
}

//Задача3
function checkBirthday(birthday) {
    let now = new Date().getTime();
    let birthdayDate = new Date(birthday).getTime();
    let diff = now - birthdayDate;
    let age = diff / (1000 * 60 * 60 * 24 * 365);
    return (age >= 18);
}

