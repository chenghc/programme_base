// 合并2个有序数组为一个数组
var mergeTwoArray = (oArray, tArray) => {
  var totalArray = [];
  while (oArray.length && tArray.length) {
    if (oArray[0] < tArray[0]) {
      totalArray.push(oArray.shift());
    } else {
      totalArray.push(tArray.shift());
    }
  }

  return totalArray.concat(oArray).concat(tArray);
}

var o = [1, 3, 4, 7];
var t = [1, 2, 5, 6, 9];
console.log(mergeTwoArray(o, t));


// 合并1个二维数组为有序一维数组
var mergeArrays = (arrays) => {
  var total = [];
  for (const array of arrays) {
    total = mergeTwoArray(total, array);
  }

  return total;
}

var a = [[1, 2, 3], [1, 5, 7], [2, 4, 6, 7], [2, 3, 5, 9]];
console.log(mergeArrays(a));
