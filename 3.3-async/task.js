"use strict";
// Задача 1 Будильник-колыбельная

class AlarmClock {
    constructor(alarmCollection , timerId) {
        this.alarmCollection = []; 
        this.timerId = null; 
    }
    
    addClock(time, callback, id) {
        if (isNaN(id)|| id === undefined) {
            throw new Error("Не передан id");
        } 
        try { 
            if (this.alarmCollection.every(item => item.timerId !== id)) {
                this.alarmCollection.push(({timerId: id, time: time, callback: callback}));
            }
        }   
        catch(error) {
            return error;
        }
    }

    removeClock(id) {
        const idx = this.alarmCollection.findIndex(item => item.timerId == id);
        try {
          if (idx > -1) {
            this.alarmCollection.splice(idx, 1);
          }
        } 
        catch(error) {
          return error;
        }
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const curenthours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const curentminutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return(`${curenthours}:${curentminutes}`);
    }

    start() {
        function checkClock(call) {
          if (call.time === getCurrentFormattedTime) {
            call.callback();
          }
        } 
        
        if (this.timerId === undefined) {
          this.timerId = setInterval(this.alarmCollection.every(checkClock));
         }
    }

    stop() {
        if (this.timerId !== null) {
          clearInterval(this.timerId);
          this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(item.timerId + " Будильник-колыбельная " + item.time));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection.splice(0, this.alarmCollection.length);
    } 
}  
    function testCase() {
        let clock = new AlarmClock();
        clock.addClock("22:50", () => console.log("Пора вставать"), 1);
        clock.addClock("22:51", () => console.log("Пора вставать2"), 2);
        clock.removeClock(2);
        //clock.addClock("22:51", () => console.log("Пора вставать2"));
         
        clock.addClock("22:52", () => {
          console.log("Встать");
          clock.clearAlarms();
          clock.printAlarms();  
        },3);


        clock.addClock("22:53", () => console.log("Пора вставать2"),1);
        clock.printAlarms();
    }
    
    testCase();