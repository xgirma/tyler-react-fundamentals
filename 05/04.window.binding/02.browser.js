let sayName = function(){
    console.log(this);
    console.log('My name is ' + this.name);
};

let stacey = {
    name: 'Stacy',
    age: 25,
};

sayName(stacey);

/*
[object Window] {
  addEventListener: function addEventListener() { [native code] },
  alert: function alert() { [native code] },
  applicationCache: [object ApplicationCache] {
    abort: function abort() { [native code] },
    addEventListener: function addEventListener() { [native code] },
    CHECKING: 2,
    dispatchEvent: function dispatchEvent() { [native code] },
    DOWNLOADING: 3,
    IDLE: 1,
    OBSOLETE: 5,
    oncached: null,
    onchecking: null,
    ondownloading: null,
    onerror: null,
    onnoupdate: null,
    onobsolete: null,
    onprogress: null,
    onupdateready: null,
    removeEventListener: function removeEventListener() { [native code] },
 ...
 */

// My name is undefined