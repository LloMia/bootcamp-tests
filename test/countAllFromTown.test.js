describe("countAllFromTown", function () {
  it ("it should return 'town.length' when given 'CL 124,CY 567,CL 345, CJ 456,CL 341' ", function() {
  assert.equal(countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341", "CL"), "3");
});
})
