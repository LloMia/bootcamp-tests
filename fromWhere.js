function fromWhere(reg){

if (reg === "CY"){
	return "Bellville"}
else if (reg === "CJ"){
	return "Paarl"}
else if (reg === "CA"){
	return "Cape Town"}
else {
	return "Some other place!"}
}

assert.equal(fromWhere("CY"), "Bellville")
assert.equal(fromWhere("CJ"), "Paarl")
assert.equal(fromWhere("CA"), "Cape Town")
assert.equal(fromWhere("L"), "Some other place!")
