var myInstanceof = (instance, parent) => {
  var _proto_ = instance.__proto__;
  while(true) {
    if (_proto_ === parent.prototype) {
      return true;
    }

    if (_proto_ === null) {
      return false;
    }
    _proto_ = _proto_.__proto__;
  }
}

function Person() {};
function Boy() {};
function Girl() {};
Boy.prototype = new Person();
var boy = new Boy();
console.log(myInstanceof(boy, Girl));
console.log(myInstanceof(boy, Boy));
console.log(myInstanceof(boy, Person));
console.log(myInstanceof(boy, Object));