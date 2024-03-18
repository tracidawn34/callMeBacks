const identity = function (x) {
  return x
};

const first = function (arr,n ) {
  if (n === undefined) {
    return arr[0]
  }
  return arr.slice(0,n)
};
  
const last = function (arr, n) {
  if (n === 0) {
    return [];
  }
  if (n === undefined) {
    return arr[arr.length - 1];
  } else {
    return arr.slice(-n);
  }
};

const each = function () {
  
};

const indexOf = function (str, search) {
  for(let i = 0; i < str.length; i++){
    if(str[i] === search){
      return i
    }
  } return -1
};

const map = function () {

}

const filter = (collection, callback)=>{

}

const reject = (collection, callback)=>{

}

const uniq = (collection) =>{

}

const reduce = (collection, callback, initialVal) =>{

}

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
  filter, 
  reject, 
  uniq, 
  reduce
};