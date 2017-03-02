function regCheck(reg, prov){
var Check = reg.endsWith(prov);
  return Check;
}

var isGP = regCheck('23 LP GP', 'GP');
console.log(isGP);
//assert.equal(regCheck('23 LP GP', 'GP'))
var isMP = regCheck('23 LP GP', 'MP');
console.log(isMP)
