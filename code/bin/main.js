"use strict";
var myObj = {
    id: 2,
    name: 'some name',
    method: function () { console.log('hello'); },
    methodWithReturnVal: function () { return 2; },
    sum: function (numbers) {
        return numbers.reduce(function (a, b) { return a + b; });
    }
};
var sum = myObj.sum([1, 2, 3, 4, 5]); // -> 15
//# sourceMappingURL=main.js.map