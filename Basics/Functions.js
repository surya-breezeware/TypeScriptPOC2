"use strict";
exports.__esModule = true;
var myFunc = function (num, val) {
    return num + val;
};
myFunc(25, 'asfas');
var myFunc2 = function (name, email, signedIn) {
    if (name === void 0) { name = 'surya'; }
    if (email === void 0) { email = 's@gmail.com'; }
    if (signedIn === void 0) { signedIn = false; }
};
myFunc2();
var myFunc3 = function () {
    return '';
};
var myFunc4 = function () {
    console.log('This is a void Function');
};
var myFunc5 = function (errMsg) {
    throw new Error(errMsg);
};
myFunc4();
