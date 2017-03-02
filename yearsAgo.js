function yearsAgo(year){
var day= new Date()
var currentYear = day.getFullYear()
var yearDef = currentYear - year
console.log(yearDef)
return yearDef
}
yearsAgo(1991)
