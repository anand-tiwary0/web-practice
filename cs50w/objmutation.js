// const o = {
//   a: "a",
//   b: "b",
//   obj: {
//     key: "key",
//   },
// };

// const o2 = o;

// o2.a = "new value";

// // o and o2 reference the same object
// console.log(o.a);

// // this shallow-copies o into o3
// const o3 = Object.assign({}, o);

// // deep copy
// function deepCopy(obj) {
//   // check if vals are objects
//   // if so, copy that object (deep copy)
//   // else return the value
//   const keys = Object.keys(obj);

//   const newObject = {};

//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     if (typeof obj[key] === "object") {
//       newObject[key] = deepCopy(obj[key]);
//     } else {
//       newObject[key] = obj[key];
//     }
//   }

//   return newObject;
// }

// const o4 = deepCopy(o);

// o.obj.key = "new key!";
// console.log(o4.obj.key);

const o = {
  a: "a",
  b: "b",
  obj: {
    key: "key",
  },
};

const o2 = Object.assign({}, o); //this is sallow copy in the sense if there are interleved objects it will just pass the reference to the
o2.a = "new value";
o2.obj.key = "new value";

console.log(o);
console.log(o2);

// const newObject = {}
function deepcopy(obj) {
  const keys = Object.keys(obj);
  const newObject = {};
  // console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (typeof obj[keys[i]] === "object") {
      newObject[key] = deepcopy(obj[key]);
    } else {
      newObject[key] = obj[key];
    }
  }
  return newObject;
}
console.log("deep copy part");
const o3 = deepcopy(o);
o.obj.key = "new key";
console.log(o3.obj.key);
