var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

function createBase(somenum) {
  return function (boo) {
    return somenum + boo;
  };
}
var addSix = createBase(6);
addSix(10);
addSix(21);
