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
	return weapons.filter(item => item.durability > durability).map(item => item.name);
}
 
function getTotalDamage () {
	return weapons.reduce((sum, item) => (sum + item.attack),0);
}

// ++ для проверки необязательной функции 
const data =[1,2,3,5,2,7,3,5,2];
const number = 10;
// -- для проверки необязательной функции 

function getValuestCountToSumValues (data, number) {
	let n = 0;
	let result = data.reduce(function(sum, element) {
		if (sum >= number) {
			return sum;
		}
		else {
			n = n + 1;
			return sum + element;
		}
},0)
	return n;
}

	console.log(getValuestCountToSumValues (data, number));
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
    return (arr1.length === arr2.length && arr1.every(function(item, index) {return item === arr2[index]}));
}

//++ для проверки сравнения массивов 

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true
console.log(compareArrays([1, 2, 3, 1, 2], [1, 2, 3, 3, 3])); // false
//-- для проверки сравнения массивов

//++ для проверки оптимизации

//memory.push({args: [3,4], result: 7});
//memory.push({args: [1,3], result: 4});

//-- для проверки

function memorize(fn, limit) {
	let memory = [];
	return function(...rest) {
		const findArr = memory.find(item => compareArrays(rest, item.args));
		let result = 0;

		if (findArr) {
			console.log("Выведено из памяти");
			return findArr.result;
		}

		result = fn.apply(null,rest);
		memory.push({args: rest, result});
		if (memory.length > limit) {
			memory.shift();
		}
			return result;
	}
}
// ++ для проверки
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
// -- для проверки