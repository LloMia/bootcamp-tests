function countRegNumber(reg){
  var list = reg.split(", ");
  var number = list.length;
  return number;
}

assert.equal(countRegNumber("CA 182736, CY 523519"), 2);

assert.equal(countRegNumber("CA 182736"), 1);
