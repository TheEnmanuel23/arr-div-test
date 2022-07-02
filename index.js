const arrayDivider = (arrayMain = [], chunkLength = 0) => {
  if (!Array.isArray(arrayMain)) throw new TypeError("Expected array to split");
  if (isNaN(chunkLength))
    throw new TypeError("A number was expected as a second parameter");

  if (chunkLength === 0) return [arrayMain];

  let chunkAmount = Math.ceil(arrayMain.length / chunkLength);
  let start = 0,
    newArr = [];

  for (let i = 0; i < chunkAmount; i++) {
    let arrToWork = arrayMain.slice(0);
    newArr.push(arrToWork.splice(start, chunkLength));
    start += chunkLength;
  }

  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  return newArr;
};

module.exports = arrayDivider;
