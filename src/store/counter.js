import {makeAutoObservable} from "mobx";

class Counter {
  count = 0
  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.count = this.count + 1
  }

  decrement() {
    this.count = this.count - 1
  }

  get total() {
    return this.count + 10
  }
}

export default new Counter();