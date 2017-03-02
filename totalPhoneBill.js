function totalPhoneBill(phoneBills){
 var phone = phoneBills.split(',');
 var total = 0;

  for (var i = 0; i < phone.length; i ++){
   var results = phone[i].trim();
  if (results.startsWith('call')){
    total = total + 2.75;
  }
  else if (results.startsWith('sms')){
    total = total + 0.65;
  }
   else {
      total = total + 0.00;
   }
 }
  console.log(total)
  return 'R' + total.toFixed(2);
};
totalPhoneBill('call, sms, call, sms, sms')
