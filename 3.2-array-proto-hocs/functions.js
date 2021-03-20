"use strict";
// Задача 1 Практика функций высшего порядка

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
	return weapons.map(item => item.name);
}

function getCountReliableWeapons (durability) {
	return weapons.filter(item => item.durability > durability).length;
}

function hasReliableWeapons (durability) {
	return weapons.some(item => item.durability > durability);
}

function getReliableWeaponsNames (durability) {
	const weaponsFilter = weapons.filter(item => item.durability > durability);
	return weaponsFilter.map(item => item.name);
}
 
function getTotalDamage () {
	return weapons.reduce((sum, item) => {
    	return (sum + item.attack);
 	}, 0);
}

// ++ для проверки необязательной функции 
const data =[1,2,3,5,2,7,3,5,2];
const number = 10;
// -- для проверки необязательной функции 

function getValuestCountToSumValues (data, number) {
	let sum = 0;
	let arraySum = data.map(function(data) {
		return (sum = sum + data)});
	const check = arraySum.findIndex(item => item >= number);
	if (check >= 0) { 
		return (check + 1);
	}
	else return	(arraySum.length);
}


// Задача 2 Ускорение долгих вычислений

function sleep(milliseconds) 
{
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
    	return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return (arr1.every(function(item) {
     	return item === arr2[arr1.indexOf(item)];
 	}) && arr1.length === arr2.length);  
}

//++ для проверки сравнения массивов 

//compareArrays([8, 9], [6]); // false, разные значения
//compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
//compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
//compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
//compareArrays([8, 1, 2], [8, 1, 2]); // true

//-- для проверки сравнения массивов

let memory = [{
	args:  [],
	result: 0
}];

//++ для проверки оптимизации

//memory.push({args: [3,4], result: 7});
//memory.push({args: [1,3], result: 4});

//-- для проверки

function memorize(fn, limit) {
	return function() {
		
		const args = Array.from(arguments);
		const findArr = memory.find(item => compareArrays(args, item.args));
		let result = 0;

		if (findArr === undefined) {
			result = fn.apply(null,Array.from(arguments));
			memory.push({args: args, result: result});
			if (memory.length > limit) {
				memory.shift();
			}
			return result;	
		}
		else {
			console.log("Выведено из памяти");
			return findArr.result;
		}
	}
}

const resultFunction = memorize(sum, 5);
console.log(resultFunction(1,2));
console.log(resultFunction(3,4)); 
console.log(resultFunction(5,6)); 
console.log(resultFunction(1,2)); 
console.log(resultFunction(3,4));
console.log(resultFunction(9,8));
console.log(resultFunction(10,12));
console.log(resultFunction(14,12));
console.log(resultFunction(17,12));
console.log(resultFunction(1,2));
