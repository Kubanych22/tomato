export class Counter {
  constructor(id, nameCounter, counterValue) {
    this.id = id;
    this.nameCounter = nameCounter;
    this.counterValue = counterValue;
  }
  
  getName() {
    return `${this.id}: ${this.nameCounter}`;
  }
  
  setName(name) {
    this.nameCounter = name;
  }
  
  increaseCounterValue() {
    this.counterValue++;
    return this;
  }
  
  getCount() {
    return this.counterValue;
  }
  
  setCount(counterValue) {
    this.counterValue = counterValue;
    return this;
  }
}

export const counter = new Counter('1', 'Счетчик 1', 22)
