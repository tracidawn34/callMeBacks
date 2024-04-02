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

const map = function (arr, i) {
  const results = [];
  for (const element of arr) {
    results.push(i(element));
  }
  return results;
}

const filter = (collection, callback)=>{
  let result = []
  for(let num of collection){
    if(callback(num) === true){
      result.push(num)
    }
  } return result
}

const reject = (collection, callback)=>{
  let results = []
  for(let num of collection){
    if(callback(num) === false){
      results.push(num)
    }
  } return results
}

const uniq = (collection) =>{
  let uniqueArr = []

  for(let i = 0; i < collection.length; i++){
    let newCollection = collection[i]

    if(uniqueArr.indexOf(newCollection) === -1){
      uniqueArr.push(newCollection)
    }
  }   return uniqueArr
}

const reduce = (collection, callback, initialVal) =>{
  let accumulator = initialVal
  for(let key in collection){
   if(accumulator === undefined){
     accumulator = collection[key]
   }
   accumulator = callback(accumulator, collection[key])
  }
     return accumulator
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