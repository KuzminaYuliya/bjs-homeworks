"use strict";
// Задача 1 Печатное издание

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name; 
    	this.releaseDate = releaseDate; 
    	this.pagesCount = pagesCount;
    	this.state = 100;
    	this.type = null; 
    }

    fix() {
    	this.state = this.state*1.5;
    }

    set state(state) {
    	if (state < 0) {
    		this._state = 0;
    	}
    	else if (state > 100 ) {
			this._state = 100;
    	}
	    else {
	    	this._state = state;
	    }
    }

    get state() {
    	return this._state;
    }
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine"; 
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book"; 
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel"; 
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic"; 
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective"; 
	}
}

//++ 1-ый пример использования
const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); 
console.log(sherlock.state); 
sherlock.fix();
console.log(sherlock.state); 
//-- 1-ый пример использования

//++ 2-ой пример использования
const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); 
picknick.state = 10;
console.log(picknick.state); 
picknick.fix();
console.log(picknick.state); 
//-- 2-ой пример использования


//Задача2 Библиотека

class Library {
	constructor(name) {
		this.name = name; 
    	this.books = []; 
    }	

    addBook(book) {
		
		if (book.state > 30) {
    		this.books.push(book);
    	}
    }

	findBookBy(type, value) {
		for(let i = 0; i < this.books.length; i++) {
  			if(this.books[i][type] === value) {
  				return this.books[i];
    		}
    	} 
    	return null;
	}

	giveBookByName(bookName) {
		let searchBook = this.findBookBy("name", bookName);
		if (searchBook !== null) {
			this.books.splice(this.books.indexOf(searchBook),1);
			}
		return 	searchBook;
	}
}	

//++ пример использования
const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
//-- пример использования

//Задача3  Школьный журнал 

class StudentLog {
	constructor(name) {
		this.name = name;
		this.marks = [];
	}

	getName() {
		return this.name;
	}

	addGrade(grade, subject = NULL) {
		let error = "";
		let count = 0;
		if (grade >= 1 && grade <= 5 && subject !== "" && subject !== undefined) {
    		this.marks.push({subject: subject, grade: grade});
    	}
    	else if (grade < 1 || grade > 5 || isNaN(grade)) {
			error = `Вы пытались поставить оценку \"${grade}\" по предмету ${subject}. Допускаются только числа от 1 до 5`;
    	}
    	else if (subject === "" || subject === undefined) {
			error = `Такого предмета ${subject} не существует`;
    	}

    	for (let mark of this.marks) {
    		if (mark.subject === subject) {
    			count++;
    		}
    	}
		return "\n" + error + "\n" + count;
	}

	getAverageBySubject(subject) {
		let quantity = 0;
	    let count = 0;
	    for (let mark of this.marks) {
    		if (mark.subject === subject) {
    			count = count + mark.grade;
    			quantity++;
    		}
    	}
	    
	    if (quantity === 0) {
	        return 0;
	    }
	    else return Math.round(count / quantity);
	}

	getTotalAverage() {
		let count = 0;
		let quantity = 0;
		
	    for (let mark of this.marks) {
    		count = count + mark.grade;
			quantity++;
    	}
	    
	    if (quantity === 0) {
	        return 0;
	    }
	    else return +(count / quantity).toFixed(1);
	}
}

//++ пример использования
const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) // Олег Никифоров
console.log(log.addGrade(3, 'algebra'));
// 1
console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0
console.log(log.addGrade(4, 'algebra'));
// 2
console.log(log.addGrade(5, 'geometry'));
// 1
console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5 // в Жасмине проверка по целой части, поэтому округляем
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0


log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage());

//-- пример использования

