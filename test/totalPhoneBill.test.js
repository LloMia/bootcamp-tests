describe("totalPhoneBill", function () {
  it ("it should return ''R' + total.toFixed(2)' when given 'call, sms, call, sms, sms' ", function() {
  assert.equal(totalPhoneBill('call, sms, call, sms, sms'), "R7.45");
});
})
