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
{ DTRACE_NET_SERVER_CONNECTION: [Function],
  DTRACE_NET_STREAM_END: [Function],
  DTRACE_HTTP_SERVER_REQUEST: [Function],
  DTRACE_HTTP_SERVER_RESPONSE: [Function],
  DTRACE_HTTP_CLIENT_REQUEST: [Function],
  DTRACE_HTTP_CLIENT_RESPONSE: [Function],
  global: [Circular],
  process:
   process {
     title: 'node',
     version: 'v6.11.3',
     moduleLoadList:
      [ 'Binding contextify',
        'Binding natives',
        'Binding config',
        'NativeModule events',
        'NativeModule util',
        'Binding uv',
 ...
 */

// My name is undefined