function countAllPaarl(reg){
	var list = reg.split(", ");
  var paarl = []
 for ( var i = 0; i < list.length; i ++){
 	var paarl1 = list[i]
   if (paarl1.startsWith("CJ")){
       paarl.push(paarl1)
   }
 }

  return paarl.length
}

var length = countAllPaarl("CJ 133, CY 095, CA 482, CJ 010")
console.log(length)
