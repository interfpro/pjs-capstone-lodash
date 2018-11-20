let _ = {
  //------------clamp() method------------------
  clamp: (number, lower, upper) => {
    if(number >= lower && number <=upper){
      return number;
    }
    else if(number < lower){
      return lower;
    }
    else if(number > upper){
      return upper;
    }
  },

  //------------inRange() method------------------
  inRange: (number, start, end) => {
    if(end == undefined){
      end = start;
      start = 0;
    }
    if(start > end){
      temp = start;
      start = end;
      end = temp;
    }
    if(number >= start && number < end){
      return true;
    }
    return false;
  },

  //------------words() method------------------
  words: st => st.split(" "),

  //------------pad() method------------------
  pad: (st, number) => {
    if(st.length >= number){
      return st;
    } else {
      let padValue = (number - st.length)/2;
      if((number - st.length) % 2 == 0){
        return " ".repeat(padValue) + st + " ".repeat(padValue);
      } else {
        return " ".repeat(padValue) + st + " ".repeat(padValue+1);
      }
    }
  },

  //------------has() method------------------
  has: (ob, value) => ob.hasOwnProperty(value),

  //------------invert() method------------------
  invert: object => {
    let keys = Object.keys(object);
    let values = Object.values(object);
    temp = keys;
    keys = values;
    values = temp;
    const newObject = {};
    for(let i = 0; i < keys.length; i++){
      newObject[keys[i]] = values[i];
    }
    return newObject;
  },

  //------------findKey() method------------------
  findKey: (object, func) => {
    let values = Object.values(object);
    let keys = Object.keys(object);
    for(let i = 0; i < values.length; i++){
    if(func(values[i]) == true){
      return keys[i];
    }
  }
    return undefined;
  },

  //------------drop() method------------------
  drop: (array, number) => number != undefined ? array.slice(2) : array.slice(1),

  //------------dropWhile() method------------------
  dropWhile: (array, func) => {
    for(let i = 0; i < array.length; i++){
      if(func(array[i], i, array) == true){
      } else {
        return array.slice(i);
      }
    }
  },

  //------------chunk() method------------------
  chunk: (array, number) => {
    newArray = [];
    if(number == undefined){
      number = 1;
    }
    if(number >= array.length){
      return array;
    }
    let i = 0;
    while(i < array.length){
      tempArray = [];
      if(array.length-i < number){
        number = array.length-i;
      }
      for(let j = 0; j < number; j++){
        tempArray[j] = array[i+j];
      }
      newArray.push(tempArray);
      i += number;
    }
    return newArray;
  }
};



// Do not write or modify code below this line.
module.exports = _;
