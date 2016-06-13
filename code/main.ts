import { IMyInterface } from './IMyInterface';

let myObj: IMyInterface = {
  id: 2,
  name: 'some name',

  method() { console.log('hello'); },
  methodWithReturnVal () { return 2; },
  sum(numbers) {
    return numbers.reduce( (a,b) => { return a + b } );
  }
};

let sum = myObj.sum([1,2,3,4,5]); // -> 15