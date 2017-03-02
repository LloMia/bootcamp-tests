function countAllFromTown(reg, no){
	var list = reg.split(",");
  var town = [];

 for ( var i = 0; i < list.length; i ++){
 	var town1 = list[i].trim();

   if (town1.startsWith(no)){
       town.push(list);
   }
 }
  console.log(town.length);
  return town.length;
}

var fromStellies = countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341", "CL")
assert.deepEqual(fromStellies, 3)
