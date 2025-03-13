// default export

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// module.exports = add;
// module.exports = sub;

// in these situation second one it means latter on package will execute first will not execute
// module.exports = add
// module.exports = sub

module.exports = { add, sub }; // default export onlu time export and it override previous exports
// note : Modules.exports can use only one time but export.functionName use mulitple times

// this is multiple exports you can exports as per requirement no restriction in the exports
// exports.addfn = (a, b) => a + b;
// exports.subfn = (a, b) => a - b;
