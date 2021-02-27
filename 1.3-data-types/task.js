"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
   let today = new Date();
   let percentNumber= +percent/100;
        if (percentNumber <= 0 || isNaN(percentNumber)) {	
        return `Параметр \"Процентная ставка \" содержит неправильное значение ${percent}`
    }
   
   let contributionNumber = +contribution;
       	if (contributionNumber < 0 || isNaN(contributionNumber)) {
        return `Параметр \"Сумма первоначального взноса \" содержит неправильное значение ${contribution}`; 
    } 
   
   let amountNumber = +amount;
        if (amountNumber < 0 || isNaN(amountNumber)) {	
        return `Параметр \"Сумма кредита \" содержит неправильное значение ${amount}`; 
    }

    if (amountNumber < contributionNumber) {
    	return `Параметр \"Сумма кредита \" содержит неправильное значение ${amount}`; 
    }

   let dateFrom = new Date(date);

   if (dateFrom <= today) {
   		return `Параметр \"Срок ипотеки \" содержит неправильное значение ${date}`; 
   }

   let kredit = amountNumber - contributionNumber;
   let month = dateFrom.getMonth() - today.getMonth() + (12*(dateFrom.getFullYear() - today.getFullYear()));
   let payment = kredit * (percentNumber * (1 / 12) + ((percentNumber * (1 / 12)) / ((Math.pow((1 + percentNumber * (1 / 12)),month)-1))));
   let count = payment * month;
   //console.log(count.toFixed(2));
   return +count.toFixed(2);

}   

function getGreeting(name) {
    let nameUser = (name === "" || name === undefined) ? "Аноним" : name;
    return `Привет, мир! Меня зовут ${nameUser}.`;
}